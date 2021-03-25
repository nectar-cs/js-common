import React, {useContext, Fragment, useState, useRef} from 'react'
import Layout from "../../styles/layout-styles";
import { ThemeContext } from 'styled-components';
import Text from "../../styles/text-styles";
import useOutsideAlerter from "../../utils/useOutsideAlerter";


function View({children}){
  const themeContext = useContext(ThemeContext);
  return(
    <Layout.Div
      left={themeContext.dims.sideBarWidth}
      bottom='0px'
      right='0px'
      height='32px'
      bkgEmotion='coffee'
      style={{position: 'fixed'}}
      pl='0px'
    >
      <Layout.Div flex height='100%'>
        { children }
      </Layout.Div>
    </Layout.Div>
  )
}

function PortForwardStatusView({title, status, emotion}){
  const common = {
    emotion: 'white',
    borderRadius: '1.0px',
    borderEmotion: "lightGrey",
    bold: true,
    style: { paddingTop: '1px', paddingBottom: '0px' }
  }

  return(
    <Layout.Div iFlex align='center' width='30%' mt='5.5px'>
      <Text.BorderedStatusTag
        {...common}
        emotion='lightGrey'
      >
        { title }
      </Text.BorderedStatusTag>
      <Text.BorderedStatusTag
        {...common}
        ml='-2px'
        bkgEmotion={emotion}>
        { status }
      </Text.BorderedStatusTag>
    </Layout.Div>
  )
}

function PortForwardInstancesListView(props: ManyPortForwardProps) {
  const { portForwards } = props;
  return(
    <Layout.Div width={'70%'}>
      <Layout.Div
        pr={2}
        flex
        style={{flexDirection: 'row-reverse', overflowX: 'scroll'}}>
        { portForwards.map((portForward, i) => (
          <PortForwardInstanceView
            key={i}
            {...portForward}
          />
        )) }
      </Layout.Div>
    </Layout.Div>
  )
}

function PortForwardInstanceView(props: PortForwardProps){
  const { localAddress, resourceSignature, status } = props;
  const { actionCallback, gotoCallback, SubmenuView } = props;
  const [emotion, icon] = serverStatusColorAndIcon(status);

  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const menuRef = useRef(null);
  useOutsideAlerter(menuRef, _ => setIsMenuOpen(false));

  const hasMenu = !!SubmenuView;

  return(
    <Layout.Div ref={hasMenu ? menuRef : null}>
      { hasMenu && isMenuOpen && (
        <Layout.Div
          minWidth='242px'
          sexyShadow
          shadowOpacity={.5}
          ptb={1.6}
          bkgEmotion='white'
          rounded
          style={{
            // zIndex: '1000',
            position: 'fixed',
            transform: 'translateY(calc(-100% - 12px))'
          }}
          right='64px'
        >
          <SubmenuView/>
        </Layout.Div>
      )}


      <Layout.Div flex align='center' mt='7px' mr={4}>
        <Text.P
          onClick={gotoCallback}
          hov_underline
          hov_point
          emotion='white'
          hacker
          noSpill
        >
          { localAddress }
        </Text.P>
        <Text.Icon
          emotion={emotion}
          name='arrow_right_alt'
          ml='4px'
          mr='4px'
        />
        <Text.P
          onClick={gotoCallback}
          hov_underline
          hov_point
          emotion='white'
          hacker
          noSpill
        >
          { resourceSignature }
        </Text.P>
        <Text.Icon
          onClick={hasMenu ? _ => setIsMenuOpen(true) : actionCallback}
          hov_point
          size={.76}
          emotion={emotion}
          name={icon}
          ml='5px'
          mt={'-1.5px'}
        />

      </Layout.Div>


    </Layout.Div>
  )
}

function serverStatusColorAndIcon(status: string){
  if(status === 'init')
    return ['innocent', 'pending'];
  else if(status === 'running')
    return ['cool', 'cancel'];
  else
    return ['warning2', 'error_outline'];
}

export default {
  View,
  PortForwardStatusView,
  PortForwardInstancesListView
}

type ManyPortForwardProps = {
  portForwards: Array<PortForwardProps>
}

type PortForwardProps = {
  localAddress: string,
  resourceSignature: string,
  status: string,
  actionCallback: void => void,
  gotoCallback: void => void
}
