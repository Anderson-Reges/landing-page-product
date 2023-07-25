import React from "react";
import headset from "../assets/headset.png";
import { useNavigate } from "react-router-dom";
import { ItemContext } from "../context/ItemProvider";

const Merchandising: React.FC = () => {
  const { itemCart, setItemCart } = React.useContext(ItemContext);
  const navigate = useNavigate();

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
    <div
      className="
      flex desktop:h-60 mobile:h-[28em]
      flex-col justify-center items-center
      gap-[1em] mobile:py-[2em]"
      data-testid="merchandising-container"
    >
      <h1
        className="
        font-bold desktop:text-3xl mobile:text-2xl
        desktop:w-[19em] mobile:w-[10em] text-center
        tablet:w-[20em] tablet:text-3xl"
        data-testid="merchandising-heading"
      >
        FREE SHIPPING WITH EVERY PURCHASE. TAKE ADVANTAGE OF OUR OFFERS.
      </h1>
      <div
        className="
          flex bg-center bg-cover
          h-[180px] w-[180px] desktop:hidden"
        style={{ backgroundImage: `url(${headset})` }}
      ></div>
      <button
        className="bg-primary
        w-52 desktop:h-11 rounded-3xl mobile:h-11
        font-semibold text-background-1 transition ease-in-out 
        delay-150 hover:-translate-y-1 hover:scale-110 tablet:h-[6em]"
        data-testid="merchandising-btn"
        onClick={ checkStorage }
      >
        PURCHASE SEADOT
      </button>
    </div>
  );
};

export default Merchandising;
