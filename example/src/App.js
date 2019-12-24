import React, { Component } from 'react'

import {
  AddNew,
  CenterAnnouncement, CenterCard, Checklist,
  ColoredLabelList,
  EasyListItem,
  Layout,
  LeftHeader, Micon,
  MosaicBaseStyle,
  TextOverLineSubtitle
} from '@nectar/js-common'
import {Button, theme, Text} from '@nectar/js-common'
import {ThemeProvider} from 'styled-components'

export default class App extends Component {

  render () {

    const GCP_BASE = 'https://storage.googleapis.com/';
    const IMG_BASE = GCP_BASE + 'nectar-mosaic-public/images';
    const nectar = `${IMG_BASE}/nectar_mark_light.png`;

    return (
      <ThemeProvider theme={theme}>
        <MosaicBaseStyle/>
        <Layout.LeftPanel>
          <LeftHeader
            graphicName='insert_photo'
            title='Left Header'
            subtitle='Subtitle'
            graphicType='icon'
          />
          <TextOverLineSubtitle text={'Text Over Line Subtitle'}/>
          <Text.P2 top={3}>Text.P2</Text.P2>
          <Text.StatusTag top={3}>Text.StatusTag</Text.StatusTag>
          <Layout.Div top={1}>
            <ColoredLabelList labelType='blacklist' labels={['black', 'list']}/>
          </Layout.Div>
          <Layout.Div top={1}>
            <ColoredLabelList labelType='whitelist' labels={['white', 'list']}/>
          </Layout.Div>
          <Micon n={'list'}/>
          <EasyListItem title='EasyListItem' subtitle="subtitle" iconName='list'/>
          <Checklist items={[
            {name: "Status: Idle", detail: "", status: "idle"},
            {name: "Status: Working with long text and it works", detail: "", status: "working"},
            {name: "Status: Done", detail: "", status: "done"},
            {name: "Status: Failed", detail: "", status: "failed"}
          ]}/>
          <Layout.BigCodeViewer>
            <Text.Code>
              Layout.BigCodeViewer
            </Text.Code>
          </Layout.BigCodeViewer>
          <Button.ConfirmButton>Button.ConfirmButton</Button.ConfirmButton>
        </Layout.LeftPanel>
        <Layout.RightPanel>
          <CenterAnnouncement iconName='list'/>
          <CenterCard/>
          <AddNew action={null}/>
        </Layout.RightPanel>
      </ThemeProvider>
    )
  }
}
