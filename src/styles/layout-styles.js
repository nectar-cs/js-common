import React, {Fragment} from 'react'
import styled, {css} from 'styled-components'
import {
  borderRounding,
  colorKeys,
  commonSizeAttrs,
  heightAndWidth,
  overflowScroll,
  resolveColor,
  simplePadding
} from './constants'

import {easyColor} from "./utils";

const halfPanelOffset = "14px";
const totalHeaderHeight = 80;

const Dims = {
  containerPaddingVert: "12px",
  containerPaddingHor: "16px",
};

const Div = styled.div`
  ${commonSizeAttrs};
  background: ${p => resolveColor(p, p.emotion, colorKeys.none)};
  display: ${p => displayType(p)};
  align-items: ${p => p.align || 'flex-start'};
  border-radius: ${p => borderRounding(p, {rounding: 4})};
  ${p => central(p)};
  ${p => center(p)};
  ${p => lightBorder(p)};
  ${p => halfRounded(p)};
  ${p => hipster(p)};
  ${p => absHipster(p)};
  ${p => overflowScroll(p)};
`;

const PanelBot = styled(Div)`
  ${p => lightBorder(p, {lightBorder: true})};
  ${p => halfRounded(p, {halfRounded: true, rounding: { sofa: true }})};
  padding: ${p => simplePadding(p, {padded: true})};
`;

const TableFilterBox = styled(Div)`
   position: fixed;
   right: 22px;
   top: ${totalHeaderHeight + 18}px;
   ${p => heightAndWidth(p, {width: '290px'})};
`;

const Separator = styled.div`
  ${commonSizeAttrs};
  ${p => heightAndWidth(p, {width: '99%', height: '.5px'})};
  margin-left: auto;
  margin-right: auto;
  background: ${p => resolveColor(p, p.emotion, colorKeys.cool)};
`;

const applier = dim => `${dim} ${dim} 0 0`;

const PanelTop = styled(Div)`
  background: ${p => easyColor(p, p.emotion, 'panelGrey2')};
  padding: ${p => simplePadding(p, {padded: true})};
  border-radius: ${p => borderRounding(p, {sofa: true, applier})};
  ${p => lightBorder(p, {lightBorder: true})};
  border-style: solid;
  border-width: .5px .5px 0 .5px;
  border-color: #d6d6d6;
`;

const CenteringDiv = styled(props => (
  <Div {...props}>
    {props.children}
  </Div>
))`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const CenteringDivY = styled(props => (
  <Div {...props}>
    {props.children}
  </Div>
))`
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ThemePage = styled.div`
  background: ${p => p.theme.colors.primaryColor};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const ModalLayout = styled.div`
  padding: 14px 20px 14px 20px;
  width: 580px;
  height: 700px;
`;

const Panel = styled(Div)`
  padding: 12px;
  border-radius: 4px;     
`;

const TextLine = styled.div`
  margin-top: ${p => `${(p.low) * 12}px`};
  display: flex;
  justify-content: start;
  width: 100%;
  align-items: ${p => p.center ? 'center' : 'stretch'};
`;

const BigCodeViewer = styled.div`
  margin-top: 18px;
  padding: 20px 12px;
  border-radius: 4px;
  max-height: ${p => p.maxHeight};
  overflow-y: scroll;
  background: ${p => p.theme.colors.primaryColor};
`;

const SlimCodeViewer = styled(BigCodeViewer)`
  margin-top: 18px;
  padding: 11px 12px;
`;





/******************************PAGE*****************************/





const FixedHeaderWrapper = styled.div`
  position: relative;
  top: 0;
  height: ${totalHeaderHeight}px;
  right: 0;
  padding: 0 0 0 32px;
  box-sizing: border-box;
`;

const UnderHeaderContainer = styled.div`
  position: absolute;
  top: ${totalHeaderHeight}px;
  height: calc(100% - ${totalHeaderHeight}px);
  max-height: calc(100% - ${totalHeaderHeight}px);
  overflow: scroll;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 18px 14px;
  box-sizing: border-box;
`;

function PageWithHeader({Header, children}){
  return(
    <Fragment>
      <FixedHeaderWrapper>
        { Header && <Header/> }
      </FixedHeaderWrapper>
      <UnderHeaderContainer>
        { children }
      </UnderHeaderContainer>
    </Fragment>
  )
}

const PageWithoutHeader = styled.div`
  ${commonSizeAttrs};
  padding: 14px 18px 0 18px;
  position: relative;
  height: 100%;
`;




/*****************************MIXINS***************************/





function displayType(p, defaults={}){
  if({...defaults, ...p}.flex) return "flex";
  else if(p.iFlex) return "inline-flex";
  else if(p.wrapped) return "inline-block";
  else return "block";
}

function central(p, defaults={}){
  if({...defaults, ...p}.absCentered){
    return css`
      position: absolute;
      display: inline-block;
      left: 50%;
      transform: translateX(-50%);
    `;
  }
}

function hipster(p, defaults={}){
  if({...defaults, ...p}.hipster){
    return css`
      width: auto;
      max-width:  870px;
      margin-left: auto;
      margin-right: auto;
    `;
  }
}

function absHipster(p, defaults={}){
  if({...defaults, ...p}.absHipster){
    return css`
      position: absolute;
      left: calc((100% - 870px) / 2);
      right: calc((100% - 870px) / 2);
      height: 70%;
      top: 0;
    `;
  }
}



function center(p){
  if(p.center){
    return css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    `;
  }
}

function lightBorder(p, defaults={}){
  const merged = {...defaults, ...p};
  if(merged.lightBorder || merged.lightestBorder){
    const color = merged.lightestBorder ? "#ebebeb" : "#d6d6d6"
    return css`
      border-style: solid;
      border-width: 0.5px;
      border-color: ${color};
    `;
  }
}

function halfRounded(p, defaults={}){
  const merged = {...defaults, ...p};
  if(merged.halfRounded){
    const roundingDefaults = { rounding: 4 };
    const roundingProps = { ...roundingDefaults, ...merged.rounding }
    const applier = x => `0 0 ${x} ${x}`;
    return css`
      border-radius: ${p => borderRounding(p, {...roundingProps, applier})};
    `;
  }
}




/*****************************EXPORT***************************/





const Layout = {
  Div,
  CenteringDiv,
  CenteringDivY,
  PageWithoutHeader,
  SlimCodeViewer,
  TextLine ,
  BigCodeViewer,
  ModalLayout,
  PanelTop,
  Dims,
  halfPanelOffset,
  ThemePage,
  Panel,
  PageWithHeader,
  Separator,
  UnderHeaderContainer,
  TableFilterBox,
  PanelBot
};
export default Layout;
