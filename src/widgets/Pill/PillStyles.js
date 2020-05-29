import styled, {css} from 'styled-components'
import {colorKeys, resolveColor, contrastFontForBkg, commonSizeAttrs} from './../../styles/constants'

const borderRad = "5.0px";
const borderWidth = "0.0px";
const vertPadding = 3.5;

const Letter = styled.p`
  width: 18px;
  border-width: ${borderWidth};
  text-align: center;
  border-style: solid none;
  border-radius: 0;
  border-color: ${p => resolveColor(p, null, colorKeys.primaryColor)};
  background: ${p => resolveColor(p, p.emotion, colorKeys.cool)};
  color: ${p => resolveColor(p, null, colorKeys.contrastColor)};
  padding: ${vertPadding}px 0;
  
  &:last-child{
    border-style: solid solid solid none;
    border-radius: 0 ${borderRad} ${borderRad} 0;
  }
`;

const Text = styled.p`
  background: ${p => resolveColor(p, p.emotion, colorKeys.contrastColor)};
  color: ${p => contrastFontForBkg(p, p.emotion, colorKeys.contrastColor)};
  border-style: solid none solid solid;
  border-radius: ${borderRad} 0 0 ${borderRad};
  border-width: ${borderWidth};
  border-color: ${p => resolveColor(p, null, colorKeys.primaryColor)};
  padding: ${vertPadding}px 6px;
  ${p => childlessPillStyle(p)};
`;

function childlessPillStyle(p){
  if(p.childCount < 1){
    return css`
      border-radius: ${borderRad};
      border-style: solid;
    `;
  }
}

const Container = styled.div`
  ${commonSizeAttrs};
  display: inline-flex;
`;

const S = {
  Text,
  Container,
  Letter
}

export default S;
