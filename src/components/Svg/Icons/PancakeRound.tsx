import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 768 768" {...props}>
      <image width="768" height="768" href="/images/token.png"/>
    </Svg>
  );
};

export default Icon;
