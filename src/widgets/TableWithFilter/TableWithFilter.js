import React from "react";
import Layout from "../../styles/layout-styles";
import Text from "../../styles/text-styles";
import Input from "../../styles/input-styles";
import Table from "../../styles/table-styles";
import SortableHeaderCell from "./SortableHeaderCell";

function FilterBox(){
  return(
    <Layout.TableFilterBox>
      <Layout.PanelTop sofa>
        <Text.H3>Filters</Text.H3>
      </Layout.PanelTop>
      <Layout.Div halfRounded height={'400px'} padded sofa lightBorder>
        <Layout.Div mt={1.5}>
          <Text.P calm>Name</Text.P>
          <Input.FlatInput mt={.4}/>
        </Layout.Div>
        <Layout.Div mt={1.5}>
          <Text.P calm>Chart Version</Text.P>
          <Input.FlatInput mt={.4}/>
        </Layout.Div>
      </Layout.Div>
    </Layout.TableFilterBox>
  )
}

function MainTable(props: Props){
  const { data, ItemRow, headerData } = props;
  const { sorterChangedCallback, currentSorter } = props;

  return(
    <Layout.Div width={'calc(100% - 340px)'} ml={2}>
      <Layout.Div padded sofa lightBorder>
        <Table.Table mt={0}>
          <tr>
            { headerData.map(headerInfo => (
              <SortableHeaderCell
                key={headerInfo.name}
                id={headerInfo.sortKey}
                name={headerInfo.name}
                currentSorter={currentSorter}
                callback={sorterChangedCallback}
              />
            )) }
          </tr>
          { data.map((item, i) => (
            <ItemRow
              item={item}
              key={i}
            />
          )) }
        </Table.Table>
      </Layout.Div>
    </Layout.Div>
  )
}

export default function TableWithFilter(props: Props){
  return(
    <Layout.Div height={'100%'}>
      <MainTable {...props}/>
      <FilterBox/>
    </Layout.Div>
  )
}

type Props = {
  data: Array<any>,
  ItemRow: any,
  headerData: Array<HeaderData>,
  sorterChangedCallback: void => void,
  currentSorter: any
}

type HeaderData = {
  sortKey?: string,
  name: string
}
