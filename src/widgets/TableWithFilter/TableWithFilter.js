import React from "react";
import Layout from "../../styles/layout-styles";
import Text from "../../styles/text-styles";
import Input from "../../styles/input-styles";
import Table from "../../styles/table-styles";
import SortableHeaderCell from "./SortableHeaderCell";
import TagPoolFilter from "./TagPoolFilter";

function FilterBox({filterData}){
  return(
    <Layout.TableFilterBox>
      <Layout.PanelTop sofa>
        <Text.H3>Filters</Text.H3>
      </Layout.PanelTop>
      <Layout.Div
        halfRounded
        scroll
        style={{minHeight: '400px', maxHeight: '80%', paddingBottom: '40px'}}
        padded
        sofa
        lightBorder>
        { (filterData || []).map(filter => (
          <Layout.Div mt={1.5}>
            <Text.P calm mb={.6}>{filter.name}</Text.P>
            { filter.type === 'tags' && <TagPoolFilter
              choices={filter.data}
            /> }
            { filter.type === 'string' && <Input.FlatInput
            /> }
          </Layout.Div>
        )) }
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
      <FilterBox filterData={props.filterData}/>
    </Layout.Div>
  )
}

type Props = {
  data: Array<any>,
  ItemRow: any,
  headerData: Array<HeaderData>,
  filterData: Array<FilterData>,
  sorterChangedCallback: void => void,
  currentSorter: any
}

type FilterData = {
  type: string,
  name: string,
  data: any
}

type HeaderData = {
  sortKey?: string,
  name: string
}
