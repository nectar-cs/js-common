import React from 'react'
import Layout from "../../styles/layout-styles";
import Text from "../../styles/text-styles";
import Img from "../../styles/img-styles";

const size = '18px';

export default function LittleLabel({graphicType, graphicName, text}){
  return(
    <Layout.Div
      rouded
      padded
      mt={1}
      mr={1.1}
      align={'center'}
      emotion='soothing'
      flex>
      { graphicType === 'icon' &&
        <Text.Icon
          size={.9}
          emotion={'hipBlue'}
          name={graphicName}
        />
      }
      { graphicType === 'image' &&
        <Img.Img
          mb={.2}
          height={size}
          src={graphicName}
        />
      }
      <Text.P ml={.5}>
        {text}
      </Text.P>
    </Layout.Div>
  )
}
