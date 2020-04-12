import React, {Fragment} from 'react'
import {
  Text,
  Layout,
  LeftHeader,
  colorKeys,
  FlexHeader,
  Pill
} from 'nectar-gui'

function PillsExpo(){
  return(
    <Layout.Div mt={1}>
      <Text.H3 mb={1}>Pills</Text.H3>
      <Pill text='PillOne' letters={[{c: 'C', e: 'cool'}, {c:  'R', e: 'primaryColor'}]}/>
      <Pill
        text='PillOne'
        letters={[{c: 'C', e: 'cool'}]}
        emotion={colorKeys.primaryColor}
      />
      <Pill text='PillOne' letters={null}/>
    </Layout.Div>
  )
}

export default function Widgets(){
  return(
    <Layout.Div>
      <Layout.LeftPanel>
        <LeftHeader
          graphicName='insert_photo'
          title='Widgets Expo'
          subtitle='Subtitle'
          graphicType='icon'
        />
        <PillsExpo/>
      </Layout.LeftPanel>
      <Layout.RightPanel>
        <FlexHeader
          graphicType='image'
          graphicName='https://robohash.org/estmodiofficia.png?size=300x300&set=set1'>
          <Fragment>
            <Text.H1>Inputs and </Text.H1>
            <Text.Icon name='laptop' size={1} ml={.4} mt={-.1}/>
          </Fragment>
          <Fragment>
            <Text.P>Also demoing</Text.P>
            <Text.StatusTag
              vertSwell={.1}
              ml={.8}
              emotion={colorKeys.cool}>
              Swag
            </Text.StatusTag>

          </Fragment>
        </FlexHeader>
      </Layout.RightPanel>
    </Layout.Div>
  )
}
