import React from "react";
import S from './BatteryStyles'

export default function Battery(props: Props){
  return(
    <S.Container {...props}>
      <S.OuterBattery {...props}/>
      <S.InnerBattery {...props} color={color(props.pct)}/>
    </S.Container>
  )
}

function color(pct){
  if(pct == null) return null;
  const fraction = parseInt(pct) / 100;
  if(fraction <= .2)
    return 'green'
  if(fraction <= .4)
    return 'dodgerblue'
  if(fraction <= .6)
    return 'gold'
  if(fraction <= .8)
    return 'orange'
  else
    return 'indianred'
}

type Props = {
  size: number,
  fraction: number,
  children: [any]
}
