import React, {useEffect, useState} from "react";
import Layout from "../../styles/layout-styles";
import Text from "../../styles/text-styles";
import {colorKeys} from "../..";

function severityEmotion(severity){
  if(severity === 'error')
    return "#db7f8e";
  else if(severity === 'warning')
    return "pink";
}

export default class ErrorToast extends React.Component{

  constructor(props) {
    super(props);
    this.state = { isDismissed: false };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.errors !== this.props.errors){
      this.setState(s => ({...s, isDismissed: false}));
    }
  }

  render(){
    const { isDismissed } = this.state;
    const { severity, errors, ...rest } = this.props;

    if(!errors || errors.length < 1 || isDismissed) return null;

    return(
      <Layout.Div
        relative
        padded
        sofa
        emotion={severityEmotion(severity)}
        mt={1}
        {...rest}>
        <Text.Icon
          absolute
          emotion={colorKeys.contrastColor}
          size={.86}
          name='close'
          top='8px'
          right='8px'
          hoverPoint
          onClick={_ => this.setState(s => ({...s, isDismissed: true}))}
        />
        { errors.map((error, i) => (
          <Text.P
            key={i}
            mt={.4}
            bold
            emotion={colorKeys.contrastFont}
          >
            { error }
          </Text.P>
        )) }
      </Layout.Div>
    )

  }
}

ErrorToast.defaultProps = {
  severity: 'error',
  errors: [],
}
