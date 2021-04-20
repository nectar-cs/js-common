import React from "react";
import { Layout, PanelRenderer } from "nectar-gui"

import spec  from  './spec'

const BlockRenderer = PanelRenderer.BlockRenderer;


export default function ConcernsShowcasePage(){
  return(
    <Layout.Div mt={3} flex>
      <BlockRenderer desc={spec.websiteBlock}/>
      <Layout.Div width='50px'/>
      <BlockRenderer desc={spec.websiteBlock}/>
    </Layout.Div>
  )
}
