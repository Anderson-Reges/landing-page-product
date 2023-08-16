import React from "react";
import cart from "../../assets/cart-icon.svg";
import Dropdown from "../Dropdown/Dropdown";
import DropdownMob from "../Dropdown/DropdownMob";
import { useLocation, useNavigate } from "react-router-dom";
import { ItemContext } from "../../context/ItemProvider";

const NavBottom: React.FC = () => {
  const { itemCart, setItemCart } = React.useContext(ItemContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const checkStorage = (): void => {
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", JSON.stringify(itemCart));
      navigate("/cart");
    } else {
      addItemInCart();
    }
  };

  const addItemInCart = (): void => {
    const newItem = {
      name: itemCart.name,
      price: itemCart.price,
      quantity: itemCart.quantity + 1,
      subtotal: itemCart.price * (itemCart.quantity + 1),
    };
    localStorage.setItem("cart", JSON.stringify(newItem));
    setItemCart(newItem);
    navigate("/cart");
  };

  React.useEffect(() => {
    const cartStorage = localStorage.getItem("cart") as string;
    cartStorage && setItemCart(JSON.parse(cartStorage));
  }, [setItemCart]);

  return (
    <nav
      className="flex justify-evenly border-b h-16 items-center desktop:ml-[4em]"
      data-testid="navbar-bottom-container"
    >
      <div className="w-60 font-bold text-4xl mobile:text-3xl text-center">
        <a href="/">SEA DOT</a>
      </div>
      <Dropdown />
      <a
        href="#features"
        className="
        hidden text-background-3 font-semibold rounded
        items-center desktop:flex laptop:block"
      >
        FEATURES
      </a>
      <a
        href="#tech"
        className="
        hidden text-background-3 font-semibold rounded
        items-center desktop:flex laptop:block"
      >
        TECH SPECS
      </a>
      <a
        href="#contact"
        className="
        hidden text-background-3 font-semibold rounded
        items-center desktop:flex laptop:block"
      >
        CONTACT
      </a>
      {pathname === "/" && (
        <button
          className="
          mobile:hidden laptop:block desktop:flex bg-primary w-52 h-11 justify-center
          items-center rounded-3xl font-bold text-background-1"
          data-testid="navbar-bottom-btn"
          onClick={checkStorage}
        >
          BUY NOW
        </button>
      )}
      <a href="/cart" className="laptop:hidden">
        {localStorage.getItem("cart") && (
          <>
            <span
              className={`w-3 h-3 bg-primary rounded-full
              animate-ping absolute cursor-pointer ml-[1em]
              desktop:hidden  ${
                (pathname === "/cart" || pathname === "/checkout") && "mobile:hidden"
              }`}
              onClick={() => navigate("/cart")}
            />
            <span
              className={`w-3 h-3 bg-primary rounded-full
              absolute cursor-pointer ml-[1em]
              desktop:hidden ${
                (pathname === "/cart" || pathname === "/checkout") && "mobile:hidden"
              }`}
              onClick={() => navigate("/cart")}
            />
          </>
        )}
        <img
          src={cart}
          alt=""
          className={`block desktop:hidden w-6 ${
            (pathname === "/cart" || pathname === "/checkout") && "mobile:hidden"
          }`}
        />
      </a>
      <DropdownMob />
    </nav>
  );
};

export default NavBottom;
