import React from 'react'
import S from './EasyListItemStyles';
import {Micon} from '../Micon/Micon';
import Layout from '../../styles/layout-styles'
import Text from '../../styles/text-styles'

export function EasyListItem(props: Props){
  const { title, subtitle, iconName } = props;
  const { isSelected, callback } = props;
  return(
    <S.FlavorItem selected={isSelected} onClick={callback}>
      <Layout.TextLine>
        <Micon n={iconName} size='m+'/>
        <Text.P2 left={0.5} top={0.7} emotion='primaryColor' kind='little-title'>
          {title}
        </Text.P2>
      </Layout.TextLine>
      <Text.P2 top={1}>{subtitle}</Text.P2>
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
