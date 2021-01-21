import React from 'react'
import Layout from "../styles/layout-styles";
import Text from "../styles/text-styles";
import Button from "../styles/button-styles";
import Clickable from "./Clickable";

export default function NiceEmptyView(props){
  const { icon, title, subtitle, text, buttonProps, action } = props;
  const { containerHeight, width, buttonTitle } = props;
  return(
    <Layout.Div height={containerHeight}>
      <Layout.CenteringDiv height={'100%'}>
        <Layout.CenteringDivY>
          <Layout.Div width={width}>
            <Layout.Div
              flex
              pb={.7}
              borderStyle='none none solid none'
              borderWidth='8px'
              borderEmotion='lightGrey'
              align='center'>
              <Text.Icon emotion='lightGrey' size={3} name={icon}/>
              <Layout.Div ml={.5}>
                <Text.H3 calm>{subtitle.toUpperCase()}</Text.H3>
                <Text.H1 calm fontSize={'28px'} mt={.5}>{ title }</Text.H1>
              </Layout.Div>
            </Layout.Div>
            <Text.P humane mt={.9} calm>{ text }</Text.P>
            <Clickable action={action}>
              <Button.Button
                mt={.8}
                bkgEmotion='hipBlue'
                emotion='white'
                {...buttonProps}>
                { buttonTitle }
              </Button.Button>
            </Clickable>
          </Layout.Div>
        </Layout.CenteringDivY>
      </Layout.CenteringDiv>
    </Layout.Div>
  )
}

NiceEmptyView.defaultProps = {
  width: '300px',
  title: 'None Found',
  subtitle: "This Collection",
  containerHeight: '200px',
  buttonTitle: "Create One"
}
