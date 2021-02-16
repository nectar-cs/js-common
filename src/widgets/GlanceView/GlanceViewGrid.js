import React from 'react'
// noinspection NpmUsedModulesInstalled
import styled from 'styled-components'
import {GlanceView} from './GlanceView'
import constants from "./constants";
import Layout from "../../styles/layout-styles";

const { size } = constants.dims;

export function GlanceViewGrid({allGlanceProps, ...outerProps}){
  return(
    <Container {...outerProps}>
      { allGlanceProps.map((singleGlanceProps, i) => (
        <GlanceView
          key={i}
          {...singleGlanceProps}
        />
      ))}
    </Container>
  )
}

const Container = styled(Layout.Div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, calc(${size} + 40px));
`;
