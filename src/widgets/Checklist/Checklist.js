//@flow
import React from 'react';
import S from './ChecklistStyles';

function ChecklistItem(props: CheckItem) {
  let thirdItem;
  if (props.status === 'working') thirdItem = <S.Spinner ml={2} size={0.5} />;
  else if (props.status === 'done')
    thirdItem = (
      <S.Icon emotion={'good'} className="material-icons">
        check
      </S.Icon>
    );
  else if (props.status === 'failed')
    thirdItem = <S.Icon className="material-icons">close</S.Icon>;
  else thirdItem = null;

  return (
    <li>
      <S.Item>
        <S.Name>{props.name}: </S.Name>
        <S.Detail>{props.detail}</S.Detail>
        {thirdItem}
      </S.Item>
    </li>
  );
}

export default function Checklist(props: CheckItems) {
  const itemComponents = props.items.map(item => (
    <ChecklistItem key={item.name} {...item} />
  ));
  return <S.List>{itemComponents}</S.List>;
}

type CheckItems = {
  items: Array<CheckItem>
}

type CheckItem = {
  name: string,
  detail: string,
  status: 'working' | 'done' | 'failed' | 'idle'
}
