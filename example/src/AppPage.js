import React from "react";
import {Layout, AppLayout, noTopBarTheme, SideBar, TopBar, Text} from "nectar-gui";
import {ThemeProvider} from "styled-components";

export default function AppPage(){
  return(
    <ThemeProvider theme={noTopBarTheme}>
    <AppLayout
      sideBar={<MySideBar/>}
      topBar={<TopBar/>}>
      <Layout.Page>
        <Text.P>Tp</Text.P>
      </Layout.Page>
    </AppLayout>
    </ThemeProvider>
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
