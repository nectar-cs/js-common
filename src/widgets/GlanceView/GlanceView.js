import React from "react";
import Layout from "../../styles/layout-styles";
import Text from "../../styles/text-styles";
// noinspection NpmUsedModulesInstalled
import Skeleton from 'react-loading-skeleton';
import constants from "./constants";
import {LineChartGlanceContentView} from "./LineChartGlanceContentView";
import {PieGlanceContentView} from "./PieGlanceContentView";
import {ResourceGlanceContentView} from "./ResourceGlanceContentView";
import NectarGuiUtils from "../../utils/NectarGuiUtils";
// noinspection NpmUsedModulesInstalled
import humanizeString from "humanize-string";
import {ThreeStatusesGlanceView} from "./ThreeStatusesGlanceView";
import Clickable from "../Clickable";
import {GaugeGlanceContentView} from "./GaugeGlanceContentView";

const { topHeight, bottomHeight, size } = constants.dims;

export function View(props){
  const { viewType, spec, ...rest } = props;
  const ContentView = name2comp(viewType);
  return(
    <OuterContainer {...rest}>
      <ContentView spec={spec}/>
    </OuterContainer>
  )
}

function OuterContainer(props){
  const { legend, state, children, action, ...rest } = props;
  const isLoading = state === 'loading';
  const error = state === 'error';

  const LegendView = type2legendComp((legend || {}).type);

  return(
    <Layout.Div
      style={{padding: '0px'}}
      absolute
      width={size}
      height={size}
      maxHeight={size}
      borderEmotion='grey3'
      hov_point={!isLoading}
      borderWidth='1px'
      relative
      borderRadius='4px'
      {...rest}
    >
      <Clickable action={action}>
        <Layout.Div>
          <Layout.Div absolute height={topHeight} width='100%' top={0}>
            <TitleView {...props}/>
          </Layout.Div>
          <Layout.Div
            pt={0}
            absolute
            left='12px'
            right='12px'
            top={topHeight}
            bottom={bottomHeight}>
            { error && <ErrorView error={error}/> }
            { !error && isLoading && <LoadingView/> }
            <Layout.Div height='100%' width='100%'>
              { !error && !isLoading && children }
            </Layout.Div>
          </Layout.Div>
          <Layout.Div
            width='100%'
            absolute
            height={bottomHeight}
            bottom={0}>
            { !!LegendView && !error && !isLoading && (
              <LegendView {...props.legend}/>
            ) }
          </Layout.Div>
        </Layout.Div>
      </Clickable>
    </Layout.Div>
  )
}

function ErrorView(){
  return(
    <Layout.Div
      width='100%'
      height='100%'>
      <Layout.CenteringDiv mt={2.5}>
        <Layout.Div flex align='center'>
          <Text.Icon
            size={.8}
            name='error'
            emotion='lightGrey'
          />
          <Text.P
            mt={.2}
            hacker
            ml={.3}
            calm>
            Could not compute
          </Text.P>
        </Layout.Div>
      </Layout.CenteringDiv>
    </Layout.Div>
  )
}

function LoadingView(){
  return(
    <Layout.Div
      width='100%'
      height='100%'>
      <Layout.Div
        absolute
        trbl={['50%', 0, 0, 0]}
        style={{transform: 'translateY(-50%)'}}>
        <Layout.Div
          flex
          height='50px'>
          <Layout.Div style={{ fontSize: '55px'}} width={'100%'}>
            <Skeleton />
          </Layout.Div>
          <Layout.Div width={2}/>
          <Layout.Div width={'100%'} mt={'4px'}>
            <Skeleton height={18} />
            <Layout.Div height={.3}/>
            <Skeleton height={12} />
          </Layout.Div>
        </Layout.Div>
        <Layout.Div width={'100%'} mt={1.4}>
          <Skeleton count={1} />
        </Layout.Div>
      </Layout.Div>
    </Layout.Div>
  )
}

function TitleView(props){
  const { title } = props;
  return(
    <Text.P
      humane
      fontSize='13px'
      // bold
      // calm
      mt={1.1}
      ml={1.2}
      noSpill
      >
      { title }
    </Text.P>
  )
}

function type2legendComp(name){
  switch(name) {
    case 'default': return SimpleLegendView;
    case 'status': return StatusLegendView;
  }
}

function StatusLegendView(props){
  props = { ...defaultStatusLegend, ...props };
  const { label, text, emotion, humanize } = props;

  const common = {
    width: '57px',
    style: { paddingTop: '2px', paddingBottom: '2px' }
  }

  return(
    <Layout.Div absolute centered bottom={'8px'}>
      <Layout.Div iFlex align='center'>
        <Text.BorderedStatusTag {...common}>
          { label }
        </Text.BorderedStatusTag>
        <Text.BorderedStatusTag
          {...common}
          ml={'-1px'}
          emotion='white'
          bkgEmotion={emotion || NectarGuiUtils.name2emotion(text)}>
          { statusCopy(humanize, text) }
        </Text.BorderedStatusTag>
      </Layout.Div>
    </Layout.Div>
  )
}

function SimpleLegendView(props){
  const { text, direction, goodDirection } = props;
  const { icon, emotion } = props;
  const isDirectionGood = direction === goodDirection;

  return(
    <Layout.CenteringDiv mt={0}>
      <Layout.Div iFlex>
        <Text.P
          noSpill
          calm
          bold
        >
          { text }
        </Text.P>
        { direction && (
          <Text.Icon
            emotion={isDirectionGood ? 'milGreen' : 'warning2'}
            ml={.45}
            mt={.1}
            size={.70}
            bold
            style={{transform: `rotate(${direction === 'up' ? 270 : 90}deg)`}}
            name='play_arrow'
          />
        )}
        { icon && (
          <Text.Icon
            emotion={emotion || 'secondaryFont'}
            ml={.45}
            mt={.1}
            size={.70}
            name={icon}
          />
        )}
      </Layout.Div>
    </Layout.CenteringDiv>
  )
}

function name2comp(name: string) {
  switch (name) {
    case 'three_statuses': return ThreeStatusesGlanceView;
    case 'line_chart': return LineChartGlanceContentView;
    case 'pie': return PieGlanceContentView;
    case 'resource': return ResourceGlanceContentView;
    case 'gauge': return GaugeGlanceContentView;
  }
}

function statusCopy(humanize, status){
  return humanize ? humanizeString(status) : status;
}

const defaultStatusLegend = {
  label: 'Status',
  humanize: true
}

// noinspection JSUnusedGlobalSymbols
export const GlanceView = {
  View,
  OuterContainer
};
