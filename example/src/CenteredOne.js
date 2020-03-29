import React, {Fragment} from 'react'
import {
  inverseTheme,
  Text,
  Layout,
  LeftHeader,
  CenterCard,
  CenterAnnouncement, colorKeys
} from 'nectar-gui'

function LayoutExpo(){
  return(
    <Layout.Div relative padded emotion={colorKeys.contentBackgroundColor}>
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
