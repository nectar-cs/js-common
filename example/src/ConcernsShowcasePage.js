import React from "react";
import { MenuView, Layout, PanelRenderer } from "nectar-gui"

import spec  from  './spec'

const BlockGrid = PanelRenderer.BlockGrid;


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
        <BlockGrid
          descs={[
            spec.websiteBlock,
            spec.websiteBlock2
            // spec.wideBlock
          ]}
        />
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
