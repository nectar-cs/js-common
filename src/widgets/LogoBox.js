import React from 'react'
import ModestLink from "./ModestLink/ModestLink";
import Layout from "../styles/layout-styles";
import Img from "../styles/img-styles";
import Text from "../styles/text-styles";

const GCP_BASE = "https://storage.googleapis.com/";
const IMG_BASE = GCP_BASE + "nectar-mosaic-public/images";

export default function LogoBox({title, subtitle, ...rest}){
  return(
    <ModestLink to={'/'}>
      <Layout.Div
        absolute
        flex
        {...rest}
        >
        <Img.Img
          height='32px'
          src={`${IMG_BASE}/nectar_mark_light.png`}
        />
        <Layout.Div ml={.4} mt={-.2}>
          <Text.H3
            bold
            emotion='contrastFont'>
            { title }
          </Text.H3>
          <Text.H3
            bold
            emotion='warning2'>
            { subtitle }
          </Text.H3>
        </Layout.Div>
      </Layout.Div>
    </ModestLink>
  )
}
