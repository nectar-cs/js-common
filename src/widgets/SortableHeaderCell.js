import React from "react";
import {Layout, Text} from "nectar-gui";

export default function SortableHeaderCell(props: Props){
  const { id, name, callback, currentSorter } = props;
  const isCrt = !!id && id === currentSorter.attr;

  return(
    <td>
      <Layout.Div
        flex
        align='center'
        onClick={id && (() => callback(id))}>
        <Text.P
          bold
          hoverUnderline={!!id}
          hoverPoint={!!id}>
          {name}
        </Text.P>
        <Text.Icon
          emotion={isCrt ? 'primaryColor' : 'transparent'}
          name={currentSorter.dir === 'asc' ? 'north' : 'south'}
          size={.68}
          mt={-.15}
          ml={.2}
        />
      </Layout.Div>
    </td>
  )
}

type Props = {
  id?: string,
  name: string,
  currentSorter: any,
  callback: string => void
}
