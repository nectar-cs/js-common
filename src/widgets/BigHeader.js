import React from 'react'
import Layout from "../styles/layout-styles";
import Img from "../styles/img-styles";
import Text from "../styles/text-styles";

export default function BigHeader({height, title, Title, Subtitle, graphicName}){
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
        width='100%'
        height={height}
        relative
        ml={1.22}>
        { title && (
          <Text.H1
            fontSize='28px'
            absolute
            top={1.7}>
            { title }
          </Text.H1>
        ) }
        { !!Title && (
          <Title/>
        ) }
        <Layout.Div
         absolute
         bottom={.5}>
          <Subtitle/>
        </Layout.Div>
      </Layout.Div>
    </Layout.Div>
  )
}

BigHeader.defaultProps = {
  height: '80px'
}
