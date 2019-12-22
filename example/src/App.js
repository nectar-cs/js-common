import React, { Component } from 'react'

import {AddNew, Layout, LeftHeader, MosaicBaseStyle} from '@nectar/js-common'
import {Button, theme, Text} from '@nectar/js-common'
import {ThemeProvider} from 'styled-components'

export default class App extends Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <MosaicBaseStyle/>
        <Layout.LeftPanel>
          <LeftHeader graphicName={''} title='Left Header' subtitle='@nectar/mosaic'/>
          <Text.P2 top={3}>Text.P2</Text.P2>
          <Layout.BigCodeViewer>
            <Text.Code>
              hello world
            </Text.Code>
          </Layout.BigCodeViewer>
          <Text.StatusTag top={3}>Status Tag</Text.StatusTag>
          <Button.ConfirmButton>Confirm Button</Button.ConfirmButton>
          <Button.ConfirmButton>asdasd</Button.ConfirmButton>
          <AddNew action={null}/>
        </Layout.LeftPanel>
      </ThemeProvider>
    )
  }
}
