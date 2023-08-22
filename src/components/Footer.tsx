import React from "react";
import SVGComponent from "./SVGComponent";
import iconsSVG from "../assets/network-icons-svg.json";
import IconSVG from "../interfaces/ISvg";

const Footer: React.FC = () => {
  const icons: IconSVG[] = iconsSVG;

  return (
    <div
      className="h-full bg-background-3 text-background-1"
      data-testid="footer-container"
    >
      <div
        className="
        flex desktop:flex-row w-full h-[85%]
        mobile:items-baseline desktop:items-center py-[2em]
        desktop:px-[5em] mobile:px-[2em]
        mobile:flex-col mobile:gap-[2em] desktop:gap-0 tablet:flex-row
        tablet:justify-between"
        data-testid="footer-box-top"
      >
        <div
          className="flex flex-col gap-[2em] desktop:w-[33%] tablet:w-[35%]"
          data-testid="footer-box-top-info"
        >
          <h3 className="text-4xl font-bold">SEA DOT</h3>
          <p className="w-[80%]">
            Orem Ipsum is simply dumm text the printing and types indstr sum has
            been the industry
          </p>
          <ul className="flex gap-[1.5em]">
            {icons.map((svg, index) => (
              <li key={index}>
                <SVGComponent
                  width={svg.width}
                  height={svg.height}
                  viewBox={svg.viewBox}
                  pathD={svg.pathD}
                  fillRule={svg.fillRule}
                  clipRule={svg.clipRule}
                  fill={svg.fill}
                />
              </li>
            ))}
          </ul>
        </div>
        <ul
          id="contact"
          className="flex flex-col gap-4 desktop:w-[33%]"
          data-testid="footer-box-top-links"
        >
          <li className="font-bold">Useful Links</li>
          <li className="font-light">Contact Us</li>
          <li className="font-light">Privacy</li>
          <li className="font-light">Advertise</li>
          <li className="font-light">Terms & Conditions</li>
        </ul>
        <form
          className="flex flex-col desktop:w-[33%] gap-[1em]"
          data-testid="footer-box-top-form"
        >
          <h3 className="font-bold text-xl">Send us a Message</h3>
          <input
            type="text"
            className="border-none rounded text-background-3"
            placeholder="Your Email"
            data-testid="footer-box-top-form-input-1"
          />
          <textarea
            className="border-none h-[6em] rounded text-background-3 resize-none"
            placeholder="Your Message"
            data-testid="footer-box-top-form-input-2"
          />
          <button className="bg-primary rounded w-[35%] h-10 font-bold tracking-widest">SUBMIT</button>
        </form>
      </div>
      <div
        className="flex border-t justify-center items-center p-4 gap-1"
        data-testid="footer-box-bottom"
      >
        Made by
        <a
          href="https://www.linkedin.com/in/anderson-reges/"
          target="_blank"
          className="hover:text-primary"
          rel="noreferrer"
        >
          @Anderson-Reges
        </a>
      </div>
    </div>
  );
};

export default Footer;
