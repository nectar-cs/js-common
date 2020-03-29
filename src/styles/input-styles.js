import React from 'react'
import styled from "styled-components";
import {colorKeys, commonFontAttrs, commonSizeAttrs, resolveColor} from "./constants";
import Layout from "./layout-styles";

const borderWidth = p => p.theme.dims.borderWidth;
const focusedBorderWidth = p => `2px`;
const inputPadLeftRight = "10px";
const inputPadTopBottom = "7px";

function _focusedPaddingTop(p){
  if(!p.flat) return `calc(${inputPadTopBottom} - calc(${focusedBorderWidth(p)} / 2))`;
  else return inputPadTopBottom;
}

function _focusedPaddingBottom(p){
  return `calc(${inputPadTopBottom} - calc(${focusedBorderWidth(p)} / 2))`;
}

function _focusedPaddingSides(p){
  if(!p.flat) return `calc(${inputPadLeftRight} - calc(${focusedBorderWidth(p)} / 2))`;
  else return inputPadLeftRight;
}

function _totalFocusedBorderWidth(p){
  if(!p.flat) return focusedBorderWidth(p);
  else return `0 0 ${focusedBorderWidth(p)} 0`;
}

function _totalBorderWidth(p){
  if(!p.flat) return borderWidth(p);
  else return `0 0 ${borderWidth(p)} 0`;
}

const _Input = styled.input`
  ${commonSizeAttrs};
  ${commonFontAttrs};
  background: transparent;
  border-style: solid;
  width: ${p => p.width || '100%'};
  border-color: ${p => resolveColor(p, null, colorKeys.secondaryFont)};
  border-width: ${p => _totalBorderWidth(p)};
  padding: ${inputPadTopBottom} ${inputPadLeftRight};
  border-radius: ${p => inputBorderRadius(p)};
  box-sizing: border-box;
  color: ${p => p.theme.colors.primaryFont};
  &::placeholder{
   color: ${p => p.theme.colors.primaryFontLess}
  }
  &:focus{
    outline: transparent;
    padding-top: ${p => _focusedPaddingTop(p)};
    padding-right: ${p => _focusedPaddingSides(p)};
    padding-bottom: ${p => _focusedPaddingBottom(p)};
    padding-left: ${p => _focusedPaddingSides(p)};
    border-width: ${p => _totalFocusedBorderWidth(p)};
    border-color: ${p => p.theme.colors.cool};
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
   transition: background-color 5000s ease-in-out 0s;
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

const Input = {
  Line,
  Label,
  Input: _Input,
  Select
};

export default Input;
