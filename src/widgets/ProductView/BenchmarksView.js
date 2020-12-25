import React, {useContext, useState} from 'react'
import {AppListingContext} from "./AppListingContext";
import Layout from "../../styles/layout-styles";
import Text from "../../styles/text-styles";
import Input from "../../styles/input-styles";
import { ResponsiveLine } from '@nivo/line'
import {theme} from "./../../styles/constants";

export default function BenchmarksView(){
  const app = useContext(AppListingContext).app;
  const { benchmarks } = app;
  const [benchmarkId, setBenchmarkId] = useState(benchmarks[0].id);
  const benchmark = benchmarks.find(b => b.id === benchmarkId);

  return(
    <Layout.Div height='200px' width={'100%'}>
      <MyChart/>
    </Layout.Div>
  )
}


function MyChart(){
  return(
    <ResponsiveLine
      height={200}
      width={800}
      data={data}
      xScale={{ type: 'point' }}
      yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'transportation',
        legendOffset: 36,
        legendPosition: 'middle'
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'count',
        legendOffset: -40,
        legendPosition: 'middle'
      }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      enableArea={true}
      enableGridX={true}
      enableGridY={false}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1
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
    "id": "japan",
    "color": "hsl(321, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 134
      },
      {
        "x": "helicopter",
        "y": 160
      },
      {
        "x": "boat",
        "y": 151
      },
      {
        "x": "train",
        "y": 145
      },
      {
        "x": "subway",
        "y": 55
      },
      {
        "x": "bus",
        "y": 68
      },
      {
        "x": "car",
        "y": 265
      },
      {
        "x": "moto",
        "y": 113
      },
      {
        "x": "bicycle",
        "y": 243
      },
      {
        "x": "horse",
        "y": 32
      },
      {
        "x": "skateboard",
        "y": 208
      },
      {
        "x": "others",
        "y": 267
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(153, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 92
      },
      {
        "x": "helicopter",
        "y": 61
      },
      {
        "x": "boat",
        "y": 43
      },
      {
        "x": "train",
        "y": 208
      },
      {
        "x": "subway",
        "y": 92
      },
      {
        "x": "bus",
        "y": 18
      },
      {
        "x": "car",
        "y": 299
      },
      {
        "x": "moto",
        "y": 277
      },
      {
        "x": "bicycle",
        "y": 205
      },
      {
        "x": "horse",
        "y": 208
      },
      {
        "x": "skateboard",
        "y": 287
      },
      {
        "x": "others",
        "y": 87
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(358, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 170
      },
      {
        "x": "helicopter",
        "y": 91
      },
      {
        "x": "boat",
        "y": 275
      },
      {
        "x": "train",
        "y": 47
      },
      {
        "x": "subway",
        "y": 200
      },
      {
        "x": "bus",
        "y": 162
      },
      {
        "x": "car",
        "y": 296
      },
      {
        "x": "moto",
        "y": 137
      },
      {
        "x": "bicycle",
        "y": 132
      },
      {
        "x": "horse",
        "y": 2
      },
      {
        "x": "skateboard",
        "y": 233
      },
      {
        "x": "others",
        "y": 20
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(142, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 136
      },
      {
        "x": "helicopter",
        "y": 293
      },
      {
        "x": "boat",
        "y": 64
      },
      {
        "x": "train",
        "y": 119
      },
      {
        "x": "subway",
        "y": 69
      },
      {
        "x": "bus",
        "y": 3
      },
      {
        "x": "car",
        "y": 224
      },
      {
        "x": "moto",
        "y": 269
      },
      {
        "x": "bicycle",
        "y": 46
      },
      {
        "x": "horse",
        "y": 198
      },
      {
        "x": "skateboard",
        "y": 124
      },
      {
        "x": "others",
        "y": 57
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(108, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 157
      },
      {
        "x": "helicopter",
        "y": 118
      },
      {
        "x": "boat",
        "y": 139
      },
      {
        "x": "train",
        "y": 71
      },
      {
        "x": "subway",
        "y": 286
      },
      {
        "x": "bus",
        "y": 274
      },
      {
        "x": "car",
        "y": 108
      },
      {
        "x": "moto",
        "y": 246
      },
      {
        "x": "bicycle",
        "y": 48
      },
      {
        "x": "horse",
        "y": 46
      },
      {
        "x": "skateboard",
        "y": 104
      },
      {
        "x": "others",
        "y": 131
      }
    ]
  }
]
