import React from "react";
import styled, { useTheme } from "styled-components";
import { XAmiIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  xAmiPriceUsd?: number;
  isDark?: boolean;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const XAmiPrice: React.FC<Props> = ({ xAmiPriceUsd, isDark }) => {
  
  return xAmiPriceUsd ? (
    <PriceLink href="https://poocoin.app/tokens/0x21008650784e1b56cdbb25bc3581084dcf966d00" target="_blank">
      <XAmiIcon width="24px" mr="8px" />
      <Text color={isDark ? "textSubtle" : "#c3c350"} bold>{`$${xAmiPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(XAmiPrice);
