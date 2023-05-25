import Islide from "./ISlide";

export default interface slideProvider {
  slide: Islide,
  setSlide: React.Dispatch<React.SetStateAction<Islide>>;
}