import React, {Fragment} from 'react'
import {
  Text,
  Layout,
  colorKeys,
  LeftHeader
} from 'nectar-cs-js-common'

function SimpleTextExpo(){

  return(
    <Layout.Div tm={3}>
      <Text.P emotion={colorKeys.primaryColor} >Text without</Text.P>
    </Layout.Div>
  )
}

export default function Basics(){
  return(
    <Fragment>
      <Layout.LeftPanel>
        <LeftHeader
          graphicName='insert_photo'
          title='Text and Colors Expo'
          subtitle='Subtitle'
          graphicType='icon'
        />
        <SimpleTextExpo/>
      </Layout.LeftPanel>
      <Layout.RightPanel>
        <LeftHeader
          title='Left with image'
          subtitle='This side is for Forms and such'
          graphicType='image'
          graphicName='https://robohash.org/estmodiofficia.png?size=300x300&set=set1'
        />
      </Layout.RightPanel>
    </Fragment>
  )
}
