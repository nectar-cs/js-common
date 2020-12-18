import React, {Fragment, useState, useContext} from 'react'
import Text from "../../styles/text-styles";
import Layout from "../../styles/layout-styles";
import {AppListingContext} from "./AppListingContext";
import Img from "../../styles/img-styles";
import Table from "../../styles/table-styles";
import { Lightbox } from "react-modal-image";


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
  const [isOpen, setIsOpen] = useState(false);
  const picSize = '90px';
  return(
    <Layout.Div width={'100%'} flex mt={3}>
      { isOpen &&
        <Lightbox
          hideDownload={true}
          hideZoom={true}
          medium={isOpen}
          large={isOpen}
          onClose={_ => setIsOpen(false)}
        />
      }

      { screenshotUrls.map((screenshotUrl, i) => (
        <Img.Img
          key={i}
          hoverPoint
          onClick={_ => setIsOpen(screenshotUrl)}
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
      borderWidth='12px'
      innerBorderWidth='60px'
      innerborder={true}
      borderEmotion='transparent'>
      { [...Array(rowCount).keys()].map((i) => (
        <tr key={i}>
          <FeatureCell feature={features[i * 2]}/>
          <FeatureCell feature={features[i * 2 + 1]}/>
        </tr>
      )) }
    </Table.Table>
  )
}

function FeatureCell({feature}){
  if(!feature) return null;
  return(
    <td
      style={{verticalAlign: 'top', width: '50%'}}>
      <Layout.Div>
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
