import React from 'react'
// noinspection NpmUsedModulesInstalled
import styled, {css} from "styled-components";
import {
  borderStyles,
  colorKeys, colorStyles,
  commonFontAttrs,
  commonSizeAttrs,
  heightAndWidth,
  marginsAndPadding,
} from "./constants";
// noinspection NpmUsedModulesInstalled
import clsx from 'clsx';
import {checkboxStyles} from "./material-trash";
// noinspection NpmUsedModulesInstalled
import Checkbox from "@material-ui/core/Checkbox";
import {easyColor} from "./utils";


const radioRad = 18;
const innerRadioRad = 15;

function _Checkbox(props){
  const classes = checkboxStyles();
  return(
    <Checkbox
      className={classes.root}
      disableRipple
      color="red"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      inputProps={{ 'aria-label': 'decorative checkbox' }}
      style={{marginTop: '1px'}}
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
  background: ${p => easyColor(p, null, colorKeys.primaryColor)};

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
    background: ${p => easyColor(p, null, colorKeys.contrastColor)};
  }
`;

const RadioStyles = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  &:checked {
    &~span {
      background: ${p => easyColor(p, null, colorKeys.primaryColor)};
      &:after{
        width: ${innerRadioRad *  .6}px;
        height: ${innerRadioRad * .6}px;
        background: ${p => easyColor(p, null, colorKeys.contrastColor)};
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

const FlatCss = css`
  ${commonSizeAttrs};
  ${commonFontAttrs};
  
  outline: none;
  ${p => marginsAndPadding('padding', p, { ptb: '9px', plr: '10px'})};
  ${p => heightAndWidth(p, { width: '100%' })};
  ${p => colorStyles(p, { 
    emotion: 'primaryFont', 
    bkgEmotion: 'inputGrey',
    dis_bkgEmotion: 'inputGreyDisabled',
  })};
  ${p => borderStyles(p, {
    borderRadius: '5px',
    borderWidth: '1.5px',
    borderEmotion: 'inputBorderGrey'
  })};
  
  box-sizing: border-box;
  
  &::placeholder{
   color: ${p => p.theme.colors.primaryFontLess}
  }

  &:focus{
    border-color: ${p => easyColor(p, p['focusBorderEmotion'], 'formBorderBlue')};
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

const FlatInput = styled.input`
  ${FlatCss}
`;

// noinspection JSUnresolvedFunction
const FlatTextArea = styled.textarea`
  ${FlatCss};
  ${p => heightAndWidth(p, {
    minWidth: '100%',
    minHeight: '100%'
  })};
`

const FlatSelect = styled(props => (
  <FlatInput as='select' {...props}>
    { props.children }
  </FlatInput>
))`
`;

const Input = {
  Radio: Radio,
  Checkbox: _Checkbox,
  FlatInput,
  FlatSelect,
  FlatTextArea
};

export default Input;
