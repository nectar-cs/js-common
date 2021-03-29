import React from 'react'
import Layout from "../../styles/layout-styles";
import Img from "../../styles/img-styles";
import Text from "../../styles/text-styles";
// noinspection NpmUsedModulesInstalled


export function ResourceGlanceContentView(props: Props){
  const spec = { ...defaultSpec, ...props.spec };

  const { graphicType, graphic, graphicEmotion, small } = spec;
  const { lineOne, lineTwo, lineThree } = spec;

  const imgSize = small ? '29px' : '47px';
  const iconSize = small ? '20px' : '47px';

  return(
    <Layout.Div absolute centered top='22%'>
      <Layout.Div flex align={small ? 'default' : 'center'}>
        { graphicType === 'image' && (
          <Img.Img
            width={imgSize}
            height={imgSize}
            src={graphic}
            centerCrop
          />
        ) }
        { graphicType === 'icon' && (
          <Text.Icon
            size={small ? 1.50 : 2.78}
            emotion={graphicEmotion}
            width={iconSize}
            height={iconSize}
            name={graphic}
            pb={.7}
            pr={.8}
          />
        ) }
        <Layout.Div ml={.8}>
          <Text.P bold noSpill fontSize='12px'>
            { lineOne }
          </Text.P>
          <Text.P noSpill mt={.2} calm fontSize='12px'>
            { lineTwo }
          </Text.P>
          <Text.P noSpill mt={.2} calm fontSize='12px'>
            { lineThree }
          </Text.P>
        </Layout.Div>
      </Layout.Div>
    </Layout.Div>
  )
}

type Spec =  {
  graphicType: string,
  graphic: string,
  graphicEmotion: string,
  lineOne: string,
  lineTwo: string,
  lineThree: string,
  statusLabel: string,
  status: string,
  statusEmotion: string,
  humanizeStatus: boolean,
  small: boolean
}

type Props = {
  spec: Spec
}

const defaultSpec = {
  graphicType: 'image',
  statusLabel: 'Status',
  graphicEmotion: 'primaryColor',
  statusEmotion: null,
  humanizeStatus: true
}
