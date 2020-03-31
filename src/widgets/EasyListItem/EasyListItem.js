import React from 'react'
import S from './EasyListItemStyles';
import Layout from '../../styles/layout-styles'
import Text from '../../styles/text-styles'

export function EasyListItem(props: Props){
  const { title, subtitle, iconName } = props;
  const { isSelected, callback } = props;
  return(
    <S.FlavorItem selected={isSelected} onClick={callback}>
      <Layout.TextLine>
        <Text.Icon name={iconName} size={1.2}/>
        <Text.P lm={0.5} mt={0.7} emotion='primaryColor' kind='little-title'>
          {title}
        </Text.P>
      </Layout.TextLine>
      <Text.P mt={1}>{subtitle}</Text.P>
    </S.FlavorItem>
  )
}

type Props = {
  callback: void => void,
  title: string,
  subtitle: string,
  isSelected: boolean,
  iconName: string
}
