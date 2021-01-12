import React, {Fragment} from "react";
import { ResponsiveLine } from '@nivo/line'
import { ResponsivePie } from '@nivo/pie'
import Layout from "../../styles/layout-styles";
import Text from "../../styles/text-styles";
import GlanceViewContainer from "./GlanceViewContainer";
import Battery from "../Battery/Battery";
import Img from "../../styles/img-styles";

const chartHeight = 35;

export default function GlanceView(props){
  const {  type } = props;

  return(
    <GlanceViewContainer {...props}>
      { type === 'chart' && (
        <ChartType {...props}/>
      ) }
      { type === 'pie' && (
        <PieType {...props}/>
      ) }
      { type === 'icon' && (
        <IconType {...props}/>
      ) }
      { type === 'battery' && (
        <BatteryType {...props}/>
      ) }

    </GlanceViewContainer>
  )
}

function BatteryType({pct}){
  return(
    <Layout.CenteringDiv mt={1.8}>
      <Layout.Div flex align='center'>
        <Battery
          size={2.84}
          pct={pct}
        />
        <Text.P fontSize='28px' ml={1}>
          { pct }%
        </Text.P>
      </Layout.Div>
    </Layout.CenteringDiv>
  )
}

function IconType({value, icon, image}){
  const imageSize = '60px';
  return(
    <Layout.Div mt={1}>
      <Layout.CenteringDiv>
        <Layout.CenteringDivY>
          { icon && (
            <Text.Icon
              name={icon}
              size={2}
              emotion={'lightGrey'}
            />
          ) }
          { image && (
            <Img.Img
              src={image}
              width={imageSize}
              height={imageSize}
            />
          )}
          { value && (
            <Text.P
              mt={.6}
              calm
              fontSize='23px'>
              { value }
            </Text.P>
          ) }
        </Layout.CenteringDivY>
      </Layout.CenteringDiv>
    </Layout.Div>
  )
}

function PieType({data}){
  return(
    <ResponsivePie
      data={data}
      innerRadius={0}
      padAngle={0.0}
      cornerRadius={0}
      colors={{ scheme: 'nivo' }}
      borderWidth={1}
      borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
      sliceLabelsSkipAngle={10}
      enableRadialLabels={false}
    />
  )
}

function ChartType({value, data}){
  return(
    <Fragment>
      <Text.P
        mt={1}
        fontSize='34px'
        textAlign='center'>
        { value }
      </Text.P>
      <Layout.Div
        height={`${chartHeight}px`}
        mt={'20px'}>
        <ResponsiveLine
          data={data}
          height={chartHeight}
          axisTop={null}
          enableArea={true}
          axisRight={null}
          pointSize={0}
          enableGridX={false}
          enableGridY={false}
        />
      </Layout.Div>

    </Fragment>
  )
}
