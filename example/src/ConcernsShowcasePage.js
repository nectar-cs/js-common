import React from "react";
import { MenuView, Layout, PanelRenderer } from "nectar-gui"

import spec  from  './spec'

const BlockRenderer = PanelRenderer.BlockRenderer;


export default function ConcernsShowcasePage(){
  return(
    <Layout.Div
      // mt={3}
      relative
    >
      <MenuView
        seekIndex={4}
        prefix='/pseudo-show'
        routes={fakeRoutes}
        width='134px'
      />

      <Layout.Div
        absolute
        right='0px'
        top='30px'
        bottom={0}
        left='230px'
      >
        <Layout.Div flex>
          <BlockRenderer desc={spec.websiteBlock}/>
          <Layout.Div width='30px'/>
          <BlockRenderer desc={spec.websiteBlock2}/>
        </Layout.Div>
        <Layout.Div height='30px'/>
        <BlockRenderer desc={spec.wideBlock}/>
      </Layout.Div>
    </Layout.Div>
  )
}


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
