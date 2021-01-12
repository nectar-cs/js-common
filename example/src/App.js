import React, { Component } from 'react'
import { MosaicBaseStyle, theme } from 'nectar-gui'
import {ThemeProvider} from 'styled-components'
import {BrowserRouter, Route} from 'react-router-dom'
import {Switch} from "react-router";
import TextAndInputsExpo from './TextAndInputsExpo'
import LayoutExpo from './LayoutExpo'
import AppPage from "./AppPage";
import ListTablePage from "./ListTablePage";
import TopBarPage from "./TopBarPage";
import TopBarPageTwo from "./TopBarPageTwo";
import PridePage from "./PridePage";
import GlancesPage from "./GlancesPage";

export default class App extends Component {

  render () {
    return (
      <ThemeProvider theme={theme}>
        <MosaicBaseStyle/>
        <BrowserRouter>
          <Switch>
            <Route path='/page' component={AppPage}/>
            <Route path='/glances' component={GlancesPage}/>
            <Route path='/top-bar' component={TopBarPage}/>
            <Route path='/top-bar-two' component={TopBarPageTwo}/>
            <Route path='/list-table' component={ListTablePage}/>
            <Route path='/layout' component={LayoutExpo}/>
            <Route path='/basics' component={TextAndInputsExpo}/>
            <Route path='/pride' component={PridePage}/>
            <Route exact path='/' component={PridePage}/>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    )
  }
}
