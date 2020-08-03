import React from "react";
import Text from "../../styles/text-styles";
import Layout from "../../styles/layout-styles";

export default function SortableHeaderCell(props: Props){
  const { id, name, callback, currentSorter } = props;
  const { attr: sorterAttr, dir: sorterDir } = currentSorter || {};
  const isCrt = !!id && id === sorterAttr;

  return(
    <th>
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
          name={sorterDir === 'asc' ? 'north' : 'south'}
          size={.68}
          mt={-.15}
          ml={.2}
        />
      </Layout.Div>
    </th>
  )
}

type Props = {
  id?: string,
  name: string,
  currentSorter: any,
  callback: string => void
}
