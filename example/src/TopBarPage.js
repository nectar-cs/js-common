import React from "react";
import {ThemeProvider} from "styled-components";
import {Layout,
  AppLayout,
  TopBar,
  noSideBarTheme,
  CategoriesBar,
  StoreCategoriesListing
}
  from "nectar-gui";

export default function TopBarPage() {
  return(
    <ThemeProvider theme={noSideBarTheme}>
      <AppLayout
        TopBar={MyTopBar}>
        <Layout.PageWithoutHeader>
          <Layout.Div
            style={{position: 'fixed'}}>
            <CategoriesBar items={categoryItems}/>
          </Layout.Div>
          <Layout.Div absolute left={'250px'} top={2} right={0} bottom={0}>
            <Layout.Div hipster maxWidth={'1200px'}>
              <StoreCategoriesListing
                categories={data}
              />
            </Layout.Div>
          </Layout.Div>
        </Layout.PageWithoutHeader>
      </AppLayout>
    </ThemeProvider>
  )
}

function MyTopBar(){
  return(
    <TopBar title={'Demo Page'} subtitle={'Nectar GUI'}/>
  )
}

const dummyInfo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco
laboris nisi ut aliquip ex ea commodo consequat.`;

const dummyInfoShort = `Rip through the cloud with SQL Injection vectors.`;

const data = [
  {
    category: 'DevOps Tooling',
    apps: [
      {
        name: 'MongoDb Enterprise',
        logoUrl: 'https://img.icons8.com/color/452/nginx.png',
        oneLiner: dummyInfoShort,
        info: dummyInfo,
        activePromo: true
      },
      {
        name: 'MongoDb Enterprise',
        logoUrl: 'https://img.icons8.com/color/452/nginx.png',
        oneLiner: dummyInfoShort,
        info: dummyInfo,
        activePromo: false
      }

    ]
  }
]

const categoryItems = [
  {icon: 'laptop', name: "Latest"},
  {icon: 'laptop', name: "Artificial Intelligence"},
  {icon: 'done_all', name: "BI & Analytics"},
  {icon: 'delete', name: "Artificial Intelligence"},
  {icon: 'computer', name: "BI & Analytics"},
  {icon: 'laptop', name: "Artificial Intelligence"},
  {icon: 'done_all', name: "BI & Analytics"},
  {icon: 'delete', name: "Artificial Intelligence"},
  {icon: 'computer', name: "BI & Analytics"},
];
