import React from "react";
import { MenuView, ConcernDetailView, Layout, PanelRenderer } from "nectar-gui"

import spec  from  './spec'
import {BrowserRouter, Route} from 'react-router-dom'
import {Switch} from "react-router";

const BlockGrid = PanelRenderer.BlockGrid;


export default function ConcernsShowcasePage(){
  const prefix = `/pseudo-show/concerns`;
  return(
    <Layout.Div
      relative
    >
      <MenuView
        seekIndex={4}
        prefix='/pseudo-show'
        routes={fakeRoutes}
        width='124px'
      />

      <Layout.Div
        absolute
        right='0px'
        top='30px'
        bottom={0}
        left='208px'
      >
        <Switch>
          <Route path={`${prefix}/detail/:id`} component={DetailView}/>
          <Route path={`${prefix}/`} component={IndexView}/>
        </Switch>
      </Layout.Div>
    </Layout.Div>
  )
}

function DetailView(){
  return(
    <ConcernDetailView
      panels={[
        spec.pagePanel1
      ]}
    />
  )
}

function IndexView(){
  return(
    <BlockGrid
      descs={[
        spec.websiteBlock,
        spec.websiteBlock2,
        // spec.websiteBlock2
        spec.wideBlock,
        spec.websiteBlock2,
      ]}
    />
  )
}

const actualRoutes = [
  {
    path: '/',
    isDefault: true
  }
];

const fakeRoutes = [
  {
    path: '/',
    name: "Highlighted",
    isDefault: true
  },
  {
    path: '/foo',
    name: "Storage",
  },
  {
    path: '/bar',
    name: "Endpoints",
  },
  {
    path: '/bar',
    name: "Memory",
  }
]
