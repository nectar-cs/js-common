import {ThemeProvider} from "styled-components";
import CustomSlickBar from "./CustomSlickbar";
import React, {useState} from "react";
import {
  Text,
  BigHeader,
  Layout,
  CenterContentView,
  AppLayout,
  slickBarTheme,
  RoutedTabsView,
  TopBarViews,
  Input,
  Button,
  BottomBar,
  Clickable
} from 'nectar-gui'
import {GlancesShowcasePage} from "./GlancesShowcasePage";
import ConcernsShowcasePage from "./ConcernsShowcasePage";

export function PseudoShowPage() {
  return(
    <ThemeProvider theme={slickBarTheme}>
      <AppLayout SideBar={CustomSlickBar} BottomBar={CustomBottomBar}>
        <Layout.Page>
          <Layout.Div hipster mt={3} maxWidth='1250px'>
            <BigHeader
              graphicName='https://img.icons8.com/color/452/mongodb.png'
              Subtitle={HeaderSubtitle}
              Title={HeaderTitle}
            />
            <RoutedTabsView
              routes={routes}
              prefix='/pseudo-show'
              seekIndex={0}
            />
            <CenterContentView
              routes={routes}
              prefix='/pseudo-show'
            />
          </Layout.Div>
        </Layout.Page>
      </AppLayout>
    </ThemeProvider>
  )
}

const routes = [
  {
    path: '/glances',
    name: 'Glances',
    longName: 'Glances Demo',
    icon: "apps",
    component: GlancesShowcasePage,
    isDefault: true
  },
  {
    path: '/concerns',
    name: 'Concerns',
    longName: 'Glances Demo',
    icon: "insights",
    component: ConcernsShowcasePage,
    isDefault: false
  }

]

function HeaderSubtitle(){
  return(
    <Text.H3>Tabbed route views and glances</Text.H3>
  )
}

function CustomBottomBar(){
  const [isHot, setIsHot] = useState(false);

  return(
    <BottomBar.View>
      <Clickable action={_ => setIsHot(true)}>
        <BottomBar.PortForwardStatusView
          title="camus / port-forwards"
          status='0 connections'
        />
      </Clickable>
      <BottomBar.PortForwardInstancesListView
        portForwards={portForwards(isHot)}
      />
    </BottomBar.View>
  )
}

function HeaderTitle(){
  return(
    <Layout.Div flex mt={1.4} align='center'>
      <Clickable to='/'>
        <Text.H1
          hov_point
          hov_underline
          fontSize='23px'>
          <b>Pseudo Show Page</b>
        </Text.H1>
      </Clickable>
      <Text.BorderedStatusTag
        bold
        ptb='1px'
        borderWidth='2px'
        ml={.8}
        emotion='innocent'>
        Reveal
      </Text.BorderedStatusTag>
    </Layout.Div>
  )
}

const portForwards = hot => [
  // {
  //   localAddress: 'localhost:9090',
  //   resourceSignature: 'namespace/running:9090',
  //   status: 'running',
  //   SubmenuView: CustomSubMenu
  // },
  // {
  //   localAddress: 'localhost:9091',
  //   resourceSignature: 'rather-long-namespace/obnoxious-service:9090',
  //   status: 'error',
  //   SubmenuView: CustomSubMenu
  // },
  // {
  //   localAddress: 'localhost:9091',
  //   resourceSignature: 'rather-long-namespace/obnoxious-service:9090',
  //   status: 'error',
  //   SubmenuView: CustomSubMenu
  // },
  {
    localAddress: 'localhost:9091',
    resourceSignature: 'rather-long-namespace/obnoxious-service:9090',
    status: 'error',
    isHot: hot,
    SubmenuView: CustomSubMenu
  }
]

function CustomSubMenu(){
  const bHeight = '33px';
  return(
    <Layout.Div>
      <TopBarViews.ImgAndLink
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Prometheus_software_logo.svg/1920px-Prometheus_software_logo.svg.png'
        title="Port-forward "
        text="rather-long-namespace/obnoxious-service:9090"
        configIcon={'arrow_right_alt'}
        status='INITIALIZING'
        statusEmotion='innocent'
        textEmotion='primaryColor'
      />

      <Layout.Div mlr='auto' width='90%' maxWidth='90%' mt={2}>
        <Layout.Div flex>
          <Input.FlatInput value='8080' height={bHeight} width={'auto'}/>
          <Button.ClearButton
            ml={2}
            width={'171px'}
            emotion={'primaryColor'}
            height={bHeight}>
            Change local port
          </Button.ClearButton>
        </Layout.Div>


        <Layout.Div flex maxWidth={'200px'} mt={2} align={'center'}>
          <Text.Icon
            bold
            size={.7}
            name='error_outline'
            emotion='warning2'
          />
          <Text.P emotion='warning2' ml={.3}>
            <b>Error</b> Address already in use
          </Text.P>
        </Layout.Div>

        <Text.P mt={2}>
          Closing Nectar will also stop all port-forwards
        </Text.P>

        <Button.Button
          mt={2}
          width={'auto'}
          bold
          emotion={'white'}
          bkgEmotion={'warning2'}
          borderRadius={'2.5px'}
          height={bHeight}>
          Stop port-forward
        </Button.Button>

      </Layout.Div>


    </Layout.Div>
  )
}
