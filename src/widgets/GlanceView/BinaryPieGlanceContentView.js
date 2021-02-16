import React from 'react'
// noinspection NpmUsedModulesInstalled
import { ResponsivePie } from '@nivo/pie'
import Layout from "../../styles/layout-styles";

export function BinaryPieGlanceContentView({glance}){
  const { pct } = glance;
  return(
    <Layout.Div height='100%' relative>
      <Layout.Div
        absolute
        left={0}
        right={0}
        top={.2}
        bottom={.2}>
        <ResponsivePie
          data={[{
            "id": "ruby",
            "label": "ruby",
            "value": pct
          },
            {
              "id": "hack",
              "label": "hack",
              "value": 100 - pct,
            }
          ]}
          innerRadius={0}
          padAngle={0.0}
          cornerRadius={0}
          colors={{ scheme: 'pastel1' }}
          borderWidth={1}
          borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
          sliceLabelsSkipAngle={10}
          enableRadialLabels={false}
        />
      </Layout.Div>
    </Layout.Div>
  )
}
