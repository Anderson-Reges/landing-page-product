import React from "react";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer";
import angle from '../assets/angle-right-solid.svg';
import IItemCart from "../interfaces/IItemCart";
import { ItemContext } from "../context/ItemProvider";
import CartForm from "../components/CartForm";
import { useNavigate } from "react-router-dom";

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { itemCart, setItemCart } = React.useContext(ItemContext);
  const [quantity, setQuantity] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  const updateCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setLoading(true);

    localStorage.setItem("cart", JSON.stringify({
      ...itemCart,
      quantity: quantity,
      subtotal: itemCart.price * Number(quantity)
    }));
    setQuantity(quantity);
    setLoading(false);
    navigate(0)
  };

  const deleteItem = () => {
    localStorage.removeItem("cart")
  }

  React.useEffect(() => {
    const updatedItem = localStorage.getItem('cart');
    if (updatedItem) {
      const local: IItemCart = JSON.parse(updatedItem);
      setQuantity(local.quantity + "")
    }
  }, [])

  return (
    <>
      <Nav />
      <header
        className="
        flex desktop:flex-col desktop:pt-[200px] desktop:pb-[90px] desktop:h-[23.38em]
        desktop:top-0 desktop:py-0 bg-background-2 mobile:h-[19em]
        mobile:flex-col mobile:top-[7.5em] mobile:py-[60px] mobile:pt-[11em]"
      >
        <span
          className="
          desktop:mx-[55px] desktop:text-5xl desktop:font-extrabold
          desktop:mb-3 mobile:text-4xl mobile:mx-[30px] mobile:font-extrabold"
        >
          CART
        </span>
        <div className="desktop:mx-[55px] flex mobile:mx-[30px]">
          <span
            className="text-background-3 opacity-[0.4] hover:opacity-[1] mr-1 cursor-pointer"
            onClick={() => navigate('/')}
          >
            Home
          </span>
          <img src={angle} alt="angle-right" className="w-[0.6em]" />
          <span
            className="ml-1"
          >Cart</span>
        </div>
      </header>
      <section className="mobile:py-[6em] desktop:pt-0" data-testid="cart-container">
        <div
          className="desktop:py-[6em]"
          data-testid="cart-form-container"
        >
          <CartForm
            itemInStorage={
              localStorage.getItem('cart')
              && JSON.parse(localStorage.getItem('cart') as string)
            }
            quantity={quantity}
            setQuantity={setQuantity}
            updateCart={updateCart}
            deleteItem={deleteItem}
            loading={loading}
          />
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Cart;
