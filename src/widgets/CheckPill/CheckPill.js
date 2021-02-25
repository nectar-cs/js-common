import React from "react";
import Layout from "../../styles/layout-styles";
import Img from "../../styles/img-styles";
import Text from "../../styles/text-styles";
import Input from "../../styles/input-styles";

export default function CheckPill({img, text, checked, callback}) {
  return(
    <Layout.Div
      flex
      onClick={_ => callback(text)}
      hov_bkgEmotion='soothing'
      bkgEmotion={checked ? 'calmBeige' : null}
      hov_point
      mt={.9}
      pr='10px'
      pl='10px'
      pt='1.5px'
      pb='1.5px'
      align='center'
      borderEmotion='inputBorderGrey'
      mr={0.0}
      borderRadius='20px'>
      { img && (
        <Img.Img
          height='22px'
          width='auto'
          src={img}
        />
      ) }
      <Text.P
        ml={.6}>
        {text}
      </Text.P>
      <Input.Checkbox
        ml={.6}
        checked={checked}
      />
    </Layout.Div>
  )
}
