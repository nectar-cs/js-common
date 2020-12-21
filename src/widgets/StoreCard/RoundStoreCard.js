import React from 'react'
import Layout from "../../styles/layout-styles";
import Img from "../../styles/img-styles";
import Text from "../../styles/text-styles";

export default function RoundStoreCard(props){
  const { callback, app } = props;
  const { name, info, logoUrl, identifier, prices, oneLiner, activePromo } = app;
  const imgSize = '96px';
  return(
    <Layout.CenteringDivY
      mr={9}
      onClick={_ => callback(identifier)}
      hov_point>
      <Img.Img
        borderRadius='50%'
        emotion='primaryColor'
        sexyShadow
        src={logoUrl}
        height={imgSize}
        width={imgSize}
        centerCrop
      />
      <Text.P bold fontSize={'15px'} mt={1}>
        { name }
      </Text.P>
    </Layout.CenteringDivY>
  )
}
