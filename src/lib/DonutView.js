import React from 'react'
import {ResponsivePie} from "@nivo/pie";
import Layout from "../styles/layout-styles";
import Text from "../styles/text-styles";


export default function DonutView({colors}){
  // noinspection RequiredAttributes
  return(
    <ResponsivePie
      data={data || []}
      margin={{ left: 90 }}
      innerRadius={0.73}
      padAngle={2.4}
      cornerRadius={3}
      colors={colors || {scheme: "spectral"}}
      // borderWidth={1}
      borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
      enableRadialLabels={false}
      sliceLabelsTextColor="white"
      legends={[
        {
          anchor: 'left',
          direction: 'column',
          justify: false,
          translateX: -70,
          translateY: -3,
          itemsSpacing: 0,
          itemWidth: 20,
          itemHeight: 25,
          itemTextColor: '#999',
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 11,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000'
              }
            }
          ]
        }
      ]}
    />
  )
}

const data = [
  {
    "id": "c",
    "label": "c",
    "value": 533,
    "color": "hsl(101, 70%, 50%)"
  },
  {
    "id": "css",
    "label": "css",
    "value": 296,
    "color": "hsl(10, 70%, 50%)"
  },
  {
    "id": "haskell",
    "label": "haskell",
    "value": 309,
    "color": "hsl(62, 70%, 50%)"
  },
  {
    "id": "elixir",
    "label": "elixir",
    "value": 259,
    "color": "hsl(221, 70%, 50%)"
  },
  {
    "id": "scala",
    "label": "scala",
    "value": 258,
    "color": "hsl(161, 70%, 50%)"
  }
];
