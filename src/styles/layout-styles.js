import React, {Fragment} from 'react'
import styled, {css} from 'styled-components'
import {borderRounding, colorKeys, commonSizeAttrs, resolveColor, simplePadding} from './constants'

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

function central(p){
  if(p.absCentered){
    return css`
      position: absolute;
      display: inline-block;
      left: 50%;
      transform: translateX(-50%);
    `;
  }
}

function hipster(p){
  if(p.hipster){
    return css`
      width:  870px;
      margin-left: auto;
      margin-right: auto;
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

function lightBorder(p, defaults){
  const merged = {...(defaults || {}), ...p};
  if(merged.lightBorder){
    return css`
      border-style: solid;
      border-width: 0.5px;
      border-color: #d6d6d6;
    `;
  }
}

const totalHeaderHeight = 80;

const FixedHeaderWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: ${totalHeaderHeight}px;
  right: 0;
  padding: 0 0 0 12px;
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
`;

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
`;

const Separator = styled.div`
  ${commonSizeAttrs};
  width: 99%;
  height: .5px;
  margin-left: auto;
  margin-right: auto;
  background: ${p => resolveColor(p, p.emotion, colorKeys.cool)};
`;

const PanelTop = styled(Div)`
  background: #f7f6f6;
  padding: ${p => simplePadding(p, {padded: true})};
  border-radius: ${p => borderRounding(p, {rounding: 6, applier: x => `${x} ${x} 0 0`})};
  ${p => lightBorder(p, {lightBorder: true})};
  border-style: solid;
  border-width: .5px .5px 0 .5px;
  border-color: #d6d6d6;
`;

function halfRounded(p){
  if(p.halfRounded){
    const applier = x => `0 0 ${x} ${x}`;
    return css`
      border-radius: ${p => borderRounding(p, {rounding: 4, applier})};
    `;
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
  UnderHeaderContainer
};
export default Layout;
