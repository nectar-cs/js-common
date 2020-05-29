import React, {Fragment} from 'react'
import {
  Text,
  Layout,
  Gauge,
  LeftHeader,
  colorKeys,
  FlexHeader,
  Pill,
  Donut,
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
            text='Dark Pill'
            letters={{e: colorKeys.warning}}
            emotion={colorKeys.primaryColor}
          />
          <Text.P ml={1}>After</Text.P>
        </Layout.Div>

        <Layout.Div flex mt={1}>
          <Layout.Div>
            <Pill text='Dark' letters={null}/>
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
          <Battery size={1}  pct={100}/>
          <Layout.Div width='12px'/>

          <Battery size={1.2} pct='80'/>
          <Layout.Div width='12px' />

          <Battery size={2} pct='60'/>
          <Layout.Div width='12px' />

          <Battery size={4} pct='40'/>
          <Layout.Div width='12px' />

          <Battery size={5} pct='20'/>
          <Layout.Div width='12px' />

          <Battery height='70' pct='100'/>
          <Layout.Div width='12px' />
          <Battery height='70' pct='0'/>

        </Layout.Div>
      </Layout.Div>
    </Layout.Div>
  )
}

function GaugesExpo(props){
  return(
    <Layout.Div mt={2} padded rounded sexyShadow>
      <Text.H2 mb={2}>Charts</Text.H2>
      <Layout.Div flex>
        <Gauge size={75} c2='cadetblue' frac={.8}/>
        <Gauge size={75} text='700mi' legend='CPU' ml={2} frac={.4}/>
        <Donut size={68} ml={2} frac={.75}/>
      </Layout.Div>
    </Layout.Div>
  )
}

export default function WidgetsDemo(){
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
        <GaugesExpo/>
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
