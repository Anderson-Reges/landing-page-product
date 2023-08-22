import React, { useState } from "react";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer";
import angle from "../assets/angle-right-solid.svg";
import IItemCart from "../interfaces/IItemCart";
import validator from "validator";

const Checkout: React.FC = () => {
  const [bought, setBought] = useState<boolean>(false);
  const [formFields, setFormFields] = useState({
    firstName: "",
    lastName: "",
    country: "",
    streetAddress: "",
    townCity: "",
    postcode: "",
    phone: "",
    emailAddress: "",
  });
  const itemInStorage: IItemCart = JSON.parse(
    localStorage.getItem("cart") as string
  );

  const removeItemInStorage = () => {
    setBought(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const isFormValid = () => {
    const {
      firstName,
      lastName,
      country,
      streetAddress,
      townCity,
      postcode,
      phone,
      emailAddress,
    } = formFields;

    return (
      firstName !== "" &&
      lastName !== "" &&
      country !== "" &&
      streetAddress !== "" &&
      townCity !== "" &&
      postcode !== "" &&
      validator.isEmail(emailAddress) &&
      validator.isPostalCode(postcode, "any") &&
      phone !== ""
    );
  };
  return (
    <>
      <Nav />
      <header
        className="flex desktop:flex-col desktop:pt-[200px] desktop:pb-[90px] desktop:h-[23.38em]
        desktop:top-0 desktop:py-0 bg-background-2 mobile:h-[19em]
        mobile:flex-col mobile:top-[7.5em] mobile:py-[60px] mobile:pt-[11em]"
      >
        <span className="desktop:mx-[55px] text-5xl font-extrabold mb-3 mobile:mx-[30px]">
          CHECKOUT
        </span>
        <div className="desktop:mx-[55px] flex mobile:mx-[30px]">
          <span className="text-background-3 opacity-[0.4] hover:opacity-[1] mr-1">
            <a href="/">Home</a>
          </span>
          <img src={angle} alt="angle-right" className="w-[0.6em]" />
          <span className="ml-1">Checkout</span>
        </div>
      </header>
      <section className="p-[6em] gap-[1em] mobile:p-[2em]">
        <div className="flex gap-[3em]">
          <form className="flex justify-between w-full gap-[3em] desktop:flex-row mobile:flex-col">
            <div className="flex flex-col gap-1 desktop:w-[50%] mobile:w-full">
              <h1 className="mb-[1em] font-bold text-2xl">BILLING DETAILS</h1>
              <div className="flex justify-between desktop:flex-row mobile:flex-col">
                <label htmlFor="" className="flex flex-col font-semibold">
                  First name
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="rounded-full"
                    value={formFields.firstName}
                    onChange={handleInputChange}
                    data-testid="inputs-checkout"
                  />
                </label>
                <label htmlFor="" className="flex flex-col font-semibold">
                  Last name
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="rounded-full"
                    value={formFields.lastName}
                    onChange={handleInputChange}
                    data-testid="inputs-checkout"
                  />
                </label>
              </div>
              <label htmlFor="" className="font-semibold">
                Country / Region
              </label>
              <input
                type="text"
                name="country"
                id="country"
                className="rounded-full"
                value={formFields.country}
                onChange={handleInputChange}
                data-testid="inputs-checkout"
              />
              <label htmlFor="" className="font-semibold">
                Street address
              </label>
              <input
                type="text"
                className="rounded-full"
                placeholder="House number and street name"
                name="streetAddress"
                id="streetAddress"
                value={formFields.streetAddress}
                onChange={handleInputChange}
                data-testid="inputs-checkout"
              />
              <input
                type="text"
                className="rounded-full"
                placeholder="Apartment, suite, unit, etc. (Optional)"
                data-testid="inputs-checkout"
              />
              <label htmlFor="" className="font-semibold">
                Town / City
              </label>
              <input
                type="text"
                name="townCity"
                id="townCity"
                className="rounded-full"
                value={formFields.townCity}
                onChange={handleInputChange}
                data-testid="inputs-checkout"
              />
              <label htmlFor="" className="font-semibold">
                Postcode
              </label>
              <input
                type="text"
                name="postcode"
                id="postcode"
                className={`rounded-full ${
                  !validator.isPostalCode(formFields.postcode, "any") &&
                  "border border-red-500"
                }`}
                value={formFields.postcode}
                onChange={handleInputChange}
                data-testid="inputs-checkout"
              />
              <label htmlFor="" className="font-semibold">
                Phone
              </label>
              <input
                type="number"
                name="phone"
                id="phone"
                className="rounded-full"
                value={formFields.phone}
                onChange={handleInputChange}
                data-testid="inputs-checkout"
              />
              <label htmlFor="" className="font-semibold">
                Email address
              </label>
              <input
                type="text"
                name="emailAddress"
                id="emailAddress"
                className={`rounded-full ${
                  !validator.isEmail(formFields.emailAddress) &&
                  "border border-red-500"
                }`}
                value={formFields.emailAddress}
                onChange={handleInputChange}
                data-testid="inputs-checkout"
              />
            </div>
            <div className="flex flex-col desktop:w-[50%] mobile:w-full">
              <h1 className="mb-[1em] font-bold text-2xl">
                ADDITIONAL INFORMATION
              </h1>
              <label
                htmlFor=""
                className="flex flex-col gap-[1em] font-semibold"
              >
                Order notes (optional)
                <textarea
                  className="resize-none rounded-2xl"
                  rows={7}
                  cols={50}
                  placeholder="Notes about your order"
                  data-testid="inputs-checkout"
                ></textarea>
              </label>
            </div>
          </form>
        </div>
        <div className="flex flex-col gap-[1em]">
          <h1 className="my-[1em] font-bold text-2xl">YOUR ORDER</h1>
          <table className="flex flex-col bg-background-2 desktop:w-[45%] mobile:w-full p-[2em]">
            <thead className="flex justify-around">
              <th>Product</th>
              <th>Subtotal</th>
              <th>Total</th>
            </thead>
            <tbody>
              <tr className="flex justify-around text-center">
                <td className="w-[33%]">
                  {(itemInStorage && itemInStorage.name) +
                    " x " +
                    (itemInStorage && itemInStorage.quantity)}
                </td>
                <td className="w-[33%]">
                  ${itemInStorage && itemInStorage.subtotal}
                </td>
                <td className="w-[33%]">
                  $
                  {itemInStorage &&
                    itemInStorage.price *
                      (itemInStorage && itemInStorage.quantity)}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="bg-background-2 font-light p-3 text-center">
            Sorry, it seems that there are no available payment methods for your
            state. Please contact us if you require assistance or wish to make
            alternate arrangements.
          </div>
          <button
            className="
              bg-primary w-44 h-11 justify-center
              items-center rounded-3xl font-bold text-background-1
              disabled:opacity-[0.4]"
            onClick={removeItemInStorage}
            disabled={!isFormValid()}
          >
            Place Order
          </button>
          {bought && (
            <div className="bg-red-300 font-normal p-3 text-center">
              ❌ Invalid payment method
            </div>
          )}
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Checkout;
