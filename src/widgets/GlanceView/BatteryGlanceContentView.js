import React from 'react'
import Layout from "../../styles/layout-styles";
import Battery from "../Battery/Battery";
import Text from "../../styles/text-styles";
import constants from "./constants";

export function BatteryGlanceContentView(props: Props){
  const { bigTextSize } = constants.dims;
  const { pct, text } = props.glance;

  return(
    <Layout.CenteringDiv mt={1.8}>
      <Layout.Div flex align='center'>
        <Battery
          size={2.60}
          pct={pct}
        />
        <Text.P
          calm
          fontSize={bigTextSize}
          ml={1}>
          { text }
        </Text.P>
      </Layout.Div>
    </Layout.CenteringDiv>
  )
}

type Thing = {

}

type Props =  {
  glance: Thing
}
