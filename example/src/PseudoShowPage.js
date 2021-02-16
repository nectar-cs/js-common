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
  Clickable
} from 'nectar-gui'
import {GlancesSubpage} from "./GlancesSubpage";

export function PseudoShowPage() {
  return(
    <ThemeProvider theme={slickBarTheme}>
      <AppLayout SideBar={CustomSlickBar}>
        <Layout.Div hipster mt={3} maxWidth='1000px'>
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

