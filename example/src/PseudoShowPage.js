import {ThemeProvider} from "styled-components";
import CustomSlickBar from "./CustomSlickbar";
import React from "react";
import {
  Text,
  BigHeader,
  Layout,
  CenterContentView,
  AppLayout,
  slickBarTheme,
  RoutedTabsView,
  BottomBar,
  Clickable
} from 'nectar-gui'
import {GlancesSubpage} from "./GlancesSubpage";

export function PseudoShowPage() {
  return(
    <ThemeProvider theme={slickBarTheme}>
      <AppLayout
        SideBar={CustomSlickBar}
        BottomBar={CustomBottomBar}
      >
        <Layout.Div hipster mt={3} maxWidth='1080px'>
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
      </AppLayout>
    </ThemeProvider>
  )
}

const routes = [
  {
    path: '/',
    name: 'Glances',
    longName: 'Glances Demo',
    icon: "apps",
    component: GlancesSubpage,
    isDefault: true
  }
]

function HeaderSubtitle(){
  return(
    <Text.H3>Tabbed route views and glances</Text.H3>
  )
}

function CustomBottomBar(){
  return(
    <BottomBar.View>
      <BottomBar.PortForwardStatusView
        title="camus / port-forwards"
        status='0 connections'
      />
      <BottomBar.PortForwardInstancesListView
        portForwards={portForwards}
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

const portForwards = [
  {
    localAddress: 'localhost:9090',
    resourceSignature: 'namespace/running:9090',
    status: 'running'
  },
  {
    localAddress: 'localhost:9091',
    resourceSignature: 'namespace/init:9090',
    status: 'error'
  }
]
