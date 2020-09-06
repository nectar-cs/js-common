import styled from 'styled-components'

import {
  borderRounding,
  commonFontAttrs,
  commonSizeAttrs,
  contrastFontForBkg,
  simplePadding
} from './constants'
import {easyColor, shadeColor} from "./utils";

const _Button = styled.button`
  ${commonSizeAttrs};
  ${commonFontAttrs};
  background: ${p => easyColor(p, p.bkgEmotion, 'primaryColor')};
  color: ${p => contrastFontForBkg(p, p.bkgEmotion, 'primaryColor')};
  border-radius: ${p => borderRounding(p, {rounding: 5})};
  padding: ${p => simplePadding(p, { vertSwell: 1.3, horSwell: 1.3 })};
  border-width: 0;
  border-style: solid;
  text-align: center;

  &:focus{
    outline: transparent;
  }
  &:hover {
    cursor: pointer;
    background: ${p => shadeColor(easyColor(p, p.bkgEmotion, 'primaryColor'), 10)};
  }
  &:active{
    background: ${p => easyColor(p, p.emotion, 'pleasant')};
  }
  &:disabled {
    background: ${p => 'grey'};
    cursor: default;
  }
`;

const ClearButton = styled(_Button)`
  border-width: 1px;
  background: ${p => easyColor(p, p.bkgEmotion, 'grey2')};
  color: ${p => easyColor(p, p.emotion, 'secondaryFont')};
  border-radius: ${p => borderRounding(p, {rounding: 5})};
  border-color: ${p => easyColor(p, p.borderEmotion, 'grey3')};
  
  &:hover {
    background: ${p => easyColor(p, p.bkgEmotion, 'grey3')};
  }
  
  &:disabled {
    background: ${p => easyColor(p, p.bkgEmotion, 'grey4')};
    cursor: default;
    border-width: 0;
  }
`;

const BigButton = styled(_Button)`
  width: 360px;
  height: 42px;
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
  ClearButton,
  FloatingPlus
};

export default Button;
