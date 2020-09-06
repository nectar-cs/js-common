//@flow
import React from "react";
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

export default function Stepper(props: Props){
  const [ref, stepContainerDims] = useDimensions();
  const offset = stepContainerDims ? stepContainerDims.width / 2 : 0;
  const { steps, setStep, onStepIndex } = props;

  return(
    <Outer>
      { !isNaN(offset) && <Line offset={offset}/> }
      <Inner>
        { steps.map((stepDesc, i) => (
          <BallContainer
            key={i}
            ref={ref}
            onClick={_ => setStep && setStep(i)}>
            <Ball color={ballColor(i, onStepIndex)}>
              <BallText>
                { i < onStepIndex &&
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
              bold={i === onStepIndex}
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
  onStepIndex: number,
  setStep?: number => void
};
