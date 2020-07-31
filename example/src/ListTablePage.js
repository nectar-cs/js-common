import React from "react";
import {
  Layout,
  LeftHeader,
  AppLayout,
  SideBar,
  Text,
  Table,
  TopBar,
  noTopBarTheme,
  TableWithFilter
} from 'nectar-gui'
import {ThemeProvider} from "styled-components";

const faker = require('faker');
const data = genData();

export default function ListTablePage(){
  return(
    <ThemeProvider theme={noTopBarTheme}>
      <AppLayout
        SideBar={MySideBar}
        TopBar={TopBar}>
        <Layout.PageWithHeader Header={PageHeader}>
          <TableWithFilter
            data={data}
            ItemRow={DummyRow}
            ItemHeader={DummyHeader}
          />
        </Layout.PageWithHeader>
      </AppLayout>
    </ThemeProvider>
  )
}

function genData() {
  return [...Array(40).keys()].map(i => ({
    name: faker.name.findName(),
    email: faker.internet.email(),
    status: faker.hacker.noun()
  }));
}

function DummyHeader(){
  return(
    <tr>
      <th><Text.P>Full Name</Text.P></th>
      <th><Text.P>Email</Text.P></th>
      <th><Text.P>Status</Text.P></th>
      <th><Text.P>Email</Text.P></th>
    </tr>
  )
}

function DummyRow({item}){
  const {name, lastName, status, email} = item;
  return(
    <tr>
      <td><Text.P>{name}</Text.P></td>
      <td><Text.P>{email}</Text.P></td>
      <td><Text.StatusTag
        vertSwell={.5}>
        {status}
      </Text.StatusTag></td>
      <td><Text.P>{}</Text.P></td>
    </tr>
  )
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
