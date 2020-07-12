import styled from 'styled-components'
import Text from "../../styles/text-styles";

const ballHeight = 14;
const lineHeight = 1;
const lineTopOffset = (ballHeight / 2) - (lineHeight / 2);

export const Outer = styled.div`
  position: relative;
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Line = styled.div`
  position: absolute;
  top: ${lineTopOffset}px;
  height: ${lineHeight}px;
  left: ${p => p.offset}px;
  right: ${p => p.offset}px;
  background: #d6d6d6;
`;

export const BallContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Ball = styled.div`
  width: ${ballHeight}px;
  height: ${ballHeight}px;
  z-index: 100;
  background: ${p => p.color};
  border-radius: 50%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BallText = styled(Text.P)`
  color: white;
  text-align: center;
  font-size: 11px;
  background: transparent;
  line-height: normal;
`;
