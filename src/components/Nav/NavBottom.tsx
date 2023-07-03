import React from "react";
import cart from "../../assets/cart-icon.svg";
import Dropdown from "../Dropdown/Dropdown";
import DropdownMob from "../Dropdown/DropdownMob";
import { useLocation, useNavigate } from "react-router-dom";
import { ItemContext } from "../../context/ItemProvider";
import IItemCart from "../../interfaces/IItemCart";

const NavBottom: React.FC = () => {
  const { itemCart, setItemCart } = React.useContext(ItemContext);
  const itemInStorage: IItemCart = JSON.parse(localStorage.getItem("cart") as string)
  const navigate = useNavigate();
  const location = useLocation();

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
    const cartStorage = JSON.parse(localStorage.getItem("cart") as string);
    cartStorage && setItemCart(cartStorage);
  }, [setItemCart]);

  return (
    <nav className="flex justify-evenly border-b h-16 items-center desktop:ml-[4em]">
      <div className="w-60 font-bold text-4xl mobile:text-3xl text-center">
        <a href="/">SEA DOT</a>
      </div>
      <Dropdown />
      <a
        href="#features"
        className="
        hidden text-background-3 font-semibold rounded
        items-center desktop:flex"
      >
        FEATURES
      </a>
      <a
        href="#tech"
        className="
        hidden text-background-3 font-semibold rounded
        items-center desktop:flex"
      >
        TECH SPECS
      </a>
      <a
        href="#contact"
        className="
        hidden text-background-3 font-semibold rounded
        items-center desktop:flex"
      >
        CONTACT
      </a>
      {
        location.pathname === "/" &&
        <button
          className="
          mobile:hidden desktop:flex bg-primary w-52 h-11 justify-center
          items-center rounded-3xl font-bold text-background-1"
          onClick={checkStorage}
        >
          BUY NOW
        </button>
      }
      <a href="/cart">
        <img src={cart} alt="" className="block desktop:hidden w-6" />
        { itemInStorage && (
          <>
            <span
              className="w-3 h-3 bg-primary rounded-full
              animate-ping absolute right-[4.2em] bottom-[2.2em] cursor-pointer
              desktop:hidden"
              onClick={() => navigate("/cart")}
            />
            <span
              className="w-3 h-3 bg-primary rounded-full
              absolute right-[4.2em] bottom-[2.2em] cursor-pointer
              desktop:hidden"
              onClick={() => navigate("/cart")}
            />
          </>)
        }
      </a>
      <DropdownMob />
    </nav>
  );
};

export default NavBottom;
