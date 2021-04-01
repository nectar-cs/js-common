import React, {useContext} from 'react'
import Layout from "../../styles/layout-styles";
import Text from "../../styles/text-styles";
import {theme} from './../../styles/constants'
import humanizeString from "humanize-string";
import PermsView from "../PermsView";
import LeftGutter from "./LeftGutter";
import PlansSection from "./PlansSection";
import PromoSection from "./PromoSection";
import RequirementsTable from "./RequirementsTable";
import {AppListingContext} from "./AppListingContext";
import AppListingUtils from "../../utils/appCatUtils";
import BenchmarksView from "./BenchmarksView";
import {requirementsWarning} from "./copy";


export default function ProductView({callback}){
  const app = useContext(AppListingContext).app;

  return(
    <Layout.Div flex mt={2}>
      <Layout.Div width='210px' absolute>
        <LeftGutter/>
      </Layout.Div>
      <Layout.Div
        absolute
        left='330px'
        pb='60px'
        mt={2}
        maxWidth='840px'
      >
        <PromoSection/>

        <Text.H1 mt={3.5} mb={2}>Kubernetes Requirements</Text.H1>
        <RequirementsTable
          requirements={app.requirements}
          warning={requirementsWarning}
        />

        <Text.H1 mt={6.5} mb={2}>Application Manager Features</Text.H1>
        <RequirementsTable requirements={app.kamaCapabilities}/>

        <Text.H1 mt={5} mb={2.5}>Application Manager RBAC Requests</Text.H1>
        <PermsView
          simplifiedPerms={AppListingUtils.rbac2simplified(app.rbacPolicies)}
        />

        <Text.H1 mt={4} mb={4}>Cluster Footprint</Text.H1>
        <ResourceBlocksView clusterFootprint={app.clusterFootprint}/>

        <Layout.Div height={3}/>
        {/*<BenchmarksView/>*/}

        <Text.H1 fontSize='28px' mt={6} mb={4}>Plans</Text.H1>
        <PlansSection callback={callback}/>
      </Layout.Div>
    </Layout.Div>
  )
}

function ResourceBlocksView({clusterFootprint}){
  const extra = '70px';

  const entries = Object.entries(clusterFootprint);

  return(
    <Layout.Div
      flex
      width={`calc(100% + ${extra})`}
      ml={`calc(${extra} / -2)`}>
      { entries.map((entry, i) => (
        <Layout.Div
          height='auto'
          style={{
            borderColor: theme.colors.lightGrey,
            borderStyle: `none none none ${i !== 0 ? 'solid' : 'none'}`
          }}
          width={'100%'}
        >
          <Text.P
            mt={2}
            style={{textAlign: 'center'}}
            fontSize='29px'
            >
            { entry[1] }
          </Text.P>
          <Text.P
            fontSize='13px'
            mt={2}
            style={{textAlign: 'center'}}
          >
            { humanizeString(entry[0]) }
          </Text.P>
        </Layout.Div>
      )) }
    </Layout.Div>
  )
}
