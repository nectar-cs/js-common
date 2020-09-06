import React, { Component } from 'react'
import { MosaicBaseStyle, theme } from 'nectar-gui'
import {ThemeProvider} from 'styled-components'
import {BrowserRouter, Route} from 'react-router-dom'
import {Switch} from "react-router";
import TextAndInputsExpo from './TextAndInputsExpo'
import LayoutExpo from './LayoutExpo'
import WidgetsDemo from './WidgetsDemo'
import AppPage from "./AppPage";
import ListTablePage from "./ListTablePage";

export default class App extends Component {

  render () {
    return (
      <ThemeProvider theme={theme}>
        <MosaicBaseStyle/>
        <BrowserRouter>
          <Switch>
            <Route path='/page' component={AppPage}/>
            <Route path='/list-table' component={ListTablePage}/>
            <Route path='/layout' component={LayoutExpo}/>
            <Route path='/basics' component={TextAndInputsExpo}/>
            <Route path='/widgets' component={WidgetsDemo}/>
            <Route exact path='/' component={AppPage}/>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    )
  }
}
