import React from 'react'
import Layout from "../../styles/layout-styles";
import Img from "../../styles/img-styles";
import Text from "../../styles/text-styles";
import styled from 'styled-components'
import {heightAndWidth} from "../../styles/constants";

const objectSizes = '32px';

const GCP_BASE = "https://storage.googleapis.com/";
const IMG_BASE = GCP_BASE + "nectar-mosaic-public/images";

const Outer = styled(Layout.Div)`
  position: fixed;
  ${p => heightAndWidth(p, {
    width: p.theme.dims.sideBarWidth
  })}
`;

export default function SlickBar(){
  return(
    <Outer
      top={0}
      bottom={0}
      left={0}
      pt={1}
      bkgEmotion='primaryBkg'>
      <Layout.Div relative height={'100%'}>
        {/*<Img.Img*/}
        {/*  src={`${IMG_BASE}/nectar-tomato.png`}*/}
        {/*  style={{display: 'block'}}*/}
        {/*  width={objectSizes}*/}
        {/*  height={objectSizes}*/}
        {/*  ml='auto'*/}
        {/*  mr='auto'*/}
        {/*/>*/}
        <Text.Icon
          // mt={4}
          size={1.99}
          ml='auto'
          mr='auto'
          style={{display: 'block', textAlign:'center'}}
          emotion='grey3'
          name='apps'
        />

        {/*<Layout.Div*/}
        {/*  mt={2.8}*/}
        {/*  mb={2}*/}
        {/*  height={'2px'}*/}
        {/*  // emotion={'grey3'}*/}
        {/*  width={'70%'}*/}
        {/*  ml={'auto'}*/}
        {/*  mr={'auto'}*/}
        {/*  style={{display: 'block'}}*/}
        {/*/>*/}

        <Img.Img
          mt={2}
          src={'https://cdn.freebiesupply.com/logos/large/2x/elastic-elasticsearch-logo-png-transparent.png'}
          style={{display: 'block'}}
          width={objectSizes}
          height={objectSizes}
          ml='auto'
          mr='auto'
        />
        <Text.P style={{textAlign: 'center'}} hacker fontSize={'10px'} emotion={'lightGrey'}>
          Running
        </Text.P>

        <Img.Img
          mt={2}
          src={'https://svgur.com/i/7RY.svg'}
          style={{display: 'block'}}
          width={objectSizes}
          height={objectSizes}
          ml='auto'
          mr='auto'
        />
        <Text.P style={{textAlign: 'center'}} hacker fontSize={'10px'} emotion={'lightGrey'}>
          Broken
        </Text.P>

        <Img.Img
          mt={2}
          src={'https://svgur.com/i/7RY.svg'}
          style={{display: 'block'}}
          width={objectSizes}
          height={objectSizes}
          ml='auto'
          mr='auto'
        />
        <Text.P style={{textAlign: 'center'}} hacker fontSize={'10px'} emotion={'lightGrey'}>
          Setup
        </Text.P>

        <Img.Img
          hoverPoint
          borderRadius='50%'
          centered
          centerCrop
          absolute
          bottom={3}
          width={objectSizes}
          height={objectSizes}
          src={'https://www.pngfind.com/pngs/m/114-1146554_girl-avatar-png-pic-female-avatar-icon-transparent.png'}
        />

        <Text.Icon
          absolute
          centered
          bottom={9}
          size={1.7}
          style={{textAlign:'center'}}
          emotion='grey3'
          name='contacts'
        />


      </Layout.Div>
    </Outer>
  )
}

