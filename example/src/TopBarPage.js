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
        <Layout.Page>
          {/*<Layout.Div*/}
          {/*  mt={2}*/}
          {/*  style={{position: 'fixed'}}>*/}
          {/*  <CategoriesBar items={categoryItems}/>*/}
          {/*</Layout.Div>*/}
          <Layout.Div absolute left={'250px'} top={2} right={0} bottom={0}>
            <Layout.Div hipster maxWidth={'1200px'}>
              <StoreCategoriesListing
                mkPath={_ => `/top-bar-two`}
                categories={data}
              />
            </Layout.Div>
          </Layout.Div>
        </Layout.Page>
      </AppLayout>
    </ThemeProvider>
  )
}

function MyTopBar(){
  return(
    <TopBar
      title='Demo Page'
      subtitle='Nectar GUI'
      rightSideButtons={rightSideButtons}
    />
  )
}

const rightSideButtons = [
  {
    name: "Kadabra",
    layout: 'big',
    cols: 3,
    actions: [
      {
        name: "Applications",
        icon: 'apps',
        subtitle: "Your KAMA-backed published applications"
      },
      {
        name: "Installs",
        icon: 'insights',
        subtitle: "Telemetry for all installed applications"
      },
      {
        name: "Events",
        icon: 'event_note',
        subtitle: "Telemetry for all installed applications"
      },
      {
        name: "Errors",
        icon: 'bug_report',
        subtitle: "Telemetry for all installed applications"
      }
    ]
  }
]

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
        // activePromo: true,
        price: "+$1,300 - month",
        isPublic: true
      },
      {
        name: 'MongoDb Enterprise',
        logoUrl: 'https://img.icons8.com/color/452/nginx.png',
        oneLiner: dummyInfoShort,
        info: dummyInfo,
        price: "Bespoke pricing",
        isPublic: true
      },
      {
        name: 'MongoDb Enterprise',
        logoUrl: 'https://img.icons8.com/color/452/nginx.png',
        oneLiner: dummyInfoShort,
        info: dummyInfo,
        price: "+10,000 - Year",
        isPublic: true
      }
,
      {
        name: 'MongoDb Enterprise',
        logoUrl: 'https://img.icons8.com/color/452/nginx.png',
        oneLiner: dummyInfoShort,
        info: dummyInfo,
        price: "+10,000 - Year",
        isPublic: true
      }
      ,

      {
        name: 'MongoDb Enterprise',
        logoUrl: 'https://img.icons8.com/color/452/nginx.png',
        oneLiner: dummyInfoShort,
        info: dummyInfo,
        price: "Free forever",
        isPublic: false
      },
      {
        name: 'MongoDb Enterprise',
        logoUrl: 'https://img.icons8.com/color/452/nginx.png',
        oneLiner: dummyInfoShort,
        info: dummyInfo,
        price: "Bespoke pricing",
        isPublic: true
      },
      {
        name: 'MongoDb Enterprise',
        logoUrl: 'https://img.icons8.com/color/452/nginx.png',
        oneLiner: dummyInfoShort,
        info: dummyInfo,
        price: "+10,000 - Year",
        isPublic: true
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
