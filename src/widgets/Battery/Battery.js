import React from "react";
import S from './BatteryStyles'

export default function Battery(props: Props){
  const size = props.size || 1;
  const pct = (props.fraction || .5) * 100;
  return(
    <S.Container size={size}>
      <S.OuterBattery size={size}/>
      <S.InnerBattery size={size} pct={pct} color={color(props.fraction || .5)}/>
    </S.Container>
  )
}

function color(fraction){
  if(fraction <= .2)
    return 'green'
  if(fraction <= .4)
    return 'blue'
  if(fraction <= .6)
    return 'gold'
  if(fraction <= .8)
    return 'orange'
  else
    return 'red'
}

type Props = {
  size: number,
  fraction: number
}
