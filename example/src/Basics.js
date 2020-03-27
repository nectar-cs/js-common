import React, {Fragment} from 'react'
import {
  Text,
  Layout,
  LeftHeader,
  inverseTheme,
  colorKeys, Table,
} from 'nectar-cs-js-common'
import {ThemeProvider} from "styled-components";

function SimpleTextExpo(){
  return(
    <Layout.Div mt={3} mb={1}>
      <Text.H1 mb={0.5}>Header H1</Text.H1>
      <Text.P>Paragraph with primaryFont</Text.P>
      <Text.P calm mt={1}>Paragraph with secondaryFont</Text.P>

      <Text.H2 mt={1.5} mb={1}>Header H2</Text.H2>

      <Layout.Div padded rounded emotion={colorKeys.primaryColor}>
        <ThemeProvider theme={inverseTheme}>
          <Text.P mt={0}>Paragraph with primaryFont</Text.P>
          <Text.P calm mt={1}>Paragraph with secondaryFont</Text.P>
        </ThemeProvider>
      </Layout.Div>

      <Text.H3 mt={1.5} mb={1.0}>Header H3</Text.H3>
      <Text.StatusTag>Status Tag</Text.StatusTag>
      <Text.CleanStatus mt={1}>Clean Status</Text.CleanStatus>
      <Text.BoldStatus mt={1}>Bold Status</Text.BoldStatus>
      <Text.H4 mt={1.5}>Header H4</Text.H4>
    </Layout.Div>
  )
}

function TablesExpo(){
  return(
    <Layout.Div mt={2}>
      <Text.H1>Tables</Text.H1>
      <Table.Table mt={1}>
        <tr>
          <th><p>Column one</p></th>
          <th><p>Column two</p></th>
          <th><p>Column three</p></th>
          <th><p>Column four</p></th>
        </tr>
        <tr>
          <td><Text.P>Cell 1.1</Text.P></td>
          <td><p>Cell 1.2</p></td>
          <td><p>Cell 1.3</p></td>
          <td><p>Cell 1.4</p></td>
        </tr>
        <tr>
          <td><Text.P>Cell 2.1</Text.P></td>
          <td><Text.StatusTag>Tag 2.2</Text.StatusTag></td>
          <td><Text.CleanStatus>Clean 2.3</Text.CleanStatus></td>
          <td><Text.BoldStatus>Bold 2.4</Text.BoldStatus></td>
        </tr>
        <tr>
          <td>
            <input type='checkbox'/>
          </td>
          <td>
            <Layout.Div flex align='center'>
              <Text.P>Cell</Text.P>
              <Text.StatusTag ml={1}>3.1</Text.StatusTag>
            </Layout.Div>
          </td>
          <td><Text.CleanStatus>Clean 2.3</Text.CleanStatus></td>
          <td><Text.BoldStatus>Bold 2.4</Text.BoldStatus></td>
        </tr>
      </Table.Table>
    </Layout.Div>
  )
}

function FormsExpo(){
  return(
    <Layout.Div mt={1}>

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
        <TablesExpo/>
      </Layout.LeftPanel>
      <Layout.RightPanel>
        <LeftHeader
          title='Inputs and Buttons Expo'
          subtitle='This side is for Forms and such'
          graphicType='image'
          graphicName='https://robohash.org/estmodiofficia.png?size=300x300&set=set1'
        />

      </Layout.RightPanel>
    </Fragment>
  )
}
