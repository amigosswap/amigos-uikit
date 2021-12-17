import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 110 110" {...props}>
      <image width="110" height="110" href="/images/pancake-icon.png" />
    </Svg>
  );
};

export default Icon;
