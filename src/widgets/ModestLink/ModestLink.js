import React from 'react';
import { Link } from 'react-router-dom';
import Layout from "../../styles/layout-styles";

export default function ModestLink(props) {
  if(typeof props.to === 'string'){
    return (
      <Link to={props.to} style={{ textDecoration: 'none' }}>
        { props.children }
      </Link>
    );
  } else {
    return(
      <Layout.Div onClick={props.to} hoverPoint>
        { props.children }
      </Layout.Div>
    )
  }
}
