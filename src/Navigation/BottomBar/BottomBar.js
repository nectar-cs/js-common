import React, {useContext, Fragment} from 'react'
import Layout from "../../styles/layout-styles";
import { ThemeContext } from 'styled-components';
import Text from "../../styles/text-styles";
import NectarGuiUtils from "../../utils/NectarGuiUtils";


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

function PortForwardStatusView({title, status}){
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
        bkgEmotion='innocent'>
        { status }
      </Text.BorderedStatusTag>
    </Layout.Div>
  )
}

function PortForwardInstancesListView(props: ManyPortForwardProps) {
  const { portForwards } = props;
  return(
    <Layout.Div width={'100%'}>
      <Layout.Div pr={2} flex style={{flexDirection: 'row-reverse'}}>
        { portForwards.map((portForward, i) => (
          <Fragment>
            <PortForwardInstanceView
              key={i}
              {...portForward}
            />
            { i !== portForwards.length - 1 && (
              <Layout.Div width={'80px'}/>
            ) }
          </Fragment>
        )) }
      </Layout.Div>
    </Layout.Div>
  )
}

function PortForwardInstanceView(props: PortForwardProps){
  const { localAddress, resourceSignature, status } = props;
  const [emotion, icon] = serverStatusColorAndIcon(status);

  return(
    <Layout.Div flex align='center' mt='7px'>
      <Text.P
        hov_underline
        hov_point
        emotion='white'
        hacker
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
        hov_underline
        hov_point
        emotion='white'
        hacker
      >
        { resourceSignature }
      </Text.P>
      <Text.Icon
        hov_point
        size={.74}
        emotion={emotion}
        name={icon}
        ml='5px'
        mt={'-1.5px'}
      />

    </Layout.Div>
  )
}

function serverStatusColorAndIcon(status: string){
  if(status === 'init')
    return ['innocent', 'pending'];
  else if(status === 'running')
    return ['cool', 'open_in_new'];
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
  status: string
}
