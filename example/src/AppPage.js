import React, {Fragment, useState} from "react";
import {Layout,
  AppLayout,
  ErrorToast,
  Stepper,
  Button,
  Input,
  slickBarTheme,
  TextOverLineSubtitle,
  TopBarViews,
  SlickBar,
  Text,
  TagPool,
  colorKeys,
  NectarGuiUtils
}
  from "nectar-gui";
import {ThemeProvider} from "styled-components";
import {someLorem} from "./copy";

export default function AppPage(){
  return(
    <ThemeProvider theme={slickBarTheme}>
      <AppLayout
        SideBar={CustomSlickBar}>
        <Layout.PageWithoutHeader>
          <IntroPanel/>
          <TwoPanels/>
          <FormsPanel/>
        </Layout.PageWithoutHeader>
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
          <Text.Icon
            name='photo'
            ml={1}
            emotion={colorKeys.cool}
            hov_kgEmotion={'black'}
          />
          <Text.Icon
            size={1.2}
            name='photo'
            ml={1}
            emotion={colorKeys.excited}
            hov_emotion={'cool'}
            hov_point
          />
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
        hov_point>
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

function CustomSlickBar(){
  return(
    <SlickBar.SlickBar>
      <Layout.Div width='100%'>
        <SlickBar.ImgItem
          spaced={false}
          isSelected={true}
          src={NectarGuiUtils.image('nectar-tomato.png')}
          SubmenuView={CustomSubMenu}
        />
        <SlickBar.ImgItem
          SubmenuView={CustomSubMenu}
          src='https://img.icons8.com/color/452/nginx.png'
          />
      </Layout.Div>
      <Layout.Div width='100%'>
        <SlickBar.ImgItem
          low={true}
          SubmenuView={CustomSubMenuTwo}
          src={NectarGuiUtils.image('nectar-tomato.png')}
        />
        <SlickBar.ImgItem
          low={true}
          SubmenuView={CustomSubMenuTwo}
          src='https://img.icons8.com/color/452/nginx.png'
        />
      </Layout.Div>

    </SlickBar.SlickBar>
  )
}

function CustomSubMenu(){
  return(
    <Fragment>
      <TopBarViews.ImgAndLink
        src='https://img.icons8.com/color/452/nginx.png'
        title={"Enter the Matrix"}
        text={"If you dare"}
      />
      <TopBarViews.ClickableRow
        icon='open_in_new'
        text='Go to settings'
        path={'/'}
      />
    </Fragment>
  )
}

function CustomSubMenuTwo(){
  return(
    <Layout.Div height='400px'>
      <TopBarViews.ImgAndLink
        src='https://assets.stickpng.com/images/58480a44cef1014c0b5e4917.png'
        title={"Kubernetes Context"}
        text={"If you dare"}
      />
      <TopBarViews.ClickableRow
        icon='open_in_new'
        text='Go to settings'
        path={'/'}
      />
    </Layout.Div>
  )
}
