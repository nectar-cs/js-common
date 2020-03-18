import React, {Fragment} from 'react'
import {
  Text,
  Layout,
  LeftHeader,
  CenterCard,
  CenterAnnouncement
} from 'nectar-cs-js-common'

export default function Basics() {
  return (
    <Fragment>
      <Layout.LeftPanel>
        <LeftHeader
          title='CenteredCard'
          subtitle='Demo'
          graphicName='insert_photo'
          graphicType='icon'
        />
        <CenterCard>
          <Text.P2 center top={10}>
            Centered Text
          </Text.P2>
        </CenterCard>
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
