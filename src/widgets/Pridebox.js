import React from 'react'
import Layout from "../styles/layout-styles";
import styled from 'styled-components'
import Utils from "../utils/Utils";
import Img from "../styles/img-styles";
import Text from "../styles/text-styles";

export const RepeatingImages = styled(Layout.Div)`
  background-image: ${p => `url(${p.src})`};
  background-repeat: space space;
  background-size: 115px;
`;

const OpaqueCover = styled(Layout.Div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.92);
`;

const nectarImgSize = '40px';

export default function PrideBox({title, children}){
  return(
    <RepeatingImages
      width='100%'
      height='100%'
      bkgEmotion='black'
      src={Utils.image('blurred-tile.png')}
      absolute
      trbl="0 0 0 0">
      <OpaqueCover
        width='100%'
        height='100%'
        absolute
        trbl="0 0 0 0">
        <Layout.Div
          style={{transform: 'translate(-50%)'}}
          absolute
          top='40%'
          left='50%'>
          <Layout.Div flex align='center'>
            <Img.Img
              width={nectarImgSize}
              height={nectarImgSize}
              src={Utils.image('nectar-tomato.png')}
            />
            <Text.P
              ml={1.4}
              bold
              fontSize='24px'
              emotion='white'>
              {title}
            </Text.P>
          </Layout.Div>
          { children }
        </Layout.Div>
      </OpaqueCover>
    </RepeatingImages>
  )
}
