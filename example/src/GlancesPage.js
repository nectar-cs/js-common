import React from "react";
import {Layout,
  AppLayout,
  Text,
  Button,
  Img,
  BigHeader,
  GlanceView,
  slickBarTheme,
  TextOverLineSubtitle
}
  from "nectar-gui";
import {ThemeProvider} from "styled-components";
import CustomSlickBar from "./CustomSlickbar";
import timeSeriesData from "./timeSeriesData";
import binaryPieData from "./binaryPieData";

export default function GlancesPage(){
  return(
    <ThemeProvider theme={slickBarTheme}>
      <AppLayout
        SideBar={CustomSlickBar}>
        <Layout.PageWithoutHeader>
          <Layout.Div hipster mt={3}>
            <BigHeader
              graphicName='https://img.icons8.com/color/452/nginx.png'
              title="Glances at a Glance"
              Subtitle={HeaderSubtitle}
            />
            <TextOverLineSubtitle
              fontSize='16px'
              text='Different Styles'
              bold
              lineProps={{bkgEmotion: 'warning2'}}
            />

            <Layout.Div
              flex
              style={{
                flexWrap: 'wrap',
                justifyContent: 'space-between'
              }}
            >
              <GlanceView
                title="What's the Weather?"
                type='chart'
                value='44'
                legend="Gotta bounce"
                direction={'up'}
                data={timeSeriesData}
              />
              <GlanceView
                type='pie'
                title='Telem DB Disk'
                legend='As a moth'
                data={binaryPieData}
              />
              <GlanceView
                type='pie'
                title='Telem DB Disk'
                legend='As a moth'
                data={binaryPieData}
              />

              <GlanceView
                title="Endpoint Address"
                type='icon'
                value='Admin Site'
                icon='vpn_lock'
                legend="10.30.383.12/admin"
                legendIcon='open_in_new'
                iconEmotion='warning2'
              />
              <GlanceView
                title="Prometheus Connected?"
                type='icon'
                value='Connected'
                iconEmotion={'milGreen'}
                icon='done_all'
                legend="10.30.383.12/admin"
              />
              <GlanceView
                title="CPU usage Vs Limit"
                type='battery'
                pct={30}
                legend="Not that bad ey?"
              />
              <GlanceView
                title="Monitoring Site"
                type={'icon'}
                value='Grafana'
                image='https://exchange.icinga.com/cark/Grafana%20Module/logo'
                legend="10.30.383.12"
              />
              <GlanceView
                title="Predicate Passed"
                type='status'
                value='Connected'
                icon='done_all'
                legend="10.30.383.12/admin"
              />
            </Layout.Div>

          </Layout.Div>
        </Layout.PageWithoutHeader>
      </AppLayout>
    </ThemeProvider>
  )
}

function HeaderSubtitle(){
  return(
    <Text.H3>Such Recursion Wow</Text.H3>
  )
}
