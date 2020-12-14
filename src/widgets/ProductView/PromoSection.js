import React, {Fragment, useContext} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import Text from "../../styles/text-styles";
import Layout from "../../styles/layout-styles";
import {theme} from "../..";
import {AppListingContext} from "./AppListingContext";
import Img from "../../styles/img-styles";

export default function PromoSection(){
  const app = useContext(AppListingContext).app;
  const { name, info, screenshotUrls, features } = app;

  return(
    <Fragment>
      <Text.H1 fontSize='29px'>
        { name }
      </Text.H1>
      <Text.P
        promo
        calm
        style={{lineHeight: '24px'}}
        mt={2.1}>
        {info}
      </Text.P>
      <Layout.Div height={2}/>
      <Layout.Div width={'100%'}>
        <Carousel>
          { screenshotUrls.map((screenshotUrl, i) => (
            <Img.Img
              src={screenshotUrl}
              alt='screenshot'
            />
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
              clamp={3}
              height='100px'
              style={{
                borderWidth: '3px',
                borderStyle: "none none none solid",
                borderColor: theme.colors.lightGrey,
                paddingLeft: '12px'
              }}
              fontSize='14px'
              mt={1}>
              {feature.info}
            </Text.P>
          </Layout.Div>
        )) }
      </Layout.Div>
    </Fragment>
  )
}
