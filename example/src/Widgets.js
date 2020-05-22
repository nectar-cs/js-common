import React, {Fragment} from 'react'
import {
  Text,
  Layout,
  LeftHeader,
  colorKeys,
  FlexHeader,
  Pill,
  Battery
} from 'nectar-gui'

function PillsExpo(){
  return(
    <Layout.Div mt={1}>
      <Text.H2 mb={1}>Pills</Text.H2>
      <Layout.Div sexyShadow padded>
        <Pill
          text='PillOne'
          letters={{e: colorKeys.cool, r: colorKeys.primaryColor}}
        />
        <Text.P mb={1}>After</Text.P>

        <Layout.Div flex align='center'>
          <Pill
            text='PillOne'
            letters={{e: colorKeys.warning}}
            emotion={colorKeys.primaryColor}
          />
          <Text.P ml={1}>After</Text.P>
        </Layout.Div>

        <Layout.Div flex mt={1}>
          <Layout.Div>
            <Pill text='PillOne' letters={null}/>
          </Layout.Div>
          <Layout.Div ml={2}>
            <Pill text='PillOne' letters={null}/>
          </Layout.Div>
        </Layout.Div>
      </Layout.Div>
    </Layout.Div>
  )
}

function BatteriesExpo(){
  return(
    <Layout.Div mt={3}>
      <Text.H2>Batteries</Text.H2>
      <Layout.Div sexyShadow padded mt={.8}>
        <Layout.Div flex align='flex-end'>
          <Battery size={1}  fraction={1}/>
          <Layout.Div width='12px'/>

          <Battery size={1.2} fraction={.8}/>
          <Layout.Div width='12px' />

          <Battery size={2} fraction={.6}/>
          <Layout.Div width='12px' />

          <Battery size={4} fraction={.4}/>
          <Layout.Div width='12px' />

          <Battery size={5} fraction={.2}/>
        </Layout.Div>
      </Layout.Div>
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
        <BatteriesExpo/>
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
