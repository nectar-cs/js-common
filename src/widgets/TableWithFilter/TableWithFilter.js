import React from "react";
import Layout from "../../styles/layout-styles";
import Text from "../../styles/text-styles";
import Input from "../../styles/input-styles";
import Table from "../../styles/table-styles";


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

function MainTable({data, ItemRow, ItemHeader}){
  return(
    <Layout.Div width={'calc(100% - 330px)'} ml={2}>
      <Layout.Div padded sofa lightBorder>
        <Table.Table mt={0}>
          <ItemHeader/>
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
      <MainTable
        data={props.data}
        ItemHeader={props.ItemHeader}
        ItemRow={props.ItemRow}
      />
      <FilterBox/>
    </Layout.Div>
  )
}

type Props = {
  data: Array<any>,
  ItemRow: any,
  ItemHeader: any,
}

