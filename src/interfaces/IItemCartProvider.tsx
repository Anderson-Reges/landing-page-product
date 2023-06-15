import IItemCart from "./IItemCart";;

export default interface slideProvider {
  itemCart: IItemCart,
  setItemCart: React.Dispatch<React.SetStateAction<IItemCart>>;
}