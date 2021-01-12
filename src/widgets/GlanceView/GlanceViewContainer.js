import React from "react";
import Layout from "../../styles/layout-styles";
import Text from "../../styles/text-styles";
import Skeleton from 'react-loading-skeleton';


const topHeight = '30px';
const bottomHeight = '39px';

export default function GlanceView(props){
  const { size: viewSize, isLoading, children, error } = props;

  return(
    <Layout.Div
      mr={0}
      mb={1.2}
      width={viewSize}
      height={viewSize}
      borderEmotion='grey3'
      hov_borderEmotion={!isLoading && 'primaryBkg'}
      hov_point={!isLoading}
      borderWidth='1px'
      relative
      borderRadius='4px'>
      <Layout.Div absolute height={topHeight} width='100%' top={0}>
        <TitleView {...props}/>
      </Layout.Div>
      <Layout.Div
        pt={2}
        absolute
        bkgEmotion={null}
        left='12px'
        right='12px'
        top={topHeight}
        bottom={bottomHeight}>
        { error && (
          <ErrorView
            error={error}
          />
        ) }
        { !error && isLoading && (
          <LoadingView/>
        ) }
        { !error && !isLoading && children }
      </Layout.Div>

      <Layout.Div width='100%' absolute height={bottomHeight} bottom={0}>
        { !error && !isLoading && (
          <LegendView{...props}/>
        ) }
      </Layout.Div>
    </Layout.Div>
  )
}

function ErrorView(){
  return(
    <Layout.Div
      width='100%'
      height='100%'>
      {/*<Layout.Div*/}
      {/*  absolute*/}
      {/*  trbl={['20%', 0, 0, 0]}*/}
      {/*  style={{transform: 'translateY(-50%)'}}>*/}
        <Layout.CenteringDiv mt={2}>
          <Layout.Div flex>
            <Text.Icon name='bug_report' emotion={'warning2'}/>
            <Text.BorderedStatusTag
              ml={.3}
              emotion='warning2'>
              Could not compute
            </Text.BorderedStatusTag>
          </Layout.Div>
        </Layout.CenteringDiv>
      {/*</Layout.Div>*/}
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
        style={{transform: 'translateY(-50%)'}}
        >
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
      fontSize='14px'
      bold
      mt='12px'
      ml='10px'
      noSpill
      calm>
      { title }
    </Text.P>
  )
}

function LegendView(props){
  const { legend, direction, legendIcon, legendEmotion, isLoading } = props;

  return(
    <Layout.Div
      absolute
      bottom='9px'
      centered
      iFlex>
      <Text.P
        noSpill
        calm
        bold>
        {legend}
      </Text.P>
      { direction && (
        <Text.Icon
          emotion={direction === 'up' ? 'milGreen' : 'warning2'}
          ml={.65}
          size={.89}
          bold
          style={{transform: `rotate(${direction === 'up' ? 270 : 90}deg)`}}
          name='play_arrow'
        />
      )}
      { legendIcon && (
        <Text.Icon
          emotion={legendEmotion || 'secondaryFont'}
          ml={.45}
          mt={.1}
          size={.70}
          name={legendIcon}
        />
      )}
    </Layout.Div>
  )
}

GlanceView.defaultProps = {
  size: '200px'
}
