import React from 'react';
import { Link } from 'react-router-dom';
import Layout from "../../styles/layout-styles";

export default function ModestLink({to, children, disabled}) {
  if(disabled) return children;

  if(typeof to === 'string'){
    return (
      <Link to={to} style={{ textDecoration: 'none' }}>
        { children }
      </Link>
    );
  } else {
    return(
      <Layout.Div onClick={to} hov_point>
        { children }
      </Layout.Div>
    )
  }
}
