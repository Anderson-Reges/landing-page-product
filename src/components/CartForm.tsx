import React from "react";
import headset from "../assets/headset.png";
import ICartForm from "../interfaces/ICartForm";
import Loading from "./LoadingComponent";
import EmptyCart from "./EmptyCartComponent";
import { useNavigate } from "react-router-dom";
import IItemCart from "../interfaces/IItemCart";

const CartForm: React.FC<ICartForm> = ({
  itemInStorage,
  quantity,
  updateCart,
  deleteItem,
  setQuantity,
  loading,
}) => {
  const navigate = useNavigate()
  const [disableButton, setDisableButton] = React.useState<boolean>(true)
  const [isEmpty, setIsEmpty] = React.useState<boolean>(false);

  React.useEffect(() => {
    const local: IItemCart = JSON.parse(localStorage.getItem("cart") as string);

    if (!local || Number(local.quantity) === 0) {
      setIsEmpty(true);
      localStorage.removeItem("cart")
    }

    if (Number(quantity) !== Number(local.quantity)) {
      setDisableButton(false)
    } else {
      setDisableButton(true)
    }

  }, [quantity]);

  return (
    <div className="flex justify-center mobile:gap-[1em]">
      <form
        className="
                flex flex-col justify-center items-center
                w-[85%] h-[17em] px-[3em] mobile:px-0
                shadow-2xl mobile:gap-[1.5em]"
      >
        {isEmpty ? (
          <EmptyCart />
        ) : loading ? (
          <Loading />
        ) : (
          <table className="w-full">
            <thead className="text-left">
              <th className="w-[16%]"></th>
              <th className="w-[16%] mobile:hidden tablet:block"></th>
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
                <td className="align-middle mobile:hidden tablet:block">
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
                    rounded-full desktop:w-[5em] desktop:bg-background-2 tablet:bg-background-2
                    border-none text-center desktop:pl-[1.5em] mobile:w-[3em] mobile:pl-1
                    tablet:w-[5em] tablet:pl-[0.5em] mobile:bg-transparent mobile:border-none"
                  />
                </td>
                <td className="align-middle">${itemInStorage.subtotal}</td>
              </tr>
            </tbody>
          </table>
        )}
        <div className="flex gap-[1.5em] desktop:flex-row mobile:flex-col">
          <button
            className={`
            bg-primary w-44 h-9 justify-center
            items-center rounded-3xl font-bold text-background-1
            ${isEmpty ? "hidden" : loading && "hidden"}
            disabled:opacity-[0.5] disabled:cursor-not-allowed`}
            onClick={updateCart}
            disabled={disableButton}
          >
            Update Cart
          </button>
          <button
            className={`
              bg-primary w-44 h-9 justify-center
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
