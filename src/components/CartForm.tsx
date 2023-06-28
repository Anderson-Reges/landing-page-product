import React from "react";
import headset from "../assets/headset.png";
import ICartForm from "../interfaces/ICartForm";
import Loading from "./LoadingComponent";
import EmptyCart from "./EmptyCartComponent";
import { useNavigate } from "react-router-dom";

const CartForm: React.FC<ICartForm> = ({
  itemInStorage,
  quantity,
  updateCart,
  deleteItem,
  setQuantity,
  loading,
}) => {
  const navigate = useNavigate()
  const [isEmpty, setIsEmpty] = React.useState<boolean>(true);

  React.useEffect(() => {
    const local = JSON.parse(localStorage.getItem("cart") as string);

    if (local) {
      setIsEmpty(false);
    }
  }, []);

  return (
    <div className="flex justify-center">
      <form
        className="
                flex flex-col justify-center items-center
                w-[85%] h-[17em] px-[3em]
                shadow-2xl"
      >
        {isEmpty ? (
          <EmptyCart />
        ) : loading ? (
          <Loading />
        ) : (
          <table className="w-full">
            <thead className="text-left">
              <th className="w-[16%]"></th>
              <th className="w-[16%]"></th>
              <th className="w-[16%]">Product</th>
              <th className="w-[16%]">Price</th>
              <th className="w-[16%]">Quantity</th>
              <th className="w-[16%]">Total</th>
            </thead>
            <tbody>
              <tr className="text-left">
                <td className="align-middle text-center">
                  <button
                    className="
                    text-red-600 hover:text-white hover:bg-red-600
                    rounded-full w-[1.5em] h-[1.5em] text-2xl font-bold"
                    onClick={ deleteItem }
                  >
                    x
                  </button>
                </td>
                <td className="align-middle">
                  <img src={headset} alt="" />
                </td>
                <td className="align-middle">{itemInStorage.name}</td>
                <td className="align-middle">${itemInStorage.price}</td>
                <td className="align-middle">
                  <input
                    type="number"
                    value={quantity}
                    onChange={({ target }) => setQuantity(target.value)}
                    className="
                    rounded-full w-[5em] bg-background-2 border-none
                    text-center pl-[1.5em]"
                  />
                </td>
                <td className="align-middle">${itemInStorage.subtotal}</td>
              </tr>
            </tbody>
          </table>
        )}
        <div className="flex gap-[1.5em]">
        <button
            className={`
            bg-primary w-44 h-11 justify-center
            items-center rounded-3xl font-bold text-background-1
            ${isEmpty ? "hidden" : loading && "hidden"}
            disabled:opacity-[0.5] disabled:cursor-not-allowed`}
            onClick={updateCart}
            disabled={Number(quantity) === itemInStorage.quantity}
          >
            Update Cart
          </button>
          <button
            className={`
              bg-primary w-44 h-11 justify-center
              items-center rounded-3xl font-bold text-background-1
              ${isEmpty ? "hidden" : (loading && "hidden")}`}
            onClick={() => navigate('/checkout')}
          >
            Proceed to Checkout
          </button>
        </div>
      </form>
    </div>
  );
};

export default CartForm;
