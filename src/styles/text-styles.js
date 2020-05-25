import React from 'react'
import styled, {css} from "styled-components";
import {
  borderRounding,
  colorKeys,
  commonFontAttrs,
  commonSizeAttrs,
  contrastFontForBkg, fontSize, noDec,
  resolveColor, simplePadding
} from './constants'
import { Link } from 'react-router-dom';

const P = styled.p`
  ${commonSizeAttrs};
  ${commonFontAttrs};
  font-size: ${p => fontSize(p, '13px')};
  ${p => textPosition(p)};
  line-height: ${p => lineHeight(p, '19px')};
`;

const A = styled.a`
  ${commonSizeAttrs};
  ${commonFontAttrs};
  ${p => textPosition(p)};
`;

const H1 = styled(P)`
  font-size: ${p => fontSize(p, '19px')};
`;

const H2 = styled(P)`
  font-size: ${p => fontSize(p, '17px')};
`;

const H3 = styled(P)`
  font-size: ${p => fontSize(p, '15px')};
`;

const H4 = styled(P)`
  font-size: ${p => fontSize(p, '14px')};
`;

const CuckIcon = styled.i`
  ${commonSizeAttrs};
  ${commonFontAttrs};
  font-size: ${p => iconSize(p)};
  color: ${p => resolveColor(p, p.emotion, colorKeys.primaryColor)} !important;
`;

function Icon({name, ...props}){
  return(
    <CuckIcon className='material-icons' {...props}>
      {name}
    </CuckIcon>
  )
}

function textPosition(p){
  if(p.absolute){
    return css`position: absolute`;
  }
}

const StatusTag = styled(P)`
  padding: ${p => simplePadding(p, {horSwell: 1, vertSwell: 1})};
  text-align: center;
  display: inline-block;
  border-radius: ${p => borderRounding(p, {rounding: 4})};
  background: ${p => resolveColor(p, p.emotion, colorKeys.primaryColor)};
  color: ${p => contrastFontForBkg(p, p.emotion, colorKeys.primaryColor)};
`;

const CleanStatus = styled(P)`
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const BoldStatus = styled(P)`
  letter-spacing: 0.2px;
  font-weight: 800;
`;

const Code = styled.code`
  display: block;
  margin-top: ${p => p.chill ? "6px" : "2px"};
  color: ${p => p.theme.colors.contrastFont};
  font-size: 12px;
  &:first-child{
    margin-top: 2px;
  }
`;

const ContrastCode = styled(Code)`
  color: ${p => p.theme.colors.primaryFont};
`;

const BoldRef = styled.p`
  text-decoration: underline;
  font-weight: bold;
  margin-right: ${p => p.push ? "3px" : '0'}
  margin-left: ${p => p.pushed ? "3px" : '0'}
`;

const SilentLink = styled(props => (
  <Link {...props}>
    { props.children }
  </Link>
))`
  text-decoration: none;
`;

const HoverLink = styled(SilentLink)`
  &:hover{
    text-decoration: underline;
  }
`;

function iconSize(p){
  const size = p.size;
  return `${21 * (size || 1)}px`;
}

function lineHeight(p, backup){
  return p.lineHeight || backup;
}

const Text = {
  P,
  A,
  H1,
  H2,
  H3,
  H4,
  Icon,
  SilentLink,
  HoverLink,
  Code,
  BoldStatus,
  CleanStatus,
  StatusTag,
  BoldRef,
  ContrastCode
};

export default Text;
