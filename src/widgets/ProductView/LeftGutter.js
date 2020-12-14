import React from 'react'
import Layout from "../../styles/layout-styles";
import Img from "../../styles/img-styles";
import Text from "../../styles/text-styles";

export default function LeftSection({app}){
  const { logoUrl, usefulLinks } = app;
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
          <Text.Icon name='verified' emotion='hipBlue' size={.88}/>
          <Text.P fontSize={'14px'} ml={.5}>Nectar Certified</Text.P>
        </Layout.Div>
        <Text.P mt={.5} calm fontSize='12px'>
          This application was tested and certified
          by the Nectar team.
        </Text.P>

        <Text.P calm mt={2.5} hacker>
          Application Publisher
        </Text.P>
        <Layout.Div flex align='center' mt={.6}>
          <Img.Img width='25px' src={logoUrl}/>
          <SimpleLink text={'Nectar Corp'} ml={.5} mt={0}/>
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
