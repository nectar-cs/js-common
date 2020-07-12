//@flow
import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import {Ball, BallContainer, BallText, Inner, Line, Outer} from "./Style";
import Text from "./../../styles/text-styles";
import useDimensions from "react-use-dimensions";
import {theme} from "./../../styles/constants";

function ballColor(index, onStepIndex){

  if(index === onStepIndex){
    return theme.colors.primaryColor;
  }

  else if(index <= onStepIndex){
    return theme.colors.cool;
  }
  else {
    return '#d6d6d6';
  }
}

function Decider({i, ref, children}){
  if(i === 0){
    return(
      <BallContainer ref={ref}>
        { children }
      </BallContainer>
    )
  } else {
    return(
      <BallContainer>
        { children }
      </BallContainer>
    )
  }
}

export default function Stepper(props: Props){
  const [ref, stepContainerDims] = useDimensions();

  return(
    <Outer>
      <Line offset={stepContainerDims.width / 2}/>
      <Inner>
        { props.steps.map((stepDesc, i) => (
          <BallContainer ref={ref}>
            <Ball color={ballColor(i, props.onStepIndex)}>
              <BallText>
                { i < props.onStepIndex &&
                  <Text.Icon
                    mt={.19}
                    name={'done'}
                    emotion={'contrastFont'}
                    size={.4}
                    bold
                  />
                }
              </BallText>
            </Ball>
            <Text.P
              calm
              bold={i === props.onStepIndex}
              mt={.76}>
              {stepDesc.name}
            </Text.P>
          </BallContainer>
        )) }
      </Inner>
    </Outer>
  )
}

type Props = {
  steps: [any],
  onStepIndex: number
};
