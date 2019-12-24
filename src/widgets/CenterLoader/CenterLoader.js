//@flow
import React from 'react'
import {Loader} from '../../styles/loader-styles'

export default function CenterLoader(props: Props){
  return(
    <Loader.CenteredSpinner
      size='large'
      emotion={props.contrast && 'contrastColor'}
    />
  );
}

type Props = {contrast: boolean};
CenterLoader.defaultProps = {contrast: false};
