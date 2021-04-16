import React from 'react'
// noinspection NpmUsedModulesInstalled
import styled, {css} from "styled-components";
import {
  borderStyles,
  colorKeys,
  colorStyles,
  commonFontAttrs,
  commonSizeAttrs,
  fontStyles, marginsAndPadding, multiMode,
} from './constants'
// noinspection NpmUsedModulesInstalled
import { Link } from 'react-router-dom';
import {easyColor} from "./utils";

const P = styled.p`
  ${commonSizeAttrs};
  ${commonFontAttrs};
  ${p => textPosition(p)};
  ${p => noSpill(p)};
  ${p => underlined(p)};
  ${p => clamp(p)};
  line-height: ${p => lineHeight(p, '19px')};
`;

const A = styled.a`
  ${commonSizeAttrs};
  ${commonFontAttrs};
  ${p => textPosition(p)};
`;

const H1 = styled(P)`
  ${p => fontStyles(p, { fontSize: '19px' })};
`;

const H2 = styled(P)`
  ${p => fontStyles(p, { fontSize: '17px' })};
`;

const H3 = styled(P)`
  ${p => fontStyles(p, { fontSize: '15px' })};
`;

const H4 = styled(P)`
  ${p => fontStyles(p, { fontSize: '13px' })};
`;

// noinspection JSUnresolvedFunction
const CuckIcon = styled.i`
  ${commonSizeAttrs};
  ${commonFontAttrs};
  ${p => fontStyles(p, {
    fontSize: iconSize(p),
    fontFam: "'Material Icons', serif"
  })};
  color: ${p => easyColor(p, p.emotion, colorKeys.primaryColor)} !important;
  &:hover {
    color: ${p => easyColor(p, p.hov_emotion, p.emotion)} !important;
  }
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

function noSpill(p){
  if(p['noSpill']){
    return css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `;
  }
}

function underlined(p, defaults={}) {
  return multiMode({...defaults, ...p}, push => {
    push('underline', 'text-decoration: underline');
    push('underline2', 'text-decoration: underline');
  })
}

function clamp(p, backup){
  const _clamp = (p.clamp || backup);
  if(_clamp != null){
    // noinspection CssUnknownProperty
    return css`
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${_clamp};
      -webkit-box-orient: vertical;
    `;
  }
}

const StatusTag = styled(P)`
  ${p => marginsAndPadding('padding', p, { plr: '14px', ptb: '5px' })};
  ${p => colorStyles(p, { bkgEmotion: 'primaryColor' })};
  ${p => borderStyles(p, { borderRadius: '4px' })};
  text-align: center;
  display: inline-block;
`;

function ModestTag({children, ...props}){
  return(
    <StatusTag
      bold
      pt='2px'
      pb='0px'
      borderRadius='2.5px'
      plr='7px'
      fontSize='10.5px'
      emotion='white'
      {...props}
    >
      { children }
    </StatusTag>
  )
}

const BorderedStatusTag = styled(StatusTag)`
  ${p => marginsAndPadding('padding', p, {
    pt: '2.4px', plr: '8px', pb: '0.4px'
  })};
  ${p => borderStyles(p, {
    borderWidth: '1px',
    borderRadius: '3px',
    borderEmotion: p.emotion || '#DCDCDC'
  })};
  ${p => colorStyles(p, {
    emotion: 'secondaryFont',
    bkgEmotion: 'transparent'
  })};
`;

const CleanStatus = styled(P)`
  letter-spacing: 0.2px;
  text-transform: uppercase;
`;

const BoldStatus = styled(P)`
  letter-spacing: 0.2px;
  font-weight: 800;
`;

const Code = styled.code`
  display: block;
  margin-top: ${p => p['chill'] ? "6px" : "2px"};
  color: ${p => p.theme.colors.contrastFont};
  font-size: 12px;
  &:first-child{
    margin-top: 2px;
  }
`;

const BoldRef = styled.p`
  text-decoration: underline;
  font-weight: bold;
  margin-right: ${p => p.push ? "3px" : '0'}
  margin-left: ${p => p['pushed'] ? "3px" : '0'}
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
  CuckIcon,
  SilentLink,
  HoverLink,
  Code,
  BoldStatus,
  CleanStatus,
  StatusTag,
  BoldRef,
  ModestTag,
  BorderedStatusTag
};

export default Text;
