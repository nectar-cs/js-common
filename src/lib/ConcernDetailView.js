import React from 'react'
import AttrsTable from "../widgets/AttrsTable";
import Layout from "../styles/layout-styles";
import PanelRenderer from "./PanelRenderer";
import Text from "../styles/text-styles";

export default function ConcernDetailView(props){
  const { panels } = props;
  return(
    <Layout.Div>
      <TitleView title='Deployments / pickle-rick'/>
      { panels.map((panelDesc, i) => (
        <AttrPanel
          key={i}
          desc={panelDesc}
        />
      )) }
    </Layout.Div>
  )
}

function AttrPanel({desc}){
  return(
    <AttrsTable.View
      mt={3}
      panelTopProps={{title: desc.title}}
    >
      { desc.attributes.map((attr, i) => (
        <tr key={i}>
          <AttrsTable.NameCell title={attr.title}/>
          <AttrsTable.ValueCell>
            <PanelRenderer.BaseRenderer desc={attr.value} />
          </AttrsTable.ValueCell>
        </tr>
      )) }
    </AttrsTable.View>
  )
}

function TitleView({title}){
  return(
    <Layout.Div flex>
      <Text.Icon  name='arrow_back' emotion='warning2'/>
      <Text.H1 bold mt='1px' ml='12px'>{title}</Text.H1>
    </Layout.Div>
  )
}
