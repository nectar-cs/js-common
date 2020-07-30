import React, {useEffect, useState} from "react";
import {Layout,
  AppLayout,
  LeftHeader,
  ErrorToast,
  Stepper,
  Input,
  noTopBarTheme,
  SideBar,
  TopBar,
  Text,
  TextOverLineSubtitle,
  colorKeys
}
  from "nectar-gui";
import {ThemeProvider} from "styled-components";
import {someLorem} from "./copy";

export default function AppPage(){
  return(
    <ThemeProvider theme={noTopBarTheme}>
      <AppLayout
        SideBar={MySideBar}
        TopBar={TopBar}>
        <Layout.PageWithHeader Header={PageHeader}>
          <IntroPanel/>
          <TwoPanels/>
          <FormsPanel/>
        </Layout.PageWithHeader>
      </AppLayout>
    </ThemeProvider>
  )
}

function TwoPanels(){
  return(
    <Layout.Div mt={2} hipster flex>
      <Layout.Div width='100%'>
        <Layout.PanelTop mt={2} flex align='center'>
          <Text.H4 ml={.4} mt={.1}>Small Left</Text.H4>
        </Layout.PanelTop>
        <Layout.Div lightBorder padded halfRounded>
          <Text.Icon name='photo' ml={2}/>
          <Text.Icon name='photo' ml={1} emotion={colorKeys.cool}/>
          <Text.Icon size={1.2} name='photo' ml={1} emotion={colorKeys.excited}/>
          <TextOverLineSubtitle
            text={'Cool Title'}
          />

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

function PulsarView(){
  const [pulseEnabled, setPulseEnabled] = useState(true);
  return(
    <Layout.Div
      pulse={pulseEnabled}
      pulseColor={'red'}
      mt={1}
      width='150px'
      lightBorder
      padded
      rounded
    >
      <Text.P
        mt={1.5}
        mb={1.5}
        center
        onClick={_ => setPulseEnabled(!pulseEnabled)}
        hoverPoint>
        Toggle
      </Text.P>
    </Layout.Div>
  )
}

function IntroPanel(){

  const steps = [
    { name: 'Namespace', done: true },
    { name: 'Permissions' },
    { name: 'Load Wiz' },
    { name: 'Telemetry' },
    { name: 'Preflight' },
    { name: 'Installer' },
  ];

  return(
    <Layout.Div hipster>
      <Layout.PanelTop mt={2}>
        <Layout.Div flex align='center'>
          <Text.Icon name='laptop'/>
          <Text.H3 ml={.4} mt={.05}>Simple Panel</Text.H3>
        </Layout.Div>
        <Layout.Div width='100%' mt={2.0} ml={0}>
          <Stepper steps={steps} onStepIndex={2}/>
        </Layout.Div>
      </Layout.PanelTop>
      <Layout.Div lightBorder padded halfRounded>
        <Layout.Div flex>
          <Layout.Div>
            <Text.P mt={1}>Standard text</Text.P>
            <Text.P calm mt={1}>{someLorem}</Text.P>
          </Layout.Div>
          <PulsarView/>
        </Layout.Div>
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
        <Input.FlatInput mt={2.5} placeholder='Text input with length auto'/>
        <Input.FlatTextArea mt={2.5} placeholder='Text input with length auto'/>
        <ErrorToast
          errors={[
            'This is an error that happened in the form.',
            'This is another, because we are prone to error.'
          ]} />
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
