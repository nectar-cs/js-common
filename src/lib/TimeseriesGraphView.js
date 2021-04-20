// noinspection ES6CheckImport
import {ResponsiveLine} from "@nivo/line";
import React from "react";

export function TimeseriesGraphView(props: Props){
  const { data, period, colors } = props;
  return(
    <ResponsiveLine
      isInteractive={true}
      data={data}
      colors={colors || { scheme: 'spectral' } }
      margin={{ top: 22, bottom: 20, right: 40, left: 0}}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      pointSize={4}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      enableArea={true}
      areaOpacity={0.020}
      axisRight={{
        enable: true,
        tickValues: 2
      }}
      // axisBottom={{
      //   format: value => formatTimestamp(value, period)
      // }}
      enableGridY={false}
      enableGridX={false}
      useMesh={true}

      legends={[
        {
          anchor: 'top-right',
          direction: 'row',
          justify: false,
          translateX: 45,
          translateY: -25,
          itemsSpacing: 59,
          itemDirection: 'left-to-right',
          itemWidth: 110,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 10,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
        }
      ]}
    />
  )
}

function formatTimestamp(timestamp, period){
  // switch (period) {
  //   case "day": return dayjs(timestamp).format('D MMM');
  //   case "week": return dayjs(timestamp).format('D MMM');
  //   case "month": return dayjs(timestamp).format('MMM');
  // }
}

type Props = {
  data: Array<any>,
  period: string,
  colors: any
}
