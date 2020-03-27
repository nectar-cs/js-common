import styled, {css} from 'styled-components'

import {
  centered, colorKeys,
  commonFontAttrs,
  commonSizeAttrs,
  contrastFontForBkg,
  resolveColor
} from "./constants";

function borderRadius(p){
  if(p.funky) return "25px";
  else return `calc(${p.theme.dims.borderRadius} + 1px)`;
}

const _Button = styled.button`
  ${commonSizeAttrs};
  ${commonFontAttrs};
  background: ${p => resolveColor(p, p.emotion, colorKeys.primaryColor)};
  color: ${p => contrastFontForBkg(p, p.emotion, colorKeys.primaryColor)};
  border-radius: ${p => borderRadius(p)};
  padding: 8px 16px;
  border-width: 0;
  text-align: center;

  &:focus{
    outline: transparent;
  }
  &:hover {
    cursor: pointer;
  }
  &:active{
    background: ${p => resolveColor(p, p.emotion, colorKeys.pleasant)};
  }
  &:disabled {
    background: ${p => p.theme.colors.primaryFontLess};
    cursor: default;
  }
`;

const BigButton = styled(_Button)`
  width: 380px;
  height: 45px;
  font-size: 14px;
  font-weight: 900;
`;

const FloatingPlus = styled.button`
  z-index: 100;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${p => p.theme.colors.primaryColor};
  font-size: 30px;
  color: white;
  text-align: center;
  position: fixed;
  right: 40px;
  bottom: 40px;
  padding-bottom: 6px;
  box-shadow: 2px 2px 3px #999;
`;

const Button = {
  Button: _Button,
  BigButton,
  FloatingPlus,

};

export default Button;
