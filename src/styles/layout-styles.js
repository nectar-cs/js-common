import React from 'react'
// noinspection NpmUsedModulesInstalled
import styled, {css} from 'styled-components'
import {
  commonSizeAttrs,
  heightAndWidth,
  overflowScroll,
  borderStyles,
  marginsAndPadding, colorStyles
} from './constants'


const halfPanelOffset = "14px";
const totalHeaderHeight = 80;

const Dims = {
  containerPaddingVert: "12px",
  containerPaddingHor: "16px",
};

// noinspection JSUnresolvedFunction
const Div = styled.div`
  ${commonSizeAttrs};
  display: ${p => displayType(p)};
  align-items: ${p => p.align || 'flex-start'};
  ${p => central(p)};
  ${p => center(p)};
  ${p => hipster(p)};
  ${p => absHipster(p)};
  ${p => overflowScroll(p)};
`;

const PanelBot = styled(Div)`
  ${p => marginsAndPadding('padding', p, { padded: true })};
  ${p => borderStyles(p, {
    borderRadius: '8px',
    roundingApplier: ((x) => `0 0 ${x} ${x}`),
    borderEmotion: "#d6d6d6",
    borderWidth: "0 .5px .5px .5px"
  })};
`;

const TableFilterBox = styled(Div)`
   position: fixed;
   right: 22px;
   top: ${totalHeaderHeight + 18}px;
   ${p => heightAndWidth(p, { width: '270px' })};
`;

const Separator = styled(Div)`
  ${p => heightAndWidth(p, { width: '99%', height: '.5px' })};
  ${p => colorStyles(p, { bkgEmotion: 'cool' }) };
  ${p => marginsAndPadding('margin', p, { ml: 'auto', mr: 'auto' })};
`;

const PanelTop = styled(Div)`
  ${p => marginsAndPadding('padding', p, { padded: true })};
  ${p => colorStyles(p, { bkgEmotion: 'panelGrey2' }) };
  ${p => borderStyles(p, {
    borderRadius: '8px',
    roundingApplier: ((x) => `${x} ${x} 0 0`),
    borderEmotion: "#d6d6d6",
    borderWidth: ".5px .5px 0 .5px" 
  })};
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

// noinspection JSUnresolvedFunction
const ThemePage = styled.div`
  background: ${p => p.theme.colors.primaryColor};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

// noinspection JSUnresolvedFunction
const ModalLayout = styled.div`
  padding: 14px 20px 14px 20px;
  width: 580px;
  height: 700px;
`;

const Panel = styled(Div)`
  padding: 12px;
  border-radius: 4px;     
`;

// noinspection JSUnresolvedFunction
const TextLine = styled.div`
  margin-top: ${p => `${(p.low) * 12}px`};
  display: flex;
  justify-content: start;
  width: 100%;
  align-items: ${p => p.center ? 'center' : 'stretch'};
`;

// noinspection JSUnresolvedFunction
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





// noinspection JSUnresolvedFunction
/******************************PAGE*****************************/


const Page = styled(props => (
  <Div {...props}>
    { props.children }
    <Div height={3} />
  </Div>
))`
  height: 100%;
  overflow-y: scroll;
`;




// noinspection JSUnresolvedFunction
const PageWithoutHeader = styled.div`
  ${commonSizeAttrs};
  ${p => marginsAndPadding('padding', p, { ptb: '16px', plr: '18px'})};
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  right: 0;
  left: 0;
  box-sizing: content-box;
`;




/*****************************MIXINS***************************/





function displayType(p, defaults={}){
  if({...defaults, ...p}.flex) return "flex";
  else if(p['iFlex']) return "inline-flex";
  else if(p.wrapped) return "inline-block";
  else return "block";
}

function central(p, defaults={}){
  if({...defaults, ...p}['absCentered']){
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
      margin-left: auto;
      margin-right: auto;
      ${p => heightAndWidth(p, {
        width: 'auto',
        maxWidth: '870px'
      })}
    `;
  }
}

function absHipster(p, defaults={}){
  if({...defaults, ...p}['absHipster']){
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
  Separator,
  TableFilterBox,
  PanelBot,
  Page
};
export default Layout;
