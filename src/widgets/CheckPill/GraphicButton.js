import React from 'react'
import Layout from "../../styles/layout-styles";
import Img from "../../styles/img-styles";
import Text from "../../styles/text-styles";
import Clickable from "../Clickable";

export function GraphicButton(props) {
  const {
    graphicType,
    graphic,
    text,
    action,
    textProps,
    graphicProps,
    ...rest
  } = props;

  return(
    <Clickable action={action}>
      <Layout.Div
        flex
        hov_bkgEmotion='soothing'
        hov_point
        pr='10px'
        pl='10px'
        pt='4.5px'
        pb='4.5px'
        align='center'
        borderEmotion="#DCDCDC"
        borderWidth='1px'
        mr={0.0}
        borderRadius='20px'
        {...rest}
      >
        { graphicType === 'image' && (
          <Img.Img
            height='22px'
            width='auto'
            src={graphic}
            {...graphicProps}
          />
        ) }
        { graphicType === 'icon' && (
          <Text.Icon
            textAlign='center'
            size={.8}
            name={graphic}
            {...graphicProps}
          />
        ) }
        <Text.P ml={.4} {...textProps}>
          {text}
        </Text.P>
      </Layout.Div>
    </Clickable>
  )
}

GraphicButton.defaultProps = {
  graphicType: 'icon',
  graphic: 'help_outline'
}
