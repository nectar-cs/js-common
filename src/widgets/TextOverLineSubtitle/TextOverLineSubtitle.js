//@flow
import React from 'react';
import S from './Styles';

export function TextOverLineSubtitle(props: Props) {
  const { text, lineProps, ...rest } = props;
  return (
    <S.HorizontalBoxWrapper>
      <S.HorizontalLine {...(lineProps || {})}/>
      <S.Title {...rest}>
        {text}
      </S.Title>
    </S.HorizontalBoxWrapper>
  );
}

type Props = {
  text: string,
};
