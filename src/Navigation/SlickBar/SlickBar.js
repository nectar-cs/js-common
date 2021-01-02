import React, {Fragment, useState, useRef} from 'react';
import Layout from "../../styles/layout-styles";
import Img from "../../styles/img-styles";
import Text from "../../styles/text-styles";
// noinspection NpmUsedModulesInstalled
import styled from 'styled-components'
import {heightAndWidth} from "../../styles/constants";
import useOutsideAlerter from "../../utils/useOutsideAlerter";


const objectSizes = '31px';


const Outer = styled(Layout.Div)`
  position: fixed;
  ${p => heightAndWidth(p, {
    width: p.theme.dims.sideBarWidth
})}
`;

function SlickBarItself({children}){
  return(
    <Outer
      top={0}
      bottom={0}
      left={0}
      pt={1.7}
      pb={3}
      bkgEmotion='primaryBkg'>
      <Layout.Div
        relative
        flex
        width='100%'
        height='100%'
        style={{ flexDirection: 'column', justifyContent: 'space-between'}}>
        { children }
      </Layout.Div>
    </Outer>
  )
}

function IconItem({isSelected, spaced, SubmenuView, low, ...props}){
  return(
    <ItemWrapper
      low={low}
      SubmenuView={SubmenuView}
      isSelected={isSelected}
      spaced={spaced}>
      <Text.Icon
        mt={2}
        size={1.79}
        ml='auto'
        sexyShadow
        mr='auto'
        style={{display: 'block', textAlign:'center'}}
        emotion='lightGrey'
        name='code'
        {...(props || {})}
      />
    </ItemWrapper>
  )
}

function ImgItem({isSelected, spaced, SubmenuView, low, ...props}) {
  return(
    <ItemWrapper
      low={low}
      SubmenuView={SubmenuView}
      isSelected={isSelected}
      spaced={spaced}>
      <Img.Img
        width={objectSizes}
        height={objectSizes}
        {...(props || {})}
      />
    </ItemWrapper>
  )
}

const selectedPaddingSize = '3.5px';

function ItemWrapper(props: ItemWrapperProps) {
  const { isSelected, SubmenuView, spaced, low, ..._props } = props;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  useOutsideAlerter(menuRef, _ => setIsMenuOpen(false));

  const hasMenu = !!SubmenuView;

  return(
    <Layout.Div
      mt={spaced ? 1.85 : null}
      flex
      ref={hasMenu ? menuRef : null}
      onClick={hasMenu ? _ => setIsMenuOpen(true) : null}
      style={{justifyContent: 'center', boxSizing: 'border-box'}}
      hov_point={hasMenu}
      borderEmotion={(isSelected || true) ? 'warning2' : 'transparent'}
      borderStyle='none none none solid'
      pr={isSelected ? selectedPaddingSize : '0px'}
      borderWidth={isSelected ? selectedPaddingSize : '0px'}
      {...(_props) || {}}
    >
      <Fragment>
        { props.children }
        { hasMenu && isMenuOpen && (
          <Layout.Div
            minWidth='242px'
            sexyShadow
            shadowOpacity={.5}
            ptb={1.6}
            bkgEmotion='white'
            rounded
            style={{
              position: 'fixed',
              transform: low ? 'translateY(-100%)' :  null
              // transform: `translateY(-100%)`
            }}
            left='64px'>
            <SubmenuView/>
          </Layout.Div>
        )}
      </Fragment>
    </Layout.Div>
  )
}

function Separator(props){
  return(
    <Layout.Div
      mt={2.8}
      mb={2}
      height='2px'
      bkgEmotion='lightGrey'
      width='70%'
      mlr='auto'
      style={{display: 'block'}}
      {...(props || {})}
    />
  )
}

type ItemWrapperProps = {
  isSelected?: boolean,
  spaced?: boolean,
  low?: boolean,
  SubmenuView?: * => *,
  children?: [any]
}

ItemWrapper.defaultProps = {
  spaced: true,
  low: false
}

// noinspection JSUnusedGlobalSymbols
const SlickBar = {
  SlickBar: SlickBarItself,
  IconItem,
  ImgItem,
  Separator
}

export default SlickBar;
