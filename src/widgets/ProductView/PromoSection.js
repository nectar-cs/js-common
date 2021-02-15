import React, {Fragment, useState, useContext} from 'react'
import Text from "../../styles/text-styles";
import Layout from "../../styles/layout-styles";
import {AppListingContext} from "./AppListingContext";
import Img from "../../styles/img-styles";
// noinspection NpmUsedModulesInstalled
import { Lightbox } from "react-modal-image";


export default function PromoSection(){
  const app = useContext(AppListingContext).app;
  return(
    <Fragment>
      <IntroView {...app}/>
      <ScreenshotsGrid screenshots={app.screenshots}/>
      <Layout.Div height={2}/>
    </Fragment>
  )
}

function IntroView({name, info, isPublic}){
  return(
    <Fragment>
      <Layout.Div flex align='center'>
        <Text.H1 fontSize='26px' bold>
          { name }
        </Text.H1>
        <Text.BorderedStatusTag
          ml={1}
          bold
          borderWidth={'1.5px'}
          emotion={isPublic ? 'milGreen' : 'warning2'}>
          {isPublic ? 'Public' : 'Private'} Application
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

function ScreenshotsGrid({screenshots}){
  const [activeScreenshotUrl, setActiveScreenshotUrl] = useState(null);

  const picSize = '90px';
  return(
    <Layout.Div width={'100%'} flex mt={3}>
      { activeScreenshotUrl &&
        <Lightbox
          hideDownload={true}
          hideZoom={true}
          medium={activeScreenshotUrl}
          large={activeScreenshotUrl}
          onClose={_ => setActiveScreenshotUrl(null)}
        />
      }

      { screenshots.map((screenshot, i) => (
        <Img.Img
          key={i}
          hov_point
          onClick={_ => setActiveScreenshotUrl(screenshot.url)}
          mr={2}
          sexyShadow
          shadowOpacity={.5}
          // key={i}
          height={picSize}
          width={picSize}
          borderRadius='6px'
          style={{
            objectFit: 'cover'
          }}
          src={screenshot.url}
          alt={screenshot.name}
        />
      )) }
    </Layout.Div>
  )
}
