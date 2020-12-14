import React from 'react'
import Layout from "../../styles/layout-styles";
import Text from "../../styles/text-styles";
import Table from "../../styles/table-styles";
import Pill from "../../widgets/Pill/Pill";
import {colorKeys} from './../../styles/constants'


export default function PermsView({simplifiedPerms}){
  const entries = Object.entries(simplifiedPerms);

  return(
    <Table.Table innerborder={'wtfcss'} ml={-.25}>
      { entries.map((entry, i) => (
        <CategoryRow
          key={i}
          categoryName={entry[0]}
          categoryPerms={entry[1]}
        />
      )) }
    </Table.Table>
  )
}

function EmptyResourcesCell(){
  return(
    <Layout.CenteringDiv>
      <Text.Icon name='block' emotion={'calm'} size={.9}/>
      <Text.P calm ml={.5}>Requested no Permissions</Text.P>
    </Layout.CenteringDiv>
  )
}

function NameCell({name, description}){
  const width = "220px";
  return(
    <td style={{width: width}}>
      <Layout.Div style={{width: width, padding: "10px 0"}}>
        <Text.P bold calm style={{whiteSpace: 'nowrap'}}>{name}</Text.P>
        <Text.P calm mt={.4}>{description}</Text.P>
      </Layout.Div>
    </td>
  )
}

function ResourcesCell({categoryPerms}){
  const entries = Object.entries(categoryPerms || {});
  if(entries.length > 0){
    return(
      <td>
        <Layout.Div flex ml={1} mt={-1} style={{flexWrap: 'wrap'}}>
          { entries.map((entry, i) => (
            <Layout.Div ml={1} key={i} mt={1.5}>
              <Pill
                text={entry[0]}
                letters={letters(entry[1])}
              />
            </Layout.Div>
          ))}
        </Layout.Div>
      </td>
    )
  } else return (
    <td>
      <EmptyResourcesCell/>
    </td>
  )
}

function CategoryRow({categoryName, categoryPerms}){
  const {title, description} = categoryMeta(categoryName);
  return(
    <tr>
      <NameCell name={title} description={description}/>
      <ResourcesCell categoryPerms={categoryPerms}/>
    </tr>
  )
}

const wizardProfileMetaHash = {
  $app: {
    title: "Application-Namespaced Perms",
    description: "Necessary for managing core application resources."
  },
  $cluster: {
    title: "Cluster-wide Perms",
    description: "Mostly reading the cluster state for system-checks."
  },
  $privilegeEscalating: {
    title: "Privilege Escalating Perms",
    description: "Something a little bit better here."
  }
};

function categoryMeta(key){
  return wizardProfileMetaHash[key] || {
    title: `Foreign namespace ${key}`,
    description: "Update me"
  }
}

// export function verbColor(verb){
//   return verbColorsHash[verb];
// }

export const verbColorsHash = {
  create: colorKeys.primaryColor,
  '*': colorKeys.primaryColor,
  read: colorKeys.cool,
  list: colorKeys.cool,
  get: colorKeys.cool,
  update: colorKeys.primaryColor,
  delete: colorKeys.nectar
};

function letters(verbs){
  return verbs.map(verb => {
    return [verb[0], verbColorsHash[verb]]
  });
}
