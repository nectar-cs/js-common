import React, {Fragment} from 'react'
// noinspection ES6CheckImport,NpmUsedModulesInstalled
import { ResponsiveLine } from '@nivo/line'
import Text from "../../styles/text-styles";
import Layout from "../../styles/layout-styles";
import constants from "./constants";

const { chartHeight } = constants.dims;
export function LineChartGlanceContentView({spec}){
  spec = { ...defaultSpec, ...spec };
  const { value, timeseries, xKey, yKey } = spec;

  return(
    <Fragment>
      <Text.P
        fontSize='32px'
        calm
        style={{textAlign: 'center', fontWeight: 'light'}}
        mt={2.3}
      >
        { value }
      </Text.P>
      <Layout.Div height={`${chartHeight}px`} mt='20px'>
        { !!timeseries && (
          <ChartPart
            data={timeseries2nivo(timeseries, xKey, yKey)}
          />
        ) }
      </Layout.Div>
    </Fragment>
  )
}

function ChartPart({data}){
  return(
    <ResponsiveLine
      data={data}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false
      }}
      margin={{bottom: 2, top: 2}}
      yFormat=" >-.2f"
      height={chartHeight}
      axisTop={null}
      enableArea={true}
      axisRight={null}
      axisBottom={null}
      pointSize={0}
      enableGridX={false}
      enableGridY={false}
    />
  )
}

function timeseries2nivo(timeseries, xKey, yKey){
  const newXySequence = timeseries.map(dataPoint => ({
    x: dataPoint[xKey],
    y: dataPoint[yKey]
  }));
  return [ {id: 'sequence', data: newXySequence} ];
}

type Spec = {
  value: string,
  timeseries: Array,
  xKey: string,
  yKey: string
}

const defaultSpec = {
  xKey: 'period',
  yKey: 'count'
}
