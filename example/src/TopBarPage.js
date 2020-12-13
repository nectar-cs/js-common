import React from "react";
import {ThemeProvider} from "styled-components";
import {Layout,
  AppLayout,
  ErrorToast,
  FlexHeader,
  Stepper,
  Button,
  Input,
  theme,
  TextOverLineSubtitle,
  SideBar,
  TopBar,
  noSideBarTheme,
  SmallStoreCard,
  CategoriesBar,
  Text,
  TagPool,
  colorKeys,
  BigStoreCard
}
  from "nectar-gui";

export default function TopBarPage() {
  return(
    <ThemeProvider theme={noSideBarTheme}>
      <AppLayout
        SideBar={null}
        TopBar={MyTopBar}>
        <Layout.PageWithoutHeader>
          <Layout.Div
            style={{position: 'fixed'}}>
            <CategoriesBar items={[
              {icon: 'laptop', name: "Latest"},
              {icon: 'laptop', name: "Artificial Intelligence"},
              {icon: 'done_all', name: "BI & Analytics"},
              {icon: 'delete', name: "Artificial Intelligence"},
              {icon: 'computer', name: "BI & Analytics"},
              {icon: 'laptop', name: "Artificial Intelligence"},
              {icon: 'done_all', name: "BI & Analytics"},
              {icon: 'delete', name: "Artificial Intelligence"},
              {icon: 'computer', name: "BI & Analytics"},
            ]}/>
          </Layout.Div>
          <Layout.Div absolute left={'250px'} top={2} right={0} bottom={0}>
            <Layout.Div hipster maxWidth={'1200px'}>
              <Text.H1 fontSize={'26px'} mt={1.1} mb={2} emotion='primaryBkg'>
                Latest Deals
              </Text.H1>
              <Layout.Div>
                <BigStoreCard
                  bkgEmotion={'#252a34'}
                  logo={'https://img.icons8.com/color/452/nginx.png'}
                  title={'MongoDB Enterprise'}
                  info={dummyInfo}
                  big={true}
                  dark={true}
                />
                <BigStoreCard
                  bkgEmotion={'white'}
                  logo={'https://img.icons8.com/color/452/nginx.png'}
                  title={'MongoDB Enterprise'}
                  info={dummyInfoShort}
                  big={false}
                  dark={false}
                />
                <BigStoreCard
                  bkgEmotion={'white'}
                  logo={'https://img.icons8.com/color/452/nginx.png'}
                  title={'MongoDB Enterprise'}
                  info={dummyInfoShort}
                  big={false}
                  dark={false}
                />
                <BigStoreCard
                  bkgEmotion={'white'}
                  logo={'https://img.icons8.com/color/452/nginx.png'}
                  title={'Nginx Enterprise'}
                  info={dummyInfoShort}
                  big={false}
                  dark={false}
                />
                <BigStoreCard
                  bkgEmotion={'#252a34'}
                  logo={'https://raw.githubusercontent.com/prometheus-net/grafana-dashboards/master/logo.png'}
                  title={'Prometheus Enterprise'}
                  info={dummyInfo}
                  big={true}
                  dark={true}
                />
                <BigStoreCard
                  bkgEmotion={'white'}
                  logo={'https://img.icons8.com/color/452/mongodb.png'}
                  title={'MongoDB Enterprise'}
                  info={dummyInfoShort}
                  big={false}
                  dark={false}
                />
                <BigStoreCard
                  bkgEmotion={'white'}
                  logo={'https://raw.githubusercontent.com/prometheus-net/grafana-dashboards/master/logo.png'}
                  title={'MongoDB Enterprise'}
                  info={dummyInfoShort}
                  big={false}
                  dark={false}
                />
                <BigStoreCard
                  bkgEmotion={'white'}
                  logo={'https://img.icons8.com/color/452/nginx.png'}
                  title={'MongoDB Enterprise'}
                  info={dummyInfoShort}
                  big={false}
                  dark={false}
                />


              </Layout.Div>
            </Layout.Div>
          </Layout.Div>
        </Layout.PageWithoutHeader>
      </AppLayout>
    </ThemeProvider>
  )
}

function MyTopBar(){
  return(
    <TopBar bkgEmotion={'yellow'}/>
  )
}

const dummyInfo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco
laboris nisi ut aliquip ex ea commodo consequat.`;

const dummyInfoShort = `Rip through the cloud with SQL Injection vectors.`;
