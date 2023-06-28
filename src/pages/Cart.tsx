import React, { MouseEventHandler } from "react";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer";
import angle from '../assets/angle-right-solid.svg';
import IItemCart from "../interfaces/IItemCart";
import { ItemContext } from "../context/ItemProvider";
import CartForm from "../components/CartForm";

const Cart: React.FC = () => {
  const { itemCart, setItemCart } = React.useContext(ItemContext);
  const [quantity, setQuantity] = React.useState<string>("")
  const [loading, setLoading] = React.useState<boolean>(false)
  const itemInStorage: IItemCart = JSON.parse(localStorage.getItem('cart') as string)

  const updateCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setLoading(true);
  
    setTimeout(() => {
      localStorage.setItem("cart", JSON.stringify({
        ...itemCart,
        quantity: quantity,
        subtotal: itemCart.price * Number(quantity)
      }));
      setQuantity(quantity);
      setLoading(false);
    }, 500);
  };

  const deleteItem = (event: React.MouseEvent<HTMLButtonElement>) => {
    localStorage.removeItem("cart")
  }

  React.useEffect(() => {
    const updatedItem: IItemCart = JSON.parse(localStorage.getItem('cart') as string)
    if (updatedItem){
      setQuantity(updatedItem.quantity + "")
    }
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
          <CartForm 
            itemInStorage={ itemInStorage }
            quantity={ quantity }
            setQuantity={ setQuantity }
            updateCart={ updateCart }
            deleteItem={ deleteItem }
            loading={ loading }
          />
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
