import React from  'react'
import Layout from "../../styles/layout-styles";
import Text from "../../styles/text-styles";

export function StatusGlanceContentView(props: Props){
  const { value, icon, emotion } = props.glance;

  return(
    <Layout.Div mt={2}>
      <Layout.CenteringDiv>
        <Layout.Div
          padded
          ptb={.5}
          rounded
          bkgEmotion='milGreen'
          align='center'
          iFlex>
          { icon && (
            <Text.Icon
              name={icon}
              size={1.0}
              emotion={'white'}
              mr={.5}
            />
          ) }
          <Text.P
            ml={.5}
            emotion='white'
            fontSize='21px'>
            { value }
          </Text.P>
        </Layout.Div>
      </Layout.CenteringDiv>
    </Layout.Div>
  )
}

type StatusGlanceData = {

}

type Props = {

}
