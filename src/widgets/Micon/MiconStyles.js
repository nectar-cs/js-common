import styled from 'styled-components'
import {commonFontAttrs, commonSizeAttrs} from "../../styles/constants";

function size(size){
  if(size === 'm+') return "30px";
  if(size === 's') return "18px";
  if(size === 'xs') return "14px";
  return "21px";
}

const Micon = styled.i`
  ${commonSizeAttrs};
  ${commonFontAttrs};
  font-size: ${p => size(p.size)};
  transform: ${p => p.rotate ? `rotate(${p.rotate}deg)` : "none"};
  ${p => p.hack};
`;

const S = { Micon };

export default S;
