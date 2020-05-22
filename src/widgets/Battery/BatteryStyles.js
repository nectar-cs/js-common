import styled from 'styled-components';
import React from "react";

const widthToHeightRatio = .64;

function height(p){
  if(p.height) return p.height;
  return (p.size || 1) * 18;
}

function borderRad(p){
  const computedHeight = height(p);
  if(computedHeight <= 18)
    return "3px";
  if(computedHeight <= 35)
    return "3.5px";
  if(computedHeight <= 50)
    return "4.8px";
  else
    return "6.5px";
}

function width(p){
  return height(p) * widthToHeightRatio;
}

const Container = styled.div`
  height: ${p => height(p)}px;
  width: ${p => width(p)}px;
  position: relative;
`;

const BatteryPart = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  border-radius: ${p => borderRad(p)};
`;

const OuterBattery = styled(BatteryPart)`
  background: ${p => p.theme.colors.primaryColor};
`;

const InnerBattery = styled(BatteryPart)`
  background: ${p => p.color || 'green'};
  height: ${p => p.pct}%;
  border-radius: ${p => `0 0 ${borderRad(p)} ${borderRad(p)}`};
`;

const S = {
  Container,
  OuterBattery,
  InnerBattery
};
export default S;
