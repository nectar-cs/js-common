import React from "react";
import {
  Layout,
  LeftHeader,
  AppLayout,
  SideBar,
  Text,
  Table,
  TopBar,
  noTopBarTheme

} from 'nectar-gui'
import {ThemeProvider} from "styled-components";

export default function ListTablePage(){

  return(
    <ThemeProvider theme={noTopBarTheme}>
      <AppLayout
        SideBar={MySideBar}
        TopBar={TopBar}>
        <Layout.PageWithHeader Header={PageHeader}>
          <FilterBox/>
          <MainTable/>
        </Layout.PageWithHeader>
      </AppLayout>
    </ThemeProvider>
  )
}

function FilterBox(){
  return(
    <Layout.TableFilterBox>
      <Layout.PanelTop sofa>
        <Text.P>Table Filter Box</Text.P>
      </Layout.PanelTop>
      <Layout.Div halfRounded height={'400px'} padded sofa lightBorder>
        <p>yo</p>
      </Layout.Div>
    </Layout.TableFilterBox>
  )
}

function MainTable(){
  return(
    <Layout.Div width={'calc(100% - 330px)'} ml={2}>
      <Layout.PanelTop>
        <Text.H3>Main List Table</Text.H3>
      </Layout.PanelTop>
      <Layout.Div halfRounded height={'1400px'} padded sofa lightBorder>
        <Table.Table>
        </Table.Table>
      </Layout.Div>
    </Layout.Div>
  )
}

function TableRow({}){

}

function PageHeader(){
  return(
    <LeftHeader
      graphicName='list'
      graphicType='icon'
      title='List Table and Filter'
      subtitle='See leftHipster in layout-styles.js'
    />
  )
}

function MySideBar(){
  return(
    <SideBar
      title='Fixed Height'
      subtitle='Nectar GUI Demo'
    />
  )
}
