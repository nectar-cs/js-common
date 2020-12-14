import React from 'react'
import Layout from "../../styles/layout-styles";
import Text from "../../styles/text-styles";
import Img from "../../styles/img-styles";
import styled from 'styled-components'
import {heavyShadow} from "../../styles/constants";

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
  opacity: ${p => (p.opacity || '.985').toString()};
  &:hover {
  opacity: 1;
    ${p => heavyShadow(p,  {heavyShadow: true})}
  }
`;

export function BigStoreCard(props){
  const { callback, app } = props;
  const { name, info, logoUrl, identifier, prices, oneLiner, activePromo } = app;
  const dark = activePromo;

  const bkgEmotion = dark ? "#252a34" : 'white';

  return(
    <Layout.Div
      onClick={_ => callback(identifier)}
      mt={2}
      mr={2}
      style={{display: 'inline-block'}}
      width={activePromo ? '484px' : '230px'}
      // width='230px'
      // width='484px'
      height='230px'
      hoverPoint
      relative
      sofa
      sexyShadow={dark}>
      <RepeatingImages
        src={logoUrl}
        sofa
        sexyShadow={dark}>
        <OpaqueCover
          sofa
          emotion={bkgEmotion}
          padded
          opacity={!dark && .95}
          sexyShadow
        >
          <Layout.Div
            mt={1.5}
            ml={.7}>
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
                { dark &&
                  <Layout.Div flex align={'center'}>
                    <Text.P
                      emotion={'lightGrey'}>
                      Featured
                    </Text.P>
                    <Text.Icon
                      name={'military_tech'}
                      emotion={'warning2'}
                      size={.9}
                      ml={.7}
                    />
                  </Layout.Div>
                }
              </Layout.Div>
            </Layout.Div>
            <Layout.Div flex mt={1.4}>
              <Img.Img
                height={'80px'}
                src={logoUrl}
              />
              <Text.P
                clamp={3}
                calm={!dark}
                emotion={dark && 'lightGrey'}
                maxHeight={'80px'}
                mt={.7}
                ml={1}>
                { activePromo ? info :  oneLiner }
              </Text.P>
            </Layout.Div>
            <Text.BorderedStatusTag
              mt={1}
              emotion={dark ? 'white' : 'primaryBkg'}>
              $1,000 - $10,000
            </Text.BorderedStatusTag>
          </Layout.Div>
        </OpaqueCover>
      </RepeatingImages>
    </Layout.Div>
  )
}
