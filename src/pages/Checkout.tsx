import React from "react";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer";
import angle from '../assets/angle-right-solid.svg';
import IItemCart from "../interfaces/IItemCart";

const Checkout: React.FC = () => {
  const itemInStorage: IItemCart = JSON.parse(localStorage.getItem("cart") as string);

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
      <section className="p-[6em] gap-[1em]">
        <div className="flex gap-[3em]">
          <form className="flex justify-between w-full gap-[3em]">
            <div className="flex flex-col gap-1 w-[50%]">
              <h1 className="mb-[1em] font-bold text-2xl">BILLING DETAILS</h1>
              <div className="flex justify-between">
                <label htmlFor="" className="flex flex-col font-semibold">
                  First name
                  <input type="text" name="" id="" className="rounded-full"/>
                </label>
                <label htmlFor="" className="flex flex-col font-semibold">
                  Last name
                  <input type="text" name="" id="" className="rounded-full"/>
                </label>
              </div>
              <label htmlFor="" className="font-semibold">
                Country / Region
              </label>
                <input type="text" name="" id="" className="rounded-full"/>
              <label htmlFor="" className="font-semibold">
                Street address
              </label>
                <input
                  type="text"
                  className="rounded-full"
                  placeholder="House number and steet name"
                />
                <input
                  type="text"
                  className="rounded-full"
                  placeholder="Apartment, suite, unit, etc. (Optional)"
                />
              <label htmlFor="" className="font-semibold">
                Town / City
              </label>
                <input type="text" name="" id="" className="rounded-full"/>
              <label htmlFor="" className="font-semibold">
                Postcode
              </label>
                <input type="text" name="" id="" className="rounded-full"/>
              <label htmlFor="" className="font-semibold">
                Phone
              </label>
                <input type="text" name="" id="" className="rounded-full"/>
              <label htmlFor="" className="font-semibold">
                Email address
              </label>
                <input type="text" name="" id="" className="rounded-full"/>
            </div>
            <div className="flex flex-col w-[50%]">
              <h1 className="mb-[1em] font-bold text-2xl">ADDITIONAL INFORMATION</h1>
              <label htmlFor="" className="flex flex-col gap-[1em] font-semibold">
                Order notes (optional)
                <textarea
                  className="resize-none rounded-2xl"
                  rows={7}
                  cols={50}
                  placeholder="Notes about your order"
                ></textarea>
              </label>
            </div>
          </form>
        </div>
        <div className="flex flex-col gap-[1em]">
          <h1 className="my-[1em] font-bold text-2xl">YOUR ORDER</h1>
          <table className="flex flex-col bg-background-2 w-[45%] p-[2em]">
            <thead className="flex justify-around">
              <th>Product</th>
              <th>Subtotal</th>
              <th>Total</th>
            </thead>
            <tbody>
              <tr className="flex justify-around text-center">
                <td className="w-[33%]">{itemInStorage.name + " x " + itemInStorage.quantity}</td>
                <td className="w-[33%]">${itemInStorage.subtotal}</td>
                <td className="w-[33%]">${itemInStorage.price * itemInStorage.quantity}</td>
              </tr>
            </tbody>
          </table>
          <div className="bg-background-2 font-light p-3 text-center">
            Sorry, it seems that there are no available payment methods for your state. Please contact us if you require assistance or wish to make alternate arrangements.
          </div>
          <button
            className="
              bg-primary w-44 h-11 justify-center
              items-center rounded-3xl font-bold text-background-1"
          >
            Place Order
          </button>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Checkout;
