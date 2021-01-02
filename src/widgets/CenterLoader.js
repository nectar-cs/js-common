//@flow
import React from 'react'
import {Loader} from '../styles/loader-styles'
import Layout from '../styles/layout-styles'

export default function CenterLoader({children, ...props}){
  return(
    <Layout.Div center>
      <Layout.CenteringDivY>
        <Loader.Spinner mb={0.5} {...props} />
        { children }
      </Layout.CenteringDivY>
    </Layout.Div>
  );
}
