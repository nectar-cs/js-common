import styled, {css} from "styled-components";
import {commonFontAttrs, commonSizeAttrs} from "./constants";

const RoundedForRow = styled.img`
  width: 21px;
  height: 21px;
  border-radius: 50%;
  margin-top: -2px;
  margin-right: ${p => p.push ? "12px" : '0'}
`;

function applyCropping(p, defaults={}){
  const merged = {...defaults, ...p};
  if(merged.centerCrop){
    return css`
      object-fit: cover;
    `;
  }
}

const _Img = styled.img`
  ${commonSizeAttrs};
  ${commonFontAttrs};
  ${p => applyCropping(p)};
`;

const Img = {
  RoundedForRow,
  Img: _Img
};
export default Img;
