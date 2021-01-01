//@flow
import React from 'react';
import S from './Styles';
import Layout from "../../styles/layout-styles";

export function TextOverLineSubtitle(props: Props) {
  const { text, lineProps, outerProps, ...rest } = props;
  return (
    <Layout.Div
      relative
      width='100%'
      height='40px'
      mt='20px'
      mb='12px'
      {...outerProps}>
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
    </Layout.Div>
  );
}

type Props = {
  text: string,
};
