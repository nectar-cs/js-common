import React from "react";
import {
  Layout,
  LeftHeader,
  AppLayout,
  SideBar,
  Text,
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
            headerData={headerData}
            filterData={filterData}
          />
        </Layout.PageWithHeader>
      </AppLayout>
    </ThemeProvider>
  )
}

function randEl(array){
  return array[Math.floor((Math.random()*array.length))];
}

function genData() {
  return [...Array(40).keys()].map(_ => ({
    name: faker.name.findName(),
    email: faker.internet.email(),
    status: randEl(Object.values(statuses()))
  }));
}

const filterData = [
  { type: 'string', name: "Full Name" },
  { type: 'tags', name: 'Status', data: statuses() },
]

function statuses(){
  return {
    positive: 'Positive',
    negative: 'Negative',
    neutral: 'Neutral',
    pending: 'Pending'
  }
}

const headerData = [
  { name: 'Full Name' },
  { name: 'Email' },
  { name: 'Status' },
  { name: 'Address' }
]

function DummyRow({item}){
  const {name, status, email} = item;
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
