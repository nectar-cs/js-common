import React, {Fragment} from 'react'
import Layout from "../styles/layout-styles";
import Text from "../styles/text-styles";
import Table from "../styles/table-styles";

function View({panelTopProps, tableProps, children, ...rest}){
  return(
    <Layout.Div {...rest}>
      <PanelTop {...panelTopProps}/>
      <Layout.PanelBot>
        <LocalTable {...tableProps}>
          { children }
        </LocalTable>
      </Layout.PanelBot>
    </Layout.Div>
  )
}

function PanelTop({title, titleProps, ...rest}){
  return(
    <Layout.PanelTop
      ptb={.4}
      bkgEmotion='barelyGrey'
      {...rest}
    >
      <Text.H3
        bold
        calm
        ptb={.7}
        {...titleProps}
      >
        {title}
      </Text.H3>
    </Layout.PanelTop>
  )
}

function LocalTable({children, ...rest}){
  return (
    <Table.Table innerborder='wtfcss' ml={-.25} {...rest}>
      { children }
    </Table.Table>
  )
}

function NameCell({title, subtitle, width, children, titleProps, subtitleProps}){
  return(
    <td style={{width}}>
      <Layout.Div style={{width, padding: "10px 10px 10px 0"}}>
        { (children || []).length === 0 && (
          <Fragment>
            <Text.P
              fair
              bold
              style={{whiteSpace: 'nowrap'}}
              {...titleProps}
            >
              { title }
            </Text.P>

            <Text.P
              calm
              mt={.4}
              {...subtitleProps}
            >
              { subtitle }
            </Text.P>
          </Fragment>
        ) }
        { children }
      </Layout.Div>
    </td>
  )
}

function ValueCell({children}){
  return(
    <td>
      <Layout.Div padded>
        { children }
      </Layout.Div>
    </td>
  )
}

// noinspection JSUnusedGlobalSymbols
export default {
  View,
  Table: LocalTable,
  NameCell,
  ValueCell,
  PanelTop
}

NameCell.defaultProps = {
  width: '220px'
}
