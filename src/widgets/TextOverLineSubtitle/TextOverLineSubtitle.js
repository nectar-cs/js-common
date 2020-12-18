//@flow
import React from 'react';
import S from './Styles';
import Layout from "../../styles/layout-styles";

export function TextOverLineSubtitle(props: Props) {
  const { text, lineProps, ...rest } = props;
  return (
    <S.HorizontalBoxWrapper>
      <Layout.Div
        absolute
        top='50%'
        width='100%'
        height='1.0px'
        emotion={'cool'}
        {...lineProps}
      />
      <S.Title {...rest}>
        {text}
      </S.Title>
    </S.HorizontalBoxWrapper>
  );
}

type Props = {
  text: string,
};
