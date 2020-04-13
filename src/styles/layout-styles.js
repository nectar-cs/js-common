import React from 'react'
import styled, {css} from 'styled-components'
import {borderRounding, colorKeys, commonSizeAttrs, resolveColor} from './constants'

const halfPanelOffset = "14px";

const Dims = {
  containerPaddingVert: "12px",
  containerPaddingHor: "16px",
};

function displayType(p){
  if(p.flex) return "flex";
  else if(p.iFlex) return "inline-flex";
  else if(p.wrapped) return "inline-block";
  else return "block";
}

function positionType(p) {
  if(p.relative) return "relative";
  if(p.absolute) return "absolute";
  return "default";
}

function central(p){
  if(p.absCentered){
    return css`
      position: absolute;
      display: inline-block;
      left: 50%;
      transform: translateX(-50%);
    `
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

const Div = styled.div`
  ${commonSizeAttrs};
  background: ${p => resolveColor(p, p.emotion, colorKeys.none)};
  display: ${p => displayType(p)};
  align-items: ${p => p.align || 'flex-start'};
  position: ${p => positionType(p)};
  border-radius: ${p => borderRounding(p, 4, 0)};
  ${p => central(p)};
  ${p => center(p)};
  ${p => hover(p)}
`;

function hover(p){
  if(p.hoverPoint){
    return css`
      &:hover{
        cursor: pointer;
      }
    `
  }
}

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

const ContentContainer = styled(Div)`
  position: absolute;
  padding: ${Dims.containerPaddingVert} ${Dims.containerPaddingHor};
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  background: ${p => p.theme.colors.contrastColor};
`;

const LeftPanel = styled(ContentContainer)`
  position: absolute;
  width: calc(50% - calc(${halfPanelOffset} * 1.5));
  left: ${halfPanelOffset};
  top: ${halfPanelOffset};
  height: 97%;
`;

const RightPanel = styled(ContentContainer)`
  position: absolute;
  width: calc(50% - calc(${halfPanelOffset} * 1.5));
  right: ${halfPanelOffset};
  top: ${halfPanelOffset};
  height: 97%;
`;

const FullWidthPanel = styled(ContentContainer)`
  left: 14px;
  right: 14px;
  min-height: 100%;
`;

const FullScreen = styled(ContentContainer)`
  position: absolute;
  left: ${halfPanelOffset};
  right: ${halfPanelOffset};
  top: ${halfPanelOffset};
  height: 97%;
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

const Layout = {
  Div,
  CenteringDiv,
  CenteringDivY,
  ContentContainer,
  SlimCodeViewer,
  LeftPanel,
  RightPanel,
  TextLine ,
  FullWidthPanel,
  BigCodeViewer,
  ModalLayout,
  Dims,
  halfPanelOffset,
  ThemePage,
  FullScreen,
  Panel
};
export default Layout;
