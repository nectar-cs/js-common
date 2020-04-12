//@flow
import React from 'react'
import S from './PillStyles'
import {colorKeys} from '../..'

function Letters({letters}){
  return (letters || []).map(letter => (
    <S.Letter emotion={letter.e}>
      { letter.c }
    </S.Letter>
  ))
}

export default function Pill(props: Props){
  const length = (props.letters || []).length;
  const emotion = props.emotion || colorKeys.contrastColor;

  return(
    <S.Container>
      <S.Text
        childCount={length}
        emotion={emotion}>
        {props.text}
      </S.Text>
      <Letters letters={props.letters}/>
    </S.Container>
  )
}

type Props = {
  text: string,
  emotion: string,
  letters: Array<string>
}
