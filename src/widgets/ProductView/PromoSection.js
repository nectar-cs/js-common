import React, {Fragment, useContext} from 'react'
import Text from "../../styles/text-styles";
import Layout from "../../styles/layout-styles";
import {theme} from "../..";
import {AppListingContext} from "./AppListingContext";
import Img from "../../styles/img-styles";
import Table from "../../styles/table-styles";

export default function PromoSection(){
  const app = useContext(AppListingContext).app;
  return(
    <Fragment>
      <IntroView name={app.name} info={app.info}/>
      <ScreenshotsGrid screenshotUrls={app.screenshotUrls}/>
      <Layout.Div height={2}/>
      <FeaturesTable features={app.features}/>
    </Fragment>
  )
}

function IntroView({name, info}){
  return(
    <Fragment>
      <Layout.Div flex align={'center'}>
        <Text.H1 fontSize='29px'>
          { name }
        </Text.H1>
        <Text.BorderedStatusTag
          ml={1}
          bold
          emotion={'milGreen'}>
          Public Application
        </Text.BorderedStatusTag>
      </Layout.Div>
      <Text.P
        fontSize={'14.5px'}
        style={{lineHeight: '24px'}}
        mt={2.1}>
        {info}
      </Text.P>
    </Fragment>
  )
}

function ScreenshotsGrid({screenshotUrls}){
  const picSize = '90px';
  return(
    <Layout.Div width={'100%'} flex mt={3}>
      { screenshotUrls.map((screenshotUrl, i) => (
        <Img.Img
          mr={2}
          sexyShadow
          shadowOpacity={.5}
          // key={i}
          height={picSize}
          width={picSize}
          style={{
            borderRadius: '12px',
            objectFit: 'cover'
          }}
          src={screenshotUrl}
          alt='screenshot'
        />
      )) }
    </Layout.Div>
  )
}

function FeaturesTable({features}){
  const rowCount = Math.ceil(features.length / 2);

  return(
    <Table.Table
      width={'110%'}
      borderWidth='20px'
      innerBorderWidth='50px'
      innerborder={true}
      borderEmotion='transparent'>
      { [...Array(rowCount).keys()].map((i) => (
        <tr key={i}>
          <FeatureCell feature={features[i * 2]} hack={true}/>
          <FeatureCell feature={features[i * 2 + 1]}/>
        </tr>
      )) }
    </Table.Table>
  )
}

function FeatureCell({feature, hack}){
  if(!feature) return null;
  return(
    <td
      style={{border: 'none', verticalAlign: 'top', width: '50%'}}>
      <Layout.Div mr={hack ? 4 : 0}>
        <Text.P
          fontSize='14.5px'
          bold>
          { feature.name }
        </Text.P>
        <Text.P
          mt={1}
          clamped={3}
          style={{lineHeight: '24px'}}
          fontSize='14.5px'>
          {feature.info}
        </Text.P>
      </Layout.Div>

    </td>
  )
}
