import IItemCart from "./IItemCart";

export default interface ICartForm {
  itemInStorage: IItemCart
  quantity: string
  updateCart: React.MouseEventHandler<HTMLButtonElement>
  deleteItem: React.MouseEventHandler<HTMLButtonElement>
  setQuantity: React.Dispatch<React.SetStateAction<string>>
  loading: boolean
}