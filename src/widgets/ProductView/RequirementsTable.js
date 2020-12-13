import React from 'react'
import Utils from "../../utils/Utils";
import Table from "../../styles/table-styles";
import Layout from "../../styles/layout-styles";
import Text from "../../styles/text-styles";
import humanizeString from "humanize-string";
import inferGraphic from "./graphicInference";
import LittleLabel from "./LittleLabel";

export default function RequirementsTable({requirements}){
  const entries = Object.entries(requirements);

  return(
    <Table.Table innerborder={'wtfcss'} ml={-.25}>
      { entries.map((category, i) => (
        <CategoryRow
          key={i}
          reqName={category[0]}
          requirements={category[1]}
        />
      )) }
    </Table.Table>
  )
}

function CategoryRow({reqName, requirements}){
  return(
    <tr>
      <NameCell name={humanizeString(reqName)} description={''}/>
      <RequirementsCell type={reqName} requirements={requirements}/>
    </tr>
  )
}

function RequirementsCell({type, requirements}){
  return(
    <td>
      <Layout.Div flex ml={1} mt={-1} style={{flexWrap: 'wrap'}}>
        { requirements.map((req, i) => (
          <RequirementView
            key={i}
            type={type}
            requirement={req}
          />
        )) }
      </Layout.Div>
    </td>
  )
}

function RequirementView({type, requirement}){
  const { graphicType, graphicName } = inferGraphic(type, requirement);
  return(
    <LittleLabel
      graphicType={graphicType}
      graphicName={graphicName}
      text={requirement}
    />
  )
}

function NameCell({name, description}){
  const width = "220px";
  return(
    <td style={{width: width}}>
      <Layout.Div style={{width: width, padding: "10px 0"}}>
        <Text.P bold style={{whiteSpace: 'nowrap'}}>{name}</Text.P>
        <Text.P calm mt={.4}>{description}</Text.P>
      </Layout.Div>
    </td>
  )
}
