import React from "react";
import headset from "../assets/headset.png";
import { useNavigate } from "react-router-dom";

const Merchandising: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div
      className="
      flex desktop:h-60 mobile:h-[28em]
      flex-col justify-center items-center
      gap-[1em] mobile:py-[2em]"
    >
      <h1
        className="
        font-bold desktop:text-3xl mobile:text-2xl
        desktop:w-[19em] mobile:w-[10em] text-center
        "
      >
        FREE SHIPPING WITH EVERY PURCHASE. TAKE ADVANTAGE OF OUR OFFERS.
      </h1>
      <div
        className="
          flex bg-center bg-cover
          h-[496px] w-[320px] desktop:hidden"
        style={{ backgroundImage: `url(${headset})` }}
      ></div>
      <button
        className="bg-primary
        w-52 h-11 rounded-3xl 
        font-semibold text-background-1 transition ease-in-out 
        delay-150 hover:-translate-y-1 hover:scale-110"
        onClick={() => navigate("/checkout")}
      >
        PURCHASE SEADOT
      </button>
    </div>
  );
};

export default Merchandising;
