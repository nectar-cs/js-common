import React from 'react'
import Layout from "../../styles/layout-styles";
import Text from "../../styles/text-styles";
import Img from "../../styles/img-styles";
import constants from "./constants";

export function GenericGlanceContentView(props: Props){
  const { bigTextSize } = constants.dims;
  const { value, icon, iconEmotion, image } = props.spec;

  const imageSize = '40px';
  return(
    <Layout.Div mt={1}>
      <Layout.CenteringDiv>
        <Layout.CenteringDivY>
          { icon && (
            <Text.Icon
              name={icon}
              size={1.40}
              emotion={iconEmotion || 'primaryColor'}
            />
          ) }
          { image && (
            <Img.Img
              src={image}
              width={imageSize}
              height={imageSize}
            />
          )}
          { value && (
            <Text.P
              mt={.6}
              calm
              fontSize={bigTextSize}>
              { value }
            </Text.P>
          ) }
        </Layout.CenteringDivY>
      </Layout.CenteringDiv>
    </Layout.Div>
  )
}

type Spec = {

}

type Props = {
  spec: Spec
}
