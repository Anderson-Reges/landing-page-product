import React from "react";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import { SlideContext } from "../../context/SlideProvider";
import { useNavigate } from "react-router-dom";
import { ItemContext } from "../../context/ItemProvider";

const Slider: React.FC = () => {
  const { slide, setSlide } = React.useContext(SlideContext);
  const { itemCart, setItemCart } = React.useContext(ItemContext);
  const navigate = useNavigate()

  const handleSlider = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.id === "slide1") {
      setSlide({ slide1: true, slide2: false });
    } else {
      setSlide({ slide1: false, slide2: true });
    }
  };

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
    const timer = setInterval(() => {
      setSlide((prevState) => ({
        slide1: !prevState.slide1,
        slide2: !prevState.slide2,
      }));
    }, 10000);

    const cartStorage = localStorage.getItem("cart");
    cartStorage && setItemCart(JSON.parse(cartStorage));

    return () => {
      clearInterval(timer);
    };
  }, [setItemCart, setSlide]);

  return (
    <div className="h-[604px]">
      {slide.slide1 && (
        <Slide1
          containerClassName={`absolute transition-opacity ${
            slide.slide1 ? "animate-fadeIn" : "animate-fadeOut"
          }`}
        />
      )}
      {slide.slide2 && (
        <Slide2
          containerClassName={`absolute transition-opacity ${
            slide.slide2 ? "animate-fadeIn" : "animate-fadeOut"
          }`}
        />
      )}
      <button
        data-testid="slide-button-purchase"
        className="
            absolute desktop:top-[27em] mobile:top-[28em]
            desktop:ml-20 mobile:ml-3 bg-background-1 
            w-52 h-11 justify-center items-center rounded-3xl 
            font-semibold text-primary transition ease-in-out 
            delay-150 hover:-translate-y-1 hover:scale-110
            mobile:tracking-widest tablet:ml-16"
        onClick={ checkStorage }
      >
        PURCHASE SEADOT
      </button>
      <label>
        <input
          type="radio"
          className="absolute form-radio
            ml-20 checked:bg-background-3 text-background-3
            focus:ring-transparent focus:ring-offset-0 border-none
            cursor-pointer mobile:hidden desktop:block"
          name="slide"
          checked={slide.slide1}
          id="slide1"
          onChange={handleSlider}
        />
      </label>
      <label>
        <input
          type="radio"
          className="absolute ml-[6.2em]
            checked:bg-background-3 text-background-3 focus:ring-0
            border-none focus:ring-offset-0 cursor-pointer mobile:hidden desktop:block"
          name="slide"
          checked={slide.slide2}
          id="slide2"
          onChange={handleSlider}
        />
      </label>
    </div>
  );
};

export default Slider;
