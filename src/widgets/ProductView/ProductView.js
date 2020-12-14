import React, {useContext} from 'react'
import Layout from "../../styles/layout-styles";
import Text from "../../styles/text-styles";
import {theme} from './../../styles/constants'
import Button from "../../styles/button-styles";
import Input from "../../styles/input-styles";
import PermsView from "../PermsView/PermsView";
import ResponsiveContainer from "recharts/lib/component/ResponsiveContainer";
import AreaChart from "recharts/lib/chart/AreaChart";
import XAxis from "recharts/lib/cartesian/XAxis";
import YAxis from "recharts/lib/cartesian/YAxis";
import Tooltip from "recharts/lib/component/Tooltip";
import Area from "recharts/lib/cartesian/Area";
import LeftGutter from "./LeftGutter";
import PlansSection from "./PlansSection";
import PromoSection from "./PromoSection";
import RequirementsTable from "./RequirementsTable";


export default function ProductView(){
  const app = useContext(AppContext);
  const {footprint, memData, perms} = app;

  const greed = _ => {
    document.documentElement.scrollTop = document.documentElement.scrollHeight;
  }

  return(
    <Layout.Div flex mt={2}>
      <Layout.Div minWidth='230px'>
        <LeftGutter/>
      </Layout.Div>
      <Layout.Div ml={7} mt={2} maxWidth='870px' >
        <PromoSection {...props}/>
        <Text.H1 fontSize='28px' mt={7} mb={4}>Cluster Footprint</Text.H1>
        <ResourceBlocksView footprint={footprint}/>
        <ChartView data={memData}/>
        <Text.H1 mt={4} mb={1}>Recommended Prerequisites</Text.H1>
        <RequirementsTable requirements={props.requirements}/>
        <Text.H1 mt={4} mb={1}>Nectar Wiz Capabilities</Text.H1>
        <RequirementsTable requirements={props.wizFeatures}/>
        <VariablePermsView perms={rbacPolicies}/>
        <PlansSection {...props}/>
      </Layout.Div>
      <NeedyPromptView callback={greed}/>
    </Layout.Div>
  )
}

function NeedyPromptView({callback}){
  return(
    <Layout.Div width='100%'>
      <Button.ClearButton
        mt={6}
        ml='auto'
        mr='auto'
        bold
        onClick={callback}
        hoverPoint
        hoverBkgEmotion='#16425B'
        bkgEmotion='hipBlue'
        emotion={'white'}
        style={{display: 'block'}}
        width='196px'
        height='38px'>
        Installation Options
      </Button.ClearButton>
    </Layout.Div>
  )
}

function VariablePermsView({perms}){
  return(
    <Layout.Div mt={4.5}>
      <Text.H1 mb={2}>Standard RBAC Requests</Text.H1>
      <PermsView simplePerms={perms}/>
    </Layout.Div>
  )
}

function ChartView({data}){
  return(
    <Layout.Div mt={4.5}>
      <Layout.Div flex  mb={0} align={'center'}>
        <Text.H1>Requests/Second Benchmark</Text.H1>
        <Input.FlatSelect mt={0} fontSize='14px' ml={1} width='auto'>
          <option>Memory Used</option>
          <option>Pods Used</option>
        </Input.FlatSelect>

      </Layout.Div>
      <ResponsiveContainer width={'100%'} height={250}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="60%" stopColor={theme.colors.primaryColor} stopOpacity={0.8}/>
              <stop offset="95%" stopColor={theme.colors.pleasant} stopOpacity={.5}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis
            orientation='right'
            category={'Foo'}
            interval={1}
            tickFormatter={v => `${v} Gb`}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Layout.Div>
  )
}

function ResourceBlocksView({footprint}){
  const extra = '40px';
  return(
    <Layout.Div flex width={`calc(100% + ${extra})`} ml={`calc(${extra} / -2)`}>
      { footprint.map((stat, i) => (
        <Layout.Div height={'auto'}
          style={{
            borderColor: theme.colors.lightGrey,
            borderStyle: `none none none ${i !== 0 ? 'solid' : 'none'}`
          }}
          width={'100%'}
        >
          <Text.P
            mt={2}
            fontSize={'29px'}
            center>
            { stat.value }
          </Text.P>
          <Text.P
          fontSize={'13px'}
          mt={2}
          center
          >
            { stat.subtitle }
          </Text.P>
        </Layout.Div>
      )) }
    </Layout.Div>
  )
}

function GraphView(){
  return(
    <p>asd</p>
  )
}

export type ProductPlan = {
  name: string,
  info: string,
  features: Array<string>,
  cost: string,
  period: string
}

export type ProductViewProps = {
  logoUrl: string,
  footprint: Array<{}>,
  usefulLinks: Array<{}>,
  screenshotUrls: Array<string>,
  name: string,
  info: string,
  features: Array<{}>,
}

export const AppContext = React.createContext();
