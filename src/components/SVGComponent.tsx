import React from "react";
import IconSVG from "../interfaces/ISvg";

const SVGComponent: React.FC<IconSVG> = ({
  width,
  height,
  viewBox,
  fill,
  pathD,
  fillRule,
  clipRule,
}) => {
  return (
    <svg
      className="hover:fill-primary cursor-pointer"
      width={width}
      height={ height }
      viewBox={ viewBox }
      fill={ fill ? fill : "white" }
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule={ fillRule ? fillRule : "" }
        clip-rule={ clipRule ? clipRule : "" }
        d={ pathD }
      />
    </svg>
  );
};

export default SVGComponent;
