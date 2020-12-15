import React, {useContext} from 'react'
import Layout from "../../styles/layout-styles";
import Text from "../../styles/text-styles";
import {theme} from './../../styles/constants'
import Button from "../../styles/button-styles";
import humanizeString from "humanize-string";
import PermsView from "../PermsView/PermsView";
import LeftGutter from "./LeftGutter";
import PlansSection from "./PlansSection";
import PromoSection from "./PromoSection";
import RequirementsTable from "./RequirementsTable";
import {AppListingContext} from "./AppListingContext";
import AppListingUtils from "../../utils/appCatUtils";
import BenchmarksView from "./BenchmarksView";
import {requirementsWarning} from "./copy";


export default function ProductView(){
  const app = useContext(AppListingContext).app;

  const scrollToBottom = _ => {
    document.documentElement.scrollTop = document.documentElement.scrollHeight;
  }

  return(
    <Layout.Div flex mt={2}>
      <Layout.Div width='210px' style={{position: 'absolute'}}>
        <LeftGutter/>
      </Layout.Div>
      <CenterView app={app}/>
    </Layout.Div>
  )
}

function CenterView({app}){
  const simplifiedPerms = AppListingUtils.rbac2simplified(app.rbacPolicies);

  return(
    <Layout.Div
      style={{position: 'absolute', left: '330px'}}
      mt={2}
      maxWidth='840px'>
      <PromoSection/>
      <Text.H1 fontSize='28px' mt={7} mb={4}>Cluster Footprint</Text.H1>
      <ResourceBlocksView clusterFootprint={app.clusterFootprint}/>
      <BenchmarksView/>

      <Text.H1 mt={4} mb={2}>Kubernetes Requirements</Text.H1>
      <RequirementsTable
        requirements={app.requirements}
        warning={requirementsWarning}
      />

      <Text.H1 mt={6.5} mb={2}>Control Panel Functionality</Text.H1>
      <RequirementsTable requirements={app.wizCapabilities}/>

      <Text.H1 mt={5} mb={2.5}>Standard RBAC Requests</Text.H1>
      <PermsView simplifiedPerms={simplifiedPerms}/>

      <Text.H1 fontSize='28px' mt={6} mb={4}>Plans</Text.H1>
      <PlansSection/>

    </Layout.Div>
  )
}

function NeedyPromptView({callback}){
  return(
    <Layout.Div width='100%'>
      <Button.ClearButton
        mt={6}
        ml='auto'
        mr='auto'
        bold
        onClick={callback}
        hoverPoint
        hoverBkgEmotion='#16425B'
        bkgEmotion='hipBlue'
        emotion={'white'}
        style={{display: 'block'}}
        width='196px'
        height='38px'>
        Installation Options
      </Button.ClearButton>
    </Layout.Div>
  )
}


function ResourceBlocksView({clusterFootprint}){
  const extra = '40px';

  const entries = Object.entries(clusterFootprint);

  return(
    <Layout.Div flex width={`calc(100% + ${extra})`} ml={`calc(${extra} / -2)`}>
      { entries.map((entry, i) => (
        <Layout.Div height={'auto'}
                    style={{
                      borderColor: theme.colors.lightGrey,
                      borderStyle: `none none none ${i !== 0 ? 'solid' : 'none'}`
                    }}
                    width={'100%'}
        >
          <Text.P
            mt={2}
            fontSize='29px'
            center>
            { entry[1] }
          </Text.P>
          <Text.P
            fontSize='13px'
            mt={2}
            center
          >
            { humanizeString(entry[0]) }
          </Text.P>
        </Layout.Div>
      )) }
    </Layout.Div>
  )
}
