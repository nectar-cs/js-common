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
