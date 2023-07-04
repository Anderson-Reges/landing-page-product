import React from "react";
import phone from "../../assets/phone-icon.svg";
import mail from "../../assets/mail-icon.svg";
import cart from "../../assets/cart-icon.svg";
import SVGComponent from "../SVGComponent";
import iconsSVG from "../../assets/network-icons-svg.json";
import IconSVG from "../../interfaces/ISvg";
import { useLocation, useNavigate } from "react-router-dom";
import IItemCart from "../../interfaces/IItemCart";

const NavTop: React.FC = () => {
  const icons: IconSVG[] = iconsSVG;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const itemInStorage: IItemCart = JSON.parse(localStorage.getItem("cart") as string)

  return (
    <div className="flex justify-around border-b desktop:h-11 mobile:h-14">
      <ul
        className="flex border-r border-l desktop:w-1/5
        mobile:w-1/2 desktop:h-11 mobile:h-14 items-center
        container gap-2 justify-evenly"
      >
        {icons.map((svg, index) => (
          <li key={index}>
            <SVGComponent
              width={"20"}
              height={"20"}
              viewBox={svg.viewBox}
              pathD={svg.pathD}
              fillRule={svg.fillRule}
              clipRule={svg.clipRule}
              fill={"black"}
            />
          </li>
        ))}
      </ul>
      <ul
        className="flex w-1/3 border-l border-r
        desktop:h-11 mobile:h-14 items-center justify-evenly"
      >
        <li className="desktop:hidden">
          <img src={phone} alt="" className="w-5" />
        </li>
        <li className="hidden desktop:flex gap-1">
          <img src={phone} alt="" />
          (88) 4002-8922
        </li>
        <li className="desktop:hidden">
          <img src={mail} alt="" className="w-5" />
        </li>
        <li className="hidden desktop:flex gap-1">
          <img src={mail} alt="" />
          contact@seadot.com
        </li>
        {(pathname !== "/cart" && pathname !== "/checkout") && (
          <li className="desktop:flex relative mobile:hidden">
            <img
              src={cart}
              alt=""
              onClick={() => navigate("/cart")}
              className="cursor-pointer desktop:block mobile:hidden"
            />
            {itemInStorage && (
              <>
                <span
                  className="w-3 h-3 bg-primary rounded-full
                  animate-ping absolute left-[1.2em] bottom-[0.9em]
                  cursor-pointer desktop:block mobile:hidden"
                  onClick={() => navigate("/cart")}
                />
                <span
                  className="w-3 h-3 bg-primary rounded-full absolute
                  left-[1.2em] bottom-[0.9em] cursor-pointer mobile:hidden
                  desktop:block"
                  onClick={() => navigate("/cart")}
                />
              </>
            )}
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavTop;
