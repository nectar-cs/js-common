// noinspection NpmUsedModulesInstalled
import styled from 'styled-components'
import React from 'react'
import Layout from "../../styles/layout-styles";
import Text from "../../styles/text-styles";
import Img from "../../styles/img-styles";
import {heavyShadow} from "../../styles/constants";
import Clickable from "../Clickable";

const height = '210px';
const longWidth = `calc((${height} * 2) + (12px * 2) + (0.5px * 2))`;

export function BigStoreCard(props){
  const { app, mkPath, forceDark } = props;
  const { logoUrl, activePromo, isPublic, price } = app;

  let special = null;
  if(activePromo)
    special = { text: "Featured" }
  if(!isPublic)
    special = { text: "Private Access", icon: 'vpn_key' }

  const dark = !!special || forceDark;

  return(
    <Layout.Div
      mt={2}
      mr={2}
      style={{display: 'inline-block'}}
      width={special ? longWidth : height}
      height={height}
      hov_point
      relative
      // sexyShadow={!!dark}
    >
      <BkgContainer dark={dark} logoUrl={logoUrl}>
        <Clickable action={mkPath(app)}>
          <TitleView
            app={app}
            dark={dark}
            special={special}
          />
          <LogoAndSummaryView
            app={app}
            dark={dark}
            special={special}
          />
          <Text.StatusTag
            mt='15px'
            borderEmotion={dark ? 'transparent' : 'lightGrey'}
            borderWidth={'.5px'}
            emotion={dark ? 'white' : null}
            bkgEmotion={dark ? 'black' : 'calmBeige'}
            ptb='4px'
            pb='3px'

          >
            { price }
          </Text.StatusTag>
        </Clickable>
      </BkgContainer>
    </Layout.Div>
  )
}

function BkgContainer({logoUrl, dark, children}){
  return(
    <Layout.Div
      pt='15px'
      pb='15px'
      plr='16px'
      hov_bkgEmotion={dark ? 'black' : 'calmBeige'}
      bkgEmotion={dark ? 'primaryBkg' : 'white'}
      borderRadius='4.5px'
      borderWidth={'.5px'}
      borderEmotion='lightGrey'
      >
      { children }
    </Layout.Div>
  )
}

function TitleView({app, dark, special}){
  const { name } = app;

  return(
    <Layout.Div flex style={{justifyContent: 'space-between'}}>
      <Layout.Div>
        <Text.H2
          fontSize={'15px'}
          bold
          emotion={dark ? 'contrastFont' : 'primaryBkg'}>
          { name }
        </Text.H2>
        <Text.P
          calm={!dark}
          emotion={dark && 'lightGrey'}
          mt={.8}>
          By Softcorp Inc
        </Text.P>
      </Layout.Div>
      <Layout.Div>
        { !!special &&
        <Layout.Div flex align='center'>
          <Text.P
            bold
            emotion='lightGrey'>
            { special.text }
          </Text.P>
          <Text.Icon
            name={special.icon || 'military_tech'}
            emotion='warning2'
            size={.9}
            ml={.7}
          />
        </Layout.Div>
        }
      </Layout.Div>
    </Layout.Div>
  )
}

function LogoAndSummaryView({app, dark, special}){
  const { logoUrl, info, oneLiner } = app;
  return(
    <Layout.Div flex mt='16px'>
      <Img.Img
        height='63px'
        src={logoUrl}
      />
      <Text.P
        clamp={3}
        calm={!dark}
        emotion={dark && 'lightGrey'}
        maxHeight='80px'
        fontSize='12px'
        mt='3px'
        ml={1}>
        { special ? info :  oneLiner }
      </Text.P>
    </Layout.Div>
  )
}

export const RepeatingImages = styled(Layout.Div)`
  background-image: ${p => `url(${p.src})`};
  background-repeat: space space;
  background-size: 60px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const OpaqueCover = styled(Layout.Div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: ${p => (p.opacity || '.99').toString()};
  &:hover {
  opacity: 1;
    ${p => heavyShadow(p,  {heavyShadow: true})}
  }
`;
