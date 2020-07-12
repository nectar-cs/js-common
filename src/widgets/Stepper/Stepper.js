//@flow
import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import {Ball, BallContainer, Inner, Line, Outer} from "./Style";
import Text from "./../../styles/text-styles";
import useDimensions from "react-use-dimensions";

export default function Stepper(props: Props){
  const [ref, stepContainerDims] = useDimensions();
  console.log(stepContainerDims.width);

  return(
    <Outer>
      <Line offset={stepContainerDims.width / 2}/>
      <Inner>
        <BallContainer ref={ref}>
          <Ball/>
          <Text.P mt={1}>Step 1</Text.P>
        </BallContainer>
        <BallContainer>
          <Ball/>
          <Text.P mt={1}>Step 1</Text.P>
        </BallContainer>
        <BallContainer>
          <Ball/>
          <Text.P mt={1}>Step 1</Text.P>
        </BallContainer>
        <BallContainer>
          <Ball/>
          <Text.P mt={1}>Step 1</Text.P>
        </BallContainer>
        <BallContainer>
          <Ball/>
          <Text.P mt={1}>Step 1</Text.P>
        </BallContainer>
      </Inner>
    </Outer>
  )
}

type Props = {
  steps: [str]
};
