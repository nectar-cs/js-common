import React, {useContext, Fragment} from 'react'
import Layout from "../../styles/layout-styles";
import { ThemeContext } from 'styled-components';
import Text from "../../styles/text-styles";


function View({children}){
  const themeContext = useContext(ThemeContext);
  return(
    <Layout.Div
      left={themeContext.dims.sideBarWidth}
      bottom='0px'
      right='0px'
      height='32px'
      // borderStyle={"solid none none none"}
      // borderWidth={'4px'}
      // borderEmotion={'primaryColor'}
      bkgEmotion='primaryBkg'
      // bkgEmotion='primaryColor'
      // bkgEmotion='calmBeige'
      style={{position: 'fixed'}}
      pl={'0px'}
    >
      <Layout.Div>
        { children }
      </Layout.Div>
    </Layout.Div>
  )
}

function PortForwardInstancesListView(props: ManyPortForwardProps) {
  const { portForwards } = props;
  return(
    <Layout.Div flex>
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
  )
}

function PortForwardInstanceView(props: PortForwardProps){

  const { localAddress, resourceSignature, status } = props;

  return(
    <Layout.Div flex align='center' mt={'6px'}>
      <Text.P
        hov_underline
        hov_point
        emotion='white'
        hacker
      >
        { localAddress }
      </Text.P>
      <Text.Icon
        emotion={'cool'}
        name={'arrow_right_alt'}
        ml={'4px'}
        mr={'4px'}
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
        size={.76}
        emotion='cool'
        name={'open_in_new'}
        ml={'4px'}
      />

    </Layout.Div>
  )
}

export default {
  View,
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
