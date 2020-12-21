// noinspection NpmUsedModulesInstalled
import styled from 'styled-components'
import {
  borderStyles,
  colorStyles,
  commonFontAttrs,
  commonSizeAttrs,
  marginsAndPadding
} from './constants'
import {easyColor, shadeColor} from "./utils";

const _Button = styled.button`
  ${commonSizeAttrs};
  ${commonFontAttrs};
  ${p => colorStyles(p, {
    bkgEmotion: 'primaryColor',
    hov_bkgEmotion: shadeColor(easyColor(p, p.bkgEmotion, 'primaryColor'), -20),
    dis_bkgEmotion: 'grey',
    hov_point: true
  })};
  ${p => marginsAndPadding('padding', p, { 
    ptb: '6.5px', plr: '18.2px'
  })};
  ${p => borderStyles(p, {
    borderRadius: '5px',
    borderWidth: '.5px',
    borderEmotion: 'pleasant',
    hov_borderEmotion: 'transparent'
  })};
  
  
  text-align: center;

  &:focus{
    outline: transparent;
  }
  &:disabled {
    cursor: default;
  }
`;

const ClearButton = styled(_Button)`
  border-width: 1px;
  background: ${p => easyColor(p, p.bkgEmotion, 'grey2')};
  color: ${p => easyColor(p, p.emotion, 'secondaryFont')};
  ${p => borderStyles(p, { borderRadius: '5px', borderEmotion: 'grey3' })};
  
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
