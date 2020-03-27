import styled, {keyframes} from "styled-components";
import {colorKeys, resolveColor} from "./constants";

const rotate = keyframes`
  0% {
    transform: rotate(0deg)
  }
  100%{
    transform: rotate(360deg)
  }
`;

function borderColor(p){
  return resolveColor(p, p.emotion, colorKeys.primaryColor);
}

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;
  &::after{
    content: " ";
    display: block;
    width: 26px;
    height: 26px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid ${p => borderColor(p)};
    border-color: ${p => borderColor(p)} transparent ${p => borderColor(p)} transparent;
    animation: ${rotate} 1.6s linear infinite;
  }
`;

function size(p, def='medium'){
  if(!p || !p.size) p = def;
  if(p.size === 'x-small') return "12px";
  if(p.size === 'small') return "19px";
  if(p.size === 'medium') return "26px";
  if(p.size === 'large') return "40px";
}

const ModSpinner = styled(LoadingSpinner)`
  width: ${p => size(p)};
  height: ${p => size(p)};
  &:after{
    width: ${p => size(p)};
    height: ${p => size(p)};
    border-width: 2px;
  }    
`;

const TopRightSpinner = styled(ModSpinner)`
  position: absolute;
  top: 12px;
  right: -14px;
  display: ${p => (p.there || p.there === undefined) ? 'block' : 'none'};
`;

const CenteredSpinner = styled(ModSpinner)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

export const Loader = {
  ModSpinner,
  CenteredSpinner,
  LoadingSpinner,
  TopRightSpinner
};
