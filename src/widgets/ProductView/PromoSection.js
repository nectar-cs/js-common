import React, {Fragment} from 'react'
import {Carousel} from "react-responsive-carousel";
import Text from "../../styles/text-styles";
import Layout from "../../styles/layout-styles";
import {theme} from "../..";

export default function PromoSection(  props){
  const { name, info, screenshotUrls, features} = props;
  return(
    <Fragment>
      <Text.H1 fontSize={'29px'}>
        { name }
      </Text.H1>
      <Text.P
        promo
        style={{lineHeight: '22px'}}
        mt={2.1}>
        {info}
      </Text.P>
      <Layout.Div height={2}/>
      <Layout.Div width={'100%'}>
        <Carousel>
          { screenshotUrls.map((screenshotUrl, i) => (
            <img src={screenshotUrl} />
          )) }
        </Carousel>
      </Layout.Div>
      <Layout.Div mt={-3} width={'110%'}>
        { features.map((feature, i) => (
          <Layout.Div
            width={'45%'}
            key={i}
            mr={3}
            mt={5}
            style={{display: 'inline-block'}}>
            <Text.P
              calm
              promo
              bold>
              { feature.name }
            </Text.P>
            <Text.P
              calm
              style={{
                borderWidth: '4px',
                borderStyle: "none none none solid",
                borderColor: theme.colors.cool,
                paddingLeft: '12px'
              }}
              fontSize={'14px'}
              mt={1}>
              {feature.info}
            </Text.P>
          </Layout.Div>
        )) }
      </Layout.Div>
    </Fragment>
  )
}
