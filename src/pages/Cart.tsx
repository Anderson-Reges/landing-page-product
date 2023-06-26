import React from "react";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer";
import angle from '../assets/angle-right-solid.svg';
import IItemCart from "../interfaces/IItemCart";
import headset from '../assets/headset.png';
import { ItemContext } from "../context/ItemProvider";

const Cart: React.FC = () => {
  const { itemCart, setItemCart } = React.useContext(ItemContext);
  const [quantity, setQuantity] = React.useState("")
  const itemInStorage: IItemCart = JSON.parse(localStorage.getItem('cart') as string)

  const updateCart = () => {
    localStorage
      .setItem("cart", JSON.stringify({
        ...itemCart ,
        quantity: quantity,
        subtotal: itemCart.price * Number(quantity)
      }))
    setQuantity(quantity)
  }

  React.useEffect(() => {
    const updatedItem: IItemCart = JSON.parse(localStorage.getItem('cart') as string)
    setQuantity(updatedItem.quantity + "")
  }, [])

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
          CART
        </span>
        <div className="desktop:mx-[55px] flex">
          <span className="text-background-3 opacity-[0.4] hover:opacity-[1] mr-1">
            <a href="/">Home</a>
          </span>
          <img src={angle} alt="angle-right" className="w-[0.6em]" />
          <span
            className="ml-1"
          >Cart</span>
        </div>
      </header>
      <section>
        <div
          className="py-[6em]"
        >
          <div className="flex justify-center">
            <form
              action=""
              className="
                flex flex-col justify-center items-center
                w-[85%] h-[17em] px-[3em]
                shadow-2xl"
            >
              <table className="w-full">
                <thead className="text-left">
                  <th className="w-[16%]"></th>
                  <th className="w-[16%]"></th>
                  <th className="w-[16%]">Product</th>
                  <th className="w-[16%]">Price</th>
                  <th className="w-[16%]">Quantity</th>
                  <th className="w-[16%]">Subtotal</th>
                </thead>
                <tbody>
                  <tr className="text-left">
                    <td className="align-middle text-center">X</td>
                    <td className="align-middle">
                      <img src={headset} alt=""/>
                    </td>
                    <td className="align-middle">
                      {itemInStorage.name}
                    </td>
                    <td className="align-middle">
                      ${itemInStorage.price}
                    </td>
                    <td className="align-middle">
                      <input
                        type="number"
                        value={quantity}
                        onChange={ ({target}) => setQuantity(target.value) }
                        className="rounded-full w-[5em]"
                      />
                    </td>
                    <td className="align-middle">
                      ${itemInStorage.subtotal}
                    </td>
                  </tr>
                </tbody>
              </table>
              <button
                className="bg-primary w-44 h-11 justify-center
                items-center rounded-3xl font-normal text-background-1"
                onClick={ updateCart }
              >
                UPDATE CART
              </button>
            </form>
          </div>
          <div></div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Cart;
