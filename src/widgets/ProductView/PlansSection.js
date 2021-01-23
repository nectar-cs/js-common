import React, {useState, useContext} from 'react'
import Layout from "../../styles/layout-styles";
import Text from "../../styles/text-styles";
import Button from "../../styles/button-styles";
import {AppListingContext} from "./AppListingContext";

export default function PlansSection({callback}){
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
        <PlanSummaryView
          plan={app.plans[selectedIndex]}
          callback={callback}
        />
      </Layout.Div>
    </Layout.Div>
  )
}

function PlanSummaryView({plan, callback}){
  const { name, features } = plan;

  return(
    <Layout.Div
      width='100%'
      sexyShadow
      ptb={2}
      plr={2}
      shadowOpacity={.1}>
      <Text.H1>{name}</Text.H1>
      <Text.P mt={1} calm>{plan.info}</Text.P>
      <Layout.Div mt={1.9}>
        { (features || []).map((feature, i) => (
          <Layout.Div key={i} flex align={'center'} mt={.78}>
            <Text.Icon name='add' emotion='warning2' size={.88}/>
            <Text.P ml={.75}>{feature}</Text.P>
          </Layout.Div>
        )) }
      </Layout.Div>
      <Button.ClearButton
        width='120px'
        onClick={_ => callback(plan)}
        borderRadius='4px'
        emotion='primaryFont'
        borderEmotion='warning2'
        hov_bkgEmotion={'warning2'}
        hov_emotion={'white'}
        mt={2}
        fontSize='16px'
        style={{borderWidth: '1spx'}}
        hov_point
        bold
        >
        { buttonText(plan) }
      </Button.ClearButton>
    </Layout.Div>
  )
}

function PlanOptionView({plan, isSelected, callback}){
  let { name, price } = plan;
  price = parseInt(price);

  return(
    <Layout.Div
      mt={1.5}
      onClick={callback}
      hov_point
      dented
      ptb={1.4}
      plr={1.2}
      bkgEmotion={isSelected ? 'primaryColor' : 'transparent'}>
      <Layout.Div flex style={{justifyContent: 'space-between'}}>
        <Text.H1
          bold
          emotion={isSelected ? 'contrastFont' : null}
          fontSize='19px'>
          { name }
        </Text.H1>
        <Text.H1
          emotion={isSelected ? 'contrastFont' : null}>
          ${ price.toLocaleString() }
        </Text.H1>
      </Layout.Div>
      <Layout.Div flex align='center' mt={.59}>
        <OptionSubtitles
          text='Perpetual Ownership'
          isSelected={isSelected}
        />
        <OptionSubtitles
          text='•'
          isSelected={isSelected}
          ml={.5}
          mr={.5}
        />
        <OptionSubtitles
          text='Generic License'
          isSelected={isSelected}
        />
      </Layout.Div>
    </Layout.Div>
  )
}

function buttonText(plan){
  return plan['installable'] ? "Install" : "Purchase";
}

function OptionSubtitles({text, isSelected, ...rest}){
  return(
    <Text.P
      calm={!isSelected}
      emotion={isSelected ? 'contrastFont' : null}
      {...rest}
    >
      { text }
    </Text.P>
  )
}
