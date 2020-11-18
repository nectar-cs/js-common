import React, {useEffect, useState} from "react";
import {Layout,
  AppLayout,
  ErrorToast,
  FlexHeader,
  Stepper,
  Button,
  Input,
  noTopBarTheme,
  TextOverLineSubtitle,
  SideBar,
  TopBar,
  Text,
  TagPool,
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
        </Layout.Div>
      </Layout.Div>

      <Layout.Div width='30px'/>

      <Layout.Div width='100%'>
        <Layout.PanelTop mt={2} flex align='center'>
          <Text.H4 ml={.4} mt={.1}>Small Right</Text.H4>
        </Layout.PanelTop>
        <Layout.Div lightBorder padded halfRounded>
          <TagPool
            callback={() => null}
            optionsHash={{
              a: 'Tag Aye',
              b: 'Tag Bee',
              x: 'Tag One',
              y: "Tag Two",
              z: "Tag Three"
            }}
            defaultsArray={['a', 'b', 'x', 'y', 'z']}
          />
        </Layout.Div>
      </Layout.Div>
    </Layout.Div>
  )
}

function PulsarView(){
  const [pulseEnabled, setPulseEnabled] = useState(false);
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
        Click me!
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
      <Layout.PanelBot>
        <Layout.Div flex>
          <Layout.Div>
            <Text.P mt={1}>Standard text</Text.P>
            <Text.P calm mt={1}>{someLorem}</Text.P>
          </Layout.Div>
          <PulsarView/>
        </Layout.Div>
        <Layout.Separator mt={2.5} mb={2.5}/>
        <Layout.Div flex>
          <Text.StatusTag>Status Tag</Text.StatusTag>
          <Text.StatusTag blink ml={1} emotion='cool'>Blinker</Text.StatusTag>
          <Text.BorderedStatusTag ml={1}>Bordered</Text.BorderedStatusTag>
        </Layout.Div>
        <Layout.Div mt={1.2} flex align='center'>
          <Button.Button>Normal Btn</Button.Button>
          <Button.Button ml={1} bkgEmotion='cool'>Normal Btn</Button.Button>
          <Button.ClearButton ml={1}>
            <Layout.Div flex align='center'>
              <Text.Icon name='laptop' size={.7} mr={.5} calm/>
              Clear
            </Layout.Div>
          </Button.ClearButton>
          <Button.ClearButton ml={1} borderEmotion='nectar' emotion='nectar'>
            Clear
          </Button.ClearButton>
          <Button.ClearButton ml={1} disabled>
            Clear Disabled
          </Button.ClearButton>
        </Layout.Div>
      </Layout.PanelBot>
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
        <TextOverLineSubtitle text={'Text Over Line'} fontSize='14px' mt={.12} />
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
    <FlexHeader
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
