import React from 'react'
import styled from "styled-components";
import {colorKeys, commonFontAttrs, commonSizeAttrs, resolveColor} from "./constants";
import Layout from "./layout-styles";

const borderWidth = p => p.theme.dims.inputBorderWidth;
const borderWidthFocused = p => borderWidth(p) + .5;
const paddingLr = 10;
const paddingTb = 6.4;

function paddingFocused(p){
  const difference = (borderWidthFocused(p) - borderWidth(p));
  const lr = paddingLr - difference;
  const tb = (paddingTb - difference);
  return `${tb}px ${lr}px`;
}

const _Input = styled.input`
  ${commonSizeAttrs};
  ${commonFontAttrs};
  background: transparent;
  border-style: solid;
  width: ${p => p.width || '100%'};
  border-color: ${p => inputBorderColor(p)};
  border-width: ${p => borderWidth(p)}px;
  padding: ${paddingTb}px ${paddingLr}px;
  border-radius: ${p => inputBorderRadius(p)};
  box-sizing: border-box;
  color: ${p => p.theme.colors.primaryFont};
  &::placeholder{
   color: ${p => p.theme.colors.primaryFontLess}
  }
  &:focus{
    outline: transparent;
    padding: ${p => paddingFocused(p)};
    border-width: ${p => borderWidthFocused(p)}px;
    border-color: ${p => inputBorderColor(p, colorKeys.cool)};
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
   transition: background-color 5000s ease-in-out 0s;
  }
  &:-webkit-autofill {
    -webkit-text-fill-color: ${p => p.theme.colors.primaryFont} !important;
  }
`;

const Label = styled.p`
  ${commonFontAttrs};
  ${commonSizeAttrs};
  width: 150px;
  min-width: 150px;
`;

const Line = styled(props => (
  <Layout.Div flex align='center' mt={2} {...props}>
    { props.children }
  </Layout.Div>
))`
`;

const Select = styled(props => (
  <_Input as='select' {...props}>
    { props.children }
  </_Input>
))`
`;

function inputBorderRadius(p){
  if(p.flat) return "0px";
  else return p.theme.dims.borderRadius;
}

function inputBorderColor(p, def=colorKeys.secondaryFont){
  const color = resolveColor(p, null, def);
  if(p.flat) return `transparent transparent ${color} transparent`;
  else return color;
}

const Input = {
  Line,
  Label,
  Input: _Input,
  Select
};

export default Input;
