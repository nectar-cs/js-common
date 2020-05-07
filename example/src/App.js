import React, { Component } from 'react'

import { MosaicBaseStyle, theme } from 'nectar-gui'
import {ThemeProvider} from 'styled-components'
import {BrowserRouter, Route} from 'react-router-dom'
import {Switch} from "react-router";
import TextAndInputsExpo from './TextAndInputsExpo'
import CenteredOne from './LayoutExpo'
import Widgets from './Widgets'

export default class App extends Component {

  render () {
    const GCP_BASE = 'https://storage.googleapis.com/';
    const IMG_BASE = GCP_BASE + 'nectar-mosaic-public/images';
    const nectar = `${IMG_BASE}/nectar_mark_light.png`;

    return (
      <ThemeProvider theme={theme}>
        <MosaicBaseStyle/>
        <BrowserRouter>
          <Switch>
            <Route exact path='/layout' component={CenteredOne}/>
            <Route exact path='/basics' component={TextAndInputsExpo}/>
            <Route exact path='/widgets' component={Widgets}/>
            <Route path='/' component={TextAndInputsExpo}/>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    )
  }
}
