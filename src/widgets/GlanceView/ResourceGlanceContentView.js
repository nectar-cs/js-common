import React from 'react'
import Layout from "../../styles/layout-styles";
import Img from "../../styles/img-styles";
import Text from "../../styles/text-styles";
// noinspection NpmUsedModulesInstalled

const imgSize = '52px';

export function ResourceGlanceContentView(props: Props){
  const spec = { ...defaultSpec, ...props.spec };

  const { graphicType, graphic } = spec;
  const { lineOne, lineTwo, lineThree } = spec;

  return(
    <Layout.Div absolute centered top='19%'>
      <Layout.Div flex align='center'>
        { graphicType === 'image' && (
          <Img.Img
            width={imgSize}
            height={imgSize}
            src={graphic}
            centerCrop
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
  graphicName: string,
  lineOne: string,
  lineTwo: string,
  lineThree: string,
  statusLabel: string,
  status: string,
  statusEmotion: string,
  humanizeStatus: boolean
}

type Props = {
  spec: Spec
}

const defaultSpec = {
  graphicType: 'image',
  statusLabel: 'Status',
  statusEmotion: null,
  humanizeStatus: true
}
