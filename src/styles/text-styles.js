import React from 'react'
import styled, {css} from "styled-components";
import {colorKeys, commonFontAttrs, commonSizeAttrs, contrastFontForBkg, resolveColor} from "./constants";

const P = styled.p`
  font-size: 13px;
  ${commonSizeAttrs};
  ${commonFontAttrs};
  ${p => textPosition(p)};
  line-height: 19px;
`;

const H1 = styled(P)`
  font-size: 19px;
`;

const H2 = styled(P)`
  font-size: 17px;
`;

const H3 = styled(P)`
  font-size: 15px;
`;

const H4 = styled(P)`
  font-size: 14px;
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
  border-radius: 3px;
  padding: 5.5px 14px;
  text-align: center;
  display: inline-block;
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

function iconSize(p){
  const size = p.size;
  return `${21 * (size || 1)}px`;
}

const Text = {
  P,
  H1,
  H2,
  H3,
  H4,
  Icon,
  Code,
  BoldStatus,
  CleanStatus,
  StatusTag,
  BoldRef,
  ContrastCode
};

export default Text;
