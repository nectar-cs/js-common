import styled from 'styled-components'

import {
  borderRounding,
  colorKeys,
  commonFontAttrs,
  commonSizeAttrs,
  contrastFontForBkg,
  resolveColor,
  simplePadding
} from './constants'

const _Button = styled.button`
  ${commonSizeAttrs};
  ${commonFontAttrs};
  background: ${p => resolveColor(p, p.bkgEmotion, colorKeys.primaryColor)};
  color: ${p => contrastFontForBkg(p, p.bkgEmotion, colorKeys.primaryColor)};
  border-radius: ${p => borderRounding(p, 5, 1)};
  padding: ${p => simplePadding(p, 6, 16)};
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
  FloatingPlus,

};

export default Button;
