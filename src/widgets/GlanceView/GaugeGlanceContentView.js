import React, { useContext } from 'react'
// noinspection NpmUsedModulesInstalled
import { ResponsivePie } from '@nivo/pie'
import Layout from "../../styles/layout-styles";
// noinspection NpmUsedModulesInstalled
import { ThemeContext } from 'styled-components';
import Text from "../../styles/text-styles";
import {nuiUtils} from "./../../utils/NectarGuiUtils";
import {easyColor2} from "../../styles/utils";

const FILLED_PORTION_ID = 'filled_portion';
const UNFILLED_PORTION_ID = 'unfilled_portion';

export function GaugeGlanceContentView({spec}){
  const { lineOne, lineTwo, ...rest } = spec;

  return(
    <Layout.Div height='100%' mt={1}>
      <Layout.Div
        top='8%'
        bottom='11%'
        width='100%'
        absolute
        centered>
        <PieView {...rest}/>
      </Layout.Div>
      { (lineOne || lineTwo) && (
        <Layout.Div
          top='35%'
          transform='translateY(-50%)'
          centered
          absolute>
          { lineOne && (
            <Text.H1
              mt={lineTwo ? '0px' : '9px'}
              bold
              textAlign='center'>
              { lineOne }
            </Text.H1>
          )  }
          { lineTwo && (
            <Text.H4
              mt={lineOne ? '0px' : '9px'}
              textAlign='center'>
              { lineTwo }
            </Text.H4>
          ) }
        </Layout.Div>
      ) }
    </Layout.Div>
  )
}

function PieView({pct, startColor, endColor}){
  const themeContext = useContext(ThemeContext);

  function colors(slice){
    const { findInHexGradient, pureRgb2Hex } = nuiUtils;
    if(slice.id === FILLED_PORTION_ID){
      const fraction = pct / 100;
      startColor = easyColor2(themeContext, startColor, 'lightGrey');
      endColor = easyColor2(themeContext, endColor, 'primaryColor');
      const rgbResult = findInHexGradient(endColor, startColor, fraction);
      return pureRgb2Hex(rgbResult);
    }
    else if(slice.id === UNFILLED_PORTION_ID)
      return 'white';
    else
      return 'grey';
  }

  return(
    <ResponsivePie
      data={pct2data(pct)}
      margin={{ top: 2 }}
      startAngle={-140}
      endAngle={140}
      innerRadius={0.75}
      colors={colors}
      borderColor={themeContext.colors.lightGrey}
      borderWidth={1}
      enableRadialLabels={false}
      enableSliceLabels={false}
      isInteractive={false}
      legends={[]}
    />
  )
}

function pct2data(pct){
  return[
    { "id": FILLED_PORTION_ID, "value": pct },
    { "id": UNFILLED_PORTION_ID, "value": 100 - pct }
  ];
}

PieView.defaultProps = {
  startColor: 'milGreen',
  endColor: 'warning2'
}
