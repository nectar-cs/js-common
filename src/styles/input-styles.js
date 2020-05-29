import React from 'react'
import styled from "styled-components";
import {colorKeys, commonFontAttrs, commonSizeAttrs, resolveColor} from "./constants";
import Layout from "./layout-styles";
import clsx from 'clsx';
import {checkboxStyles} from "./material-trash";
import Checkbox from "@material-ui/core/Checkbox";


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

const radioRad = 18;
const innerRadioRad = 15;

function _Checkbox(props){
  const classes = checkboxStyles();
  return(
    <Checkbox
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      inputProps={{ 'aria-label': 'decorative checkbox' }}
      {...props}
    />
  )
}

const RadioLabel = styled.label`
  ${commonSizeAttrs};
  width: ${radioRad}px;
  height: ${radioRad}px;
  display: block;
  position: relative;
  cursor: pointer;
  user-select: none;
`;

const RadioSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: ${radioRad}px;
  width: ${radioRad}px;
  border-radius: 50%;
  background: ${p => resolveColor(p, null, colorKeys.primaryColor)};

  &:after {
    content: "";
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    width: ${innerRadioRad}px;
    height: ${innerRadioRad}px;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 50%;
    background: ${p => resolveColor(p, null, colorKeys.contrastColor)};
  }
`;

const RadioStyles = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  &:checked {
    &~span {
      background: ${p => resolveColor(p, null, colorKeys.primaryColor)};
      &:after{
        width: ${innerRadioRad *  .6}px;
        height: ${innerRadioRad * .6}px;
        background: ${p => resolveColor(p, null, colorKeys.contrastColor)};
      }
    }
  }  
`;

function Radio(props){
  return(
    <RadioLabel {...(props['s'] || {})}>&ensp;
      <RadioStyles type='radio' {...props}/>
      <RadioSpan/>
    </RadioLabel>
  )
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
  Radio: Radio,
  Select,
  Checkbox: _Checkbox
};

export default Input;
