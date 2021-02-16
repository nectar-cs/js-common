import React from 'react'
// noinspection NpmUsedModulesInstalled
import { ResponsivePie } from '@nivo/pie'
import Layout from "../../styles/layout-styles";
import {theme} from "./../../styles/constants";

const pieSize = '75px';

export function PieGlanceContentView({spec}){
  const { data, coloring } = { ...defaultSpec, ...spec };

  return(
    <Layout.Div height='100%' relative>
      <Layout.Div mt={1.85}
        width='100%'
        height={pieSize}>
        { data && (
          <PieView
            data={data}
            coloring={coloring}
          />
        ) }
      </Layout.Div>
    </Layout.Div>
  )
}

function PieView({data, coloring}){
  return(
    <ResponsivePie
      isInteractive={false}
      margin={{right: 60}}
      data={data}
      innerRadius={0}
      padAngle={0.0}
      cornerRadius={0}
      colors={resolveColors(coloring)}
      borderWidth={0}
      sliceLabelsSkipAngle={10}
      enableRadialLabels={false}
      legends={[
        {
          anchor: 'right',
          direction: 'column',
          justify: false,
          translateX: 110,
          translateY: -18,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 19,
          itemTextColor: '#999',
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 10,
          symbolShape: 'square',
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

function genColorMapFunction(mapping){
  return function (slice) {
    return theme.colors[mapping[slice.id]];
  }
}

function resolveColors(coloring){
  if(typeof coloring === 'string'){
    return { scheme: coloring };
  } else if(typeof coloring === 'object'){
    return genColorMapFunction(coloring);
  } else return { scheme: 'red_grey' };
}

const defaultSpec = {
  coloring: 'spectral'
}
