import React from "react";
import Layout from "../styles/layout-styles";
import Text from "../styles/text-styles";

export default function GutterHelpView(props){
  const {title, bannerProps, titleProps, helpItems, ...rest} = props;

  return(
    <Layout.Div
      style={{position: 'fixed'}}
      top='96px'
      width='250px'
      height='100%'
      right='40px'
      {...rest}
    >
      <Layout.Div
        mb={1.7}
        flex
        padded
        borderRadius='4px'
        bkgEmotion='calmBeige'
        align='center'
        {...bannerProps}
      >
        <Text.Icon
          name='help_outline'
          size={.9}
        />
        <Text.P  ml={.5} mt={.15} bold {...titleProps}>
          { title }
        </Text.P>
      </Layout.Div>
      { (helpItems || []).map((helpItem, i) => (
        <Layout.Div>
          <Layout.Div
            key={i}
            pl={.2}
            pr={.2}
            height={'100%'}
            mt={1.5}>
            <Layout.Div flex align='center'>
              <Text.Icon
                size={.9}
                name='add'
                emotion={'warning2'}
                mr={.4}
              />
              <Text.P mt={.1} bold>{helpItem.title}</Text.P>
            </Layout.Div>
            <Text.P calm mt={.8} style={{lineHeight: '20px'}}>
              { helpItem.text || helpItem.info }
            </Text.P>
          </Layout.Div>
          { i !== helpItem.length - 1 && (
            <Layout.Div height={.75}/>
          ) }
        </Layout.Div>
      )) }
    </Layout.Div>
  )
}

GutterHelpView.defaultProps = {
  title: "Help"
}
