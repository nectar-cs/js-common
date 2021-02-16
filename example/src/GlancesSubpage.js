import React from "react";
import { GlanceViewGrid } from 'nectar-gui';

export function GlancesSubpage(){
  return(
    <GlanceViewGrid
      mt={3}
      allGlanceProps={glanceProps}
    />
  )
}

const glanceProps = [
  {
    viewType: 'resource',
    title: 'Resource View',
    spec: {
      lineOne: "Website",
      lineTwo: "Internal",
      lineThree: "10.45.91.3",
      graphic: 'https://img.icons8.com/clouds/2x/server.png'
    },
    legend: {
      type: 'status',
      label: 'Status',
      text: 'running',
    }
  },
  {
    viewType: 'line_chart',
    title: 'Resource View',
    spec: {
      value: '69',
      timeseries: genTimeseries()
    },
    legend: {
      type: 'default',
      text: "Swinging",
      direction: 'up',
      goodDirection: 'up'
    }
  }
]

function genTimeseries(){
  const lookback = 30;
  return [...Array(lookback).keys()].map(i => ({
    period: lookback - i,
    count: Math.max(Math.min(Math.random() * 100, 60), 40)
  }));
}
