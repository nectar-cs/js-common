import React, {useContext, useState} from 'react'
import ResponsiveContainer from "recharts/lib/component/ResponsiveContainer";
import AreaChart from "recharts/lib/chart/AreaChart";
import XAxis from "recharts/lib/cartesian/XAxis";
import YAxis from "recharts/lib/cartesian/YAxis";
import Tooltip from "recharts/lib/component/Tooltip";
import Area from "recharts/lib/cartesian/Area";
import {AppListingContext} from "./AppListingContext";
import Layout from "../../styles/layout-styles";
import Text from "../../styles/text-styles";
import Input from "../../styles/input-styles";
import {theme} from "../..";

export default function BenchmarksView(){
  const app = useContext(AppListingContext).app;
  const { benchmarks } = app;
  const [benchmarkId, setBenchmarkId] = useState(benchmarks[0].id);
  const benchmark = benchmarks.find(b => b.id === benchmarkId);

  return(
    <Layout.Div mt={4.5}>
      <Layout.Div flex  mb={0} align='center'>
        <Text.H1>Requests/Second Benchmark</Text.H1>
        <Input.FlatSelect
          value={benchmarkId}
          onChange={e => setBenchmarkId(e.target.value)}
          mt={0}
          fontSize='14px'
          ml={1}
          width='auto'>
          { benchmarks.map((bm, i) => (
            <option
              key={i}
              value={bm.id}>
              {bm.name}
            </option>
          )) }
        </Input.FlatSelect>
      </Layout.Div>
      <ResponsiveContainer width='100%' height={250}>
        <AreaChart data={benchmark.dataPoints}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="60%" stopColor={theme.colors.primaryColor} stopOpacity={0.8}/>
              <stop offset="95%" stopColor={theme.colors.pleasant} stopOpacity={.5}/>
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            interval={1}
            tickFormatter={v => `${v} ${benchmark.xUnit}`}
          />
          <YAxis
            orientation='right'
            interval={1}
            tickFormatter={v => `${v} ${benchmark.yUnit}`}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="consumed"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Layout.Div>
  )
}
