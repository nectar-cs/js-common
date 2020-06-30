import React, {Fragment} from 'react'
import {
  inverseTheme,
  Text,
  Layout,
  LeftHeader,
  AppLayout,
  SideBar,
  colorKeys,
  TopBar,
  noTopBarTheme
} from 'nectar-gui'
import {ThemeProvider} from 'styled-components'

function IDK(){
  const emotion = colorKeys.contentBackgroundColor;
  const main = { relative: true, padded: true, emotion };

  return(
    <Fragment>
      <Layout.Div {...main}>
        <Text.P>Normal Div</Text.P>
        <Layout.Div wrapped emotion={colorKeys.disabled} mt={1}>
          <Text.P>Long element driving length in a </Text.P>
          <Text.P>Wrapped div</Text.P>
        </Layout.Div>

        <Layout.CenteringDiv>
          <Layout.Div emotion={colorKeys.cool} mt={1} funky>
            <Text.P>Elements with a centered</Text.P>
            <Text.P>parent div</Text.P>
          </Layout.Div>
        </Layout.CenteringDiv>
      </Layout.Div>

      <Layout.Div {...main}>
        <Text.P mb={3}>Center Something</Text.P>
        <Layout.Div center>
          <Layout.CenteringDivY emotion={colorKeys.warning}>
            <Text.P centered>Long top text</Text.P>
            <Text.P centered>Short</Text.P>
          </Layout.CenteringDivY>
        </Layout.Div>
      </Layout.Div >

      <Layout.Div padded rounded mt={2} height='70px' sexyShadow relative>
        <Text.P absolute left={12} top={12}>Top Left</Text.P>
        <Text.P absolute right={12} top={12}>Top Right</Text.P>
        <Text.P absolute right={12} bottom={12}>Bottom Right</Text.P>
        <Text.P absolute left={12} bottom={12}>Bottom Left</Text.P>
      </Layout.Div>
    </Fragment>
  )
}

export default function LayoutExpo() {
  return (
    <ThemeProvider theme={noTopBarTheme}>
      <AppLayout
        SideBar={MySideBar}
        TopBar={TopBar}>
        <Layout.PageWithHeader Header={PageHeader}>
          <Layout.Div height={'100%'} width={'100%'} emotion={'nectar'}>asdsad</Layout.Div>
        </Layout.PageWithHeader>
      </AppLayout>
    </ThemeProvider>
  );
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
