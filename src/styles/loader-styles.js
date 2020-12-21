// noinspection NpmUsedModulesInstalled
import styled, {keyframes} from "styled-components";
import {colorKeys, commonSizeAttrs} from './constants'
import {easyColor} from "./utils";

const rotate = keyframes`
  0% {
    transform: rotate(0deg)
  }
  100%{
    transform: rotate(360deg)
  }
`;

function borderColor(p){
  return easyColor(p, p.emotion, colorKeys.primaryColor);
}

// noinspection JSUnresolvedFunction
const Spinner = styled.div`
  ${commonSizeAttrs};
  display: inline-block;
  &::after{
    content: " ";
    ${commonSizeAttrs};
    width: ${p => p.width || '26px'};
    height: ${p => p.height || '26px'};
    display: block;
    border-radius: 50%;
    border: 2px solid ${p => borderColor(p)};
    border-color: ${p => borderColor(p)} transparent ${p => borderColor(p)} transparent;
    animation: ${rotate} 1.6s linear infinite;
  }
`;

const TopRightSpinner = styled(Spinner)`
  position: absolute;
  top: 12px;
  right: -14px;
  display: ${p => (p['there'] || p['there'] === undefined) ? 'block' : 'none'};
`;

const CenteredSpinner = styled(Spinner)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

export const Loader = {
  Spinner,
  CenteredSpinner,
  TopRightSpinner
};
