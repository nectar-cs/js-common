import React from "react";
import Layout from "../../styles/layout-styles";
import Text from "../../styles/text-styles";

const topHeight = '30px';
const bottomHeight = '39px';

export default function GlanceView(props){
  const { title, legend, direction, legendIcon, legendEmotion } = props;
  const { size: viewSize, children } = props;

  return(
    <Layout.Div
      mr={0}
      mb={1.2}
      width={viewSize}
      height={viewSize}
      borderEmotion='grey3'
      hov_borderEmotion='primaryBkg'
      hov_point
      borderWidth='1px'
      relative
      borderRadius='4px'>
      <Layout.Div
        absolute
        height={topHeight}
        width='100%'
        top={0}
        >
        <Text.P
          fontSize='14px'
          bold
          mt='12px'
          ml='10px'
          noSpill
          calm>
          { title }
        </Text.P>
      </Layout.Div>

      <Layout.Div
        pt={2}
        absolute
        bkgEmotion={null}
        left='12px'
        right='12px'
        top={topHeight}
        bottom={bottomHeight}>
        { children }
      </Layout.Div>

      <Layout.Div
        width='100%'
        absolute
        height={bottomHeight}
        bottom={0}>
        <Layout.Div
          absolute
          bottom='9px'
          centered
          iFlex>
          <Text.P
            noSpill
            calm
            bold>
            {legend}
          </Text.P>
          { direction && (
            <Text.Icon
              emotion={direction === 'up' ? 'milGreen' : 'warning2'}
              ml={.65}
              size={.89}
              bold
              style={{transform: `rotate(${direction === 'up' ? 270 : 90}deg)`}}
              name='play_arrow'
            />
          )}
          { legendIcon && (
            <Text.Icon
              emotion={legendEmotion || 'secondaryFont'}
              ml={.45}
              mt={.1}
              size={.70}
              name={legendIcon}
            />
          )}
        </Layout.Div>
      </Layout.Div>
    </Layout.Div>
  )
}

GlanceView.defaultProps = {
  size: '200px'
}
