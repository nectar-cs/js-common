import React from 'react';
import { S } from './AddNewStyles';

export function AddNew({children, ...props}: Props) {
  return (
    <S.Layout onClick={props.action}>
      <S.Icon className="material-icons">add_circle_outline</S.Icon>
      {props.children}
    </S.Layout>
  );
}

type Props = {
  action: ?any,
};
