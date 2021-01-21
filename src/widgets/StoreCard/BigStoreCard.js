// noinspection NpmUsedModulesInstalled
import styled from 'styled-components'
import React from 'react'
import Layout from "../../styles/layout-styles";
import Text from "../../styles/text-styles";
import Img from "../../styles/img-styles";
import {heavyShadow} from "../../styles/constants";
import ModestLink from "../ModestLink";

export function BigStoreCard(props){
  const { app, mkPath, forceDark } = props;
  const { logoUrl, special } = app;
  const dark = !!special || forceDark;

  return(
    <Layout.Div
      mt={2}
      mr={2}
      style={{display: 'inline-block'}}
      width={!!special ? '484px' : '230px'}
      height='230px'
      hov_point
      relative
      sexyShadow={!!dark}>
      <BkgContainer dark={dark} logoUrl={logoUrl}>
        <ModestLink to={mkPath(app)}>
          <Layout.Div
            mt={1.5}
            ml={.7}>
            <TitleView
              app={app}
              dark={dark}
            />
            <LogoAndSummaryView
              app={app}
              dark={dark}
            />
            <Text.BorderedStatusTag
              mt={1}
              borderEmotion={dark ? 'lightGrey' : 'lightGrey'}
              emotion={dark ? 'white' : 'primaryBkg'}>
              $1,000 - $10,000
            </Text.BorderedStatusTag>
          </Layout.Div>
        </ModestLink>
      </BkgContainer>
    </Layout.Div>
  )
}

function BkgContainer({logoUrl, dark, children}){
  const bkgEmotion = dark ? "#252a34" : 'white';
  return(
    <RepeatingImages
      src={logoUrl}
      sofa>
      <OpaqueCover
        bkgEmotion={bkgEmotion}
        padded
        opacity={!dark && .95}
        sexyShadow
        borderRadius='5px'
        shadowOpacity={dark ? null : '.1'}>
        { children }
      </OpaqueCover>
    </RepeatingImages>
  )
}

function TitleView({app, dark}){
  const { name, special } = app;

  return(
    <Layout.Div flex style={{justifyContent: 'space-between'}}>
      <Layout.Div>
        <Text.H2
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
        <Layout.Div flex align={'center'}>
          <Text.P
            bold
            emotion='lightGrey'>
            { special.text }
          </Text.P>
          <Text.Icon
            name={special.icon || 'military_tech'}
            emotion={'warning2'}
            size={.9}
            ml={.7}
          />
        </Layout.Div>
        }
      </Layout.Div>
    </Layout.Div>
  )
}

function LogoAndSummaryView({app, dark}){
  const { logoUrl, special, info, oneLiner } = app;
  return(
    <Layout.Div flex mt={1.4}>
      <Img.Img
        height='80px'
        src={logoUrl}
      />
      <Text.P
        clamp={3}
        calm={!dark}
        emotion={dark && 'lightGrey'}
        maxHeight={'80px'}
        mt={.7}
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
  opacity: ${p => (p.opacity || '.97').toString()};
  &:hover {
  opacity: 1;
    ${p => heavyShadow(p,  {heavyShadow: true})}
  }
`;
