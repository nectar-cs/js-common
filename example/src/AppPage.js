import React from "react";
import {Layout,
  AppLayout,
  LeftHeader,
  Input,
  noTopBarTheme,
  SideBar,
  TopBar,
  Text,
  colorKeys
}
  from "nectar-gui";
import {ThemeProvider} from "styled-components";
import {someLorem} from "./copy";

export default function AppPage(){
  return(
    <ThemeProvider theme={noTopBarTheme}>
      <AppLayout
        sideBar={<MySideBar/>}
        topBar={<TopBar/>}>
        <Layout.Page>
          <PageHeader/>
          <IntroPanel/>
          <ThreePanels/>
          <FormsPanel/>
        </Layout.Page>
      </AppLayout>
    </ThemeProvider>
  )
}

function ThreePanels(){
  return(
    <Layout.Div mt={2} hipster flex>

      <Layout.Div width='100%'>
        <Layout.PanelTop mt={2} flex align='center'>
          <Text.H4 ml={.4} mt={.1}>Small Left Panel</Text.H4>
        </Layout.PanelTop>
        <Layout.Div lightBorder padded halfRounded>
          <Text.Icon name='photo' ml={2}/>
          <Text.Icon name='photo' ml={1} emotion={colorKeys.cool}/>
          <Text.Icon size={1.2} name='photo' ml={1} emotion={colorKeys.excited}/>
        </Layout.Div>
      </Layout.Div>

      <Layout.Div width='30px'/>

      <Layout.Div width='100%'>
        <Layout.PanelTop mt={2} flex align='center'>
          <Text.H4 ml={.4} mt={.1}>Small Right Panel</Text.H4>
        </Layout.PanelTop>
        <Layout.Div lightBorder padded halfRounded>
          <Layout.Div flex align='center'>
            <Text.StatusTag>Status Tag</Text.StatusTag>
            <Text.StatusTag blink ml={1} vertSwell={.2} emotion='nectar'>
              Unswelled Tag
            </Text.StatusTag>
            <Text.CleanStatus ml={1}>Clean Status</Text.CleanStatus>
          </Layout.Div>
        </Layout.Div>
      </Layout.Div>

    </Layout.Div>
  )
}

function IntroPanel(){
  return(
    <Layout.Div hipster>
      <Layout.PanelTop mt={2} flex align='center'>
        <Text.Icon name='laptop'/>
        <Text.H4 ml={.4} mt={.1}>Simple Panel</Text.H4>
      </Layout.PanelTop>
      <Layout.Div lightBorder padded halfRounded>
        <Text.P>Standard text</Text.P>
        <Text.P calm mt={1}>{someLorem}</Text.P>
        <Layout.Separator mt={2.5} mb={2.5}/>
        <Text.P>Standard text</Text.P>
        <Text.P calm mt={1}>{someLorem}</Text.P>
      </Layout.Div>
    </Layout.Div>
  )
}

function FormsPanel(){
  return(
    <Layout.Div hipster mt={4}>
      <Layout.PanelTop mt={2} flex align='center'>
        <Text.Icon name='subject'/>
        <Text.H4 ml={.4} mt={.1}>Basic Inputs</Text.H4>
      </Layout.PanelTop>
      <Layout.Div lightBorder padded halfRounded>
        <Input.Input mt={2.5} placeholder='Text input with length auto'/>
        <Input.FlatInput mt={2.5} placeholder='Text input with length auto'/>
        <Input.FlatSelect mt={2.5}><option>Hey</option></Input.FlatSelect>
        <Layout.Div flex align='center'>
          <Input.Checkbox />
          <Text.P>Checkbox</Text.P>
        </Layout.Div>
        <Layout.Div flex mt={1.5}>
          <Input.Radio name='one'/>
          <Input.Radio name='one' s={{ml: 1}} checked/>
          <Text.P ml={.3}>With label</Text.P>
        </Layout.Div>
      </Layout.Div>
    </Layout.Div>
  )
}

function PageHeader(){
  return(
    <LeftHeader
      graphicName={'dashboard'}
      title={'GUI Showcase Home'}
      subtitle={'Starting point for styles and widgets'}
      graphicType={'icon'}
    />
  )
}


function MySideBar(){
  return(
    <SideBar
      title='Fixed Height'
      subtitle='Nectar GUI Demo'
    />
  )
}
