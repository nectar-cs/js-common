//@flow
import React from 'react';
import S from './MiconStyles';

export function Micon(props: Props) {
  return (
    <S.Micon
      onClick={props.callback}
      className="material-icons"
      hack={props.hack}
      {...props}>
      {props.n}
    </S.Micon>
  );
}

type Props = {
  n: string,
  emotion: ?string,
  e: ?any,
  size: ?string,
  rotate: ?number,
  callback: ? void => void,
};
