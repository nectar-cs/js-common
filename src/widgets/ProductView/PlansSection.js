import React, {useState, useContext} from 'react'
import Layout from "../../styles/layout-styles";
import Text from "../../styles/text-styles";
import Button from "../../styles/button-styles";
import {AppListingContext} from "./AppListingContext";

export default function PlansSection(){
  const app = useContext(AppListingContext).app;

  const [selectedIndex, setSelectedIndex] = useState(0);
  return(
    <Layout.Div flex width='110%'>
      <Layout.Div width='100%' mt={-1.5}>
        { app.plans.map((plan, i) => (
          <PlanOptionView
            key={i}
            plan={plan}
            callback={_ => setSelectedIndex(i)}
            isSelected={i === selectedIndex}
          />
        )) }
      </Layout.Div>
      <Layout.Div width={9}/>
      <Layout.Div width='100%'>
        <PlanSummaryView plan={app.plans[selectedIndex]}/>
      </Layout.Div>
    </Layout.Div>
  )
}

function PlanSummaryView({plan}){
  return(
    <Layout.Div
      width='100%'
      sexyShadow
      vertSwell={4.5}
      horSwell={1.89}
      shadowOpacity={.1}
      padded>
      <Text.H1>{plan.name}</Text.H1>
      <Text.P mt={1} calm>{plan.info}</Text.P>
      <Layout.Div mt={1.9}>
        { plan.features.map((feature, i) => (
          <Layout.Div key={i} flex align={'center'} mt={.78}>
            <Text.Icon name={'done'} emotion={'cool'} size={.88}/>
            <Text.P ml={.75}>{feature}</Text.P>
          </Layout.Div>
        )) }
      </Layout.Div>
      <Button.Button
        funky
        mt={2}
        fontSize='16px'
        hoverPoint
        // bkgEmotion='hipBlue'
        bold
        width={'120px'}
        vertSwell={2.1}
        horSwell={1}>
        { plan.price === 0 ? 'Install' : 'Payment' }
      </Button.Button>
    </Layout.Div>
  )
}

function PlanOptionView({plan, isSelected, callback}){
  return(
    <Layout.Div
      mt={1.5}
      onClick={callback}
      padded
      hoverPoint
      rounding={6}
      vertSwell={3}
      horSwell={2}
      emotion={isSelected ? 'primaryColor' : 'transparent'}>
      <Layout.Div flex style={{justifyContent: 'space-between'}}>
        <Text.H1
          bold
          emotion={isSelected ? 'contrastFont' : null}
          fontSize={'19px'}>
          { plan.name }
        </Text.H1>
        <Text.H1
          emotion={isSelected ? 'contrastFont' : null}>
          ${ plan.price.toLocaleString() }
        </Text.H1>
      </Layout.Div>
      <Text.P
        mt={.59}
        calm={!isSelected}
        emotion={isSelected ? 'contrastFont' : null}
      >
        Some extra bullshit
      </Text.P>
    </Layout.Div>
  )
}
