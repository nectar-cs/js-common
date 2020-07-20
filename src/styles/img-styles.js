import styled from "styled-components";
import {commonFontAttrs, commonSizeAttrs} from "./constants";

const RoundedForRow = styled.img`
  width: 21px;
  height: 21px;
  border-radius: 50%;
  margin-top: -2px;
  margin-right: ${p => p.push ? "12px" : '0'}
`;

const _Img = styled.img`
  ${commonSizeAttrs};
  ${commonFontAttrs};
`;

const Img = {
  RoundedForRow,
  Img: _Img
};
export default Img;
