import React from "react";
import {GlanceViewGrid} from 'nectar-gui';

export function GlancesSubpage(){
  return(
    <GlanceViewGrid.View
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
    viewType: 'resource',
    title: 'Icon Resource',
    spec: {
      lineOne: "Test Suite",
      lineTwo: "100 Tests",
      lineThree: "40ms Run",
      graphic: 'policy',
      graphicType: 'icon'
    },
    legend: {
      type: 'default',
      text: "Up is Good",
      direction: 'up',
      goodDirection: 'up'
    }
  },
  {
    viewType: 'line_chart',
    title: 'Line Chart View',
    spec: {
      value: '69%',
      timeseries: genTimeseries()
    },
    legend: {
      type: 'default',
      text: "Up is Bad",
      direction: 'up',
      goodDirection: 'down'
    }
  },
  {
    viewType: 'pie',
    title: "Binary Pie",
    spec: {
      dataType: 'pct',
      data: [
        { id: 'free', value: 90 },
        { id: 'taken', value: 10 }
      ],
      coloring: { free: 'grey3', taken: 'ruby' }
    },
    legend: {
      type: 'default',
      text: "Down is good",
      direction: 'down',
      goodDirection: 'down'
    }
  },
  {
    viewType: 'three_statuses',
    title: "Three Statuses",
    spec: {
      statuses: [
        {
          title: "83%",
          info: "1.4.3 HTTP",
          emotion: 'milGreen'
        },
        {
          title: "DEL",
          info: "Since Jan",
          emotion: 'primaryColor'
        },
        {
          title: "38%",
          info: "1.4.3 Updated",
          emotion: 'warning2'
        }
      ]
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
