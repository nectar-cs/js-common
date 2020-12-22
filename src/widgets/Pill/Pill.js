//@flow
import React from 'react'
import S from './PillStyles'
// noinspection ES6PreferShortImport
import {colorKeys} from './../../styles/constants'

function Letters({letters}){
  let letterSet;
  if(Array.isArray(letters))
    letterSet = letters;
  else letterSet = Object.entries((letters || {}));

  return letterSet.map((letter, i) => (
    <S.Letter emotion={letter[1]} key={i}>
      { letter[0] }
    </S.Letter>
  ))
}

export default function Pill(props: Props){
  const length = props.letters.length;
  const emotion = props.emotion;

  return(
    <div>
      <S.Container>
        <S.Text
          calm
          childCount={length}
          >
          {props.text}
        </S.Text>
        <Letters letters={props.letters}/>
      </S.Container>
    </div>
  )
}

type Props = {
  text: string,
  emotion?: string,
  letters: Array<string>
}

Pill.defaultProps = {
  emotion: colorKeys.calmTextBkg,
  letters: []
}
