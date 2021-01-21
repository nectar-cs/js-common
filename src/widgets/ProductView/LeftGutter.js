import React, {useContext} from 'react'
import Layout from "../../styles/layout-styles";
import Img from "../../styles/img-styles";
import Text from "../../styles/text-styles";
import {AppListingContext} from "./AppListingContext";

export default function LeftSection(){
  const app = useContext(AppListingContext).app;
  const { logoUrl, usefulLinks, publisher } = app;
  return(
    <Layout.Div>
      <Img.Img
        ml='auto'
        mr='auto'
        src={logoUrl}
        width='130px'
        style={{borderRadius: '50%', display: 'block'}}
      />
      <Layout.Div ml={3} mt={2}>
        <Layout.Div flex align='center'>
          <Text.Icon
            name={publisher.verified ? 'verified' : 'flaky'}
            emotion={publisher.verified ? 'hipBlue' : 'primaryColor'}
            size={.88}
          />
          <Text.P fontSize='14px' ml={.5}>
            { publisher.verified ? 'Verified Publisher' : 'Unverified Publisher' }
          </Text.P>
        </Layout.Div>
        <Text.P mt={.5} calm fontSize='12px'>
          { publisher.verified ?
            "Publisher has been verified as authentic." :
            "Publisher has not yet been verified as authentic."
          }
        </Text.P>

        <Text.P calm mt={2.5} hacker>
          Application Publisher
        </Text.P>
        <Layout.Div flex align='center' mt={.6}>
          <Img.Img width='16px' src={publisher.logoUrl} height='16px'/>
          <SimpleLink
            to={publisher.websiteUrl}
            text={publisher.name}
            ml={.5}
            mt={.2}
          />
        </Layout.Div>

        <Text.P calm mt={2.5} hacker>
          OSS & Documentation
        </Text.P>
        { usefulLinks.map((link, i) => (
          <SimpleLink key={i} text={link.name} to={link.url}/>
        )) }

        <Text.P calm mt={2.5} hacker mb={.4}>
          Legal
        </Text.P>
        <SimpleLink text='License Agreement'/>
        <SimpleLink text='Privacy Policy'/>
      </Layout.Div>

    </Layout.Div>
  )
}

function SimpleLink({text, to, ...rest}){
  return(
    <Text.A
      style={{display: 'block', textDecoration: 'none'}}
      href={to}
      hoverUnderline
      emotion='hipBlue'
      target='_blank' mt={.5}  {...rest}>
      { text }
    </Text.A>
  )
}
