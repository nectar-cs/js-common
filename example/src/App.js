import React, { Component } from 'react'

import {
  AddNew,
  CenterAnnouncement, CenterCard,
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
    return (
      <ThemeProvider theme={theme}>
        <MosaicBaseStyle/>
        <Layout.LeftPanel>
          <LeftHeader graphicName={''} title='Left Header' subtitle='Subtitle'/>
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
