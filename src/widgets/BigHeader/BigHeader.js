import React from 'react'
import Layout from "../../styles/layout-styles";
import Img from "../../styles/img-styles";
import Text from "../../styles/text-styles";

export default function BigHeader({title, subtitle, graphicName}){
  const height = '90px';
  return(
    <Layout.Div flex>
      <Img.Img
        width={height}
        height={height}
        centerCrop
        borderRadius='50%'
        src={graphicName}
      />
      <Layout.Div
        // pt='28px'
        // pb='28px'
        width={'100%'}
        height={height}
        relative
        ml={.7}>
        <Text.H1
          fontSize='28px'
          absolute
          top={1.3}>
          { title }
        </Text.H1>
        <Text.P
         absolute
         bottom={1.3}>
          { subtitle }
        </Text.P>
      </Layout.Div>
    </Layout.Div>
  )
}
