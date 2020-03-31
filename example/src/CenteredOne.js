import React, {Fragment} from 'react'
import {
  inverseTheme,
  Text,
  Layout,
  LeftHeader,
  CenterCard,
  CenterAnnouncement, colorKeys, Loader, CenterLoader
} from 'nectar-gui'
import {ThemeProvider} from 'styled-components'

function LayoutExpo(){
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
          <Layout.Div emotion={colorKeys.cool} mt={1}>
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

      <Layout.Div padded rounded mt={2} height={'120px'} emotion={colorKeys.primaryColor}>
        <ThemeProvider theme={inverseTheme}>
          <CenterLoader>
            <Text.P>Modular!</Text.P>
            <Text.P>Another example of long</Text.P>
          </CenterLoader>
        </ThemeProvider>
      </Layout.Div>
    </Fragment>
  )
}

export default function Basics() {
  return (
    <Fragment>
      <Layout.LeftPanel>
        <LeftHeader
          title='Layout Expo'
          subtitle='Demo'
          graphicName='insert_photo'
          graphicType='icon'
        />
        <LayoutExpo/>
      </Layout.LeftPanel>
      <Layout.RightPanel>
        <LeftHeader
          title='CenteredAnnouncement'
          subtitle='Demo'
          graphicName='insert_photo'
          graphicType='icon'
        />
        <CenterCard>
          <CenterAnnouncement
            iconName='add'
            text="Workspaces help organize your apps. Create one."
            contentType="nav-link"
            action={'ROUTES.workspaces.new.path'}
          />
        </CenterCard>
      </Layout.RightPanel>
    </Fragment>
  );
}
