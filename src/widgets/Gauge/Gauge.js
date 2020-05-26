import React from 'react'
import {Pie, PieChart} from "recharts";
import Layout from "../../styles/layout-styles";
import Text from "../../styles/text-styles";
// noinspection ES6PreferShortImport
import {theme} from "./../../styles/constants";

const data02 = [
  {
    "name": "Group A",
    "value": 100
  },
];


export function Donut({size, frac, c1, c2, ...props}){

  const outerRad = size / 2;
  const innerRad = 5;

  c1 = c1 || theme.colors.primaryColor;
  c2 = c2 || theme.colors.cool;

  const startAng = 90;
  const endAng = 360 + 90;

  function pctToAng(pct){
    return startAng + (pct * 360);
  }

  return(
    <Layout.Div relative {...props}>
      <PieChart width={size} height={size}>
        <Pie
          animationDuration={100}
          data={data02}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          startAngle={startAng}
          endAngle={endAng}
          innerRadius={innerRad}
          outerRadius={outerRad}
          fill={c1}
        />
        <Pie
          animationDuration={100}
          data={[{value: 1}]}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          startAngle={startAng}
          endAngle={pctToAng(frac)}
          innerRadius={innerRad}
          outerRadius={outerRad}
          fill={c2}
        />
      </PieChart>
    </Layout.Div>
  )

}


export default function Gauge({frac, size, text, legend, c1, c2, ...props}){

  const startAng = -40;
  const endAng = 220;
  c1 = c1 || theme.colors.primaryColor;
  c2 = c2 || theme.colors.pleasant;

  function pctToAng(pct){
    const angRange = endAng - startAng;
    return ((1 - pct) * angRange) + startAng;
  }

  return(
    <Layout.Div relative {...props}>
      <Text.P
        absolute
        centered
        mt={2.5}>
        {text}
      </Text.P>

      <Text.P
        calm
        absolute
        centered
        mt={5.4}>
        {legend}
      </Text.P>

      <PieChart width={size} height={size}>
        <Pie
          animationDuration={100}
          data={data02}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          startAngle={startAng}
          endAngle={endAng}
          innerRadius={(size / 2) - 10}
          outerRadius={size / 2}
          fill={c1}
        />
        <Pie
          animationDuration={100}
          data={[{value: 1}]}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          startAngle={pctToAng(frac)}
          endAngle={220}
          innerRadius={(size / 2) - 10}
          outerRadius={size / 2}
          fill={c2}
        />
      </PieChart>
    </Layout.Div>
  )
}
