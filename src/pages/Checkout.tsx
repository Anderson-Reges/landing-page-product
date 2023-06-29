import React from "react";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer";
import angle from '../assets/angle-right-solid.svg';

const Checkout: React.FC = () => {
  return (
    <>
      <Nav />
      <header
        className="
        flex desktop:flex-col desktop:pt-[200px] desktop:pb-[90px]
        bg-background-2"
      >
        <span
          className="desktop:mx-[55px] text-5xl font-extrabold mb-3"
        >
          CHECKOUT
        </span>
        <div className="desktop:mx-[55px] flex">
          <span className="text-background-3 opacity-[0.4] hover:opacity-[1] mr-1">
            <a href="/">Home</a>
          </span>
          <img src={angle} alt="angle-right" className="w-[0.6em]" />
          <span
            className="ml-1"
          >Checkout</span>
        </div>
      </header>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Checkout;
