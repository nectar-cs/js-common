import React, {Fragment} from 'react';
import { S } from './TopBarStyles';
import Text from './../../styles/text-styles'
import Layout from './../../styles/layout-styles'
import Img from './../../styles/img-styles'
import Button from './../../styles/button-styles'
import {Link} from "react-router-dom";

const GCP_BASE = "https://storage.googleapis.com/";
const IMG_BASE = GCP_BASE + "nectar-mosaic-public/images";

export default function TopBar(props) {
  return (
    <S.Container>
      <Layout.Div width={'100%'} height={'100%'} mt={.2}>
        <LogoBox {...props}/>
        <S.RightCorner>
          <Button.ClearButton
            hoverPoint
            bkgEmotion='transparent'
            emotion='white'
            hoverEmotion='nectar'
            hoverBkgEmotion='transparent'
            borderWidth={'2px'}>
            Login
          </Button.ClearButton>
          <Text.H4
            bold
            mr={4}
            hoverPoint
            hoverEmotion='nectar'
            emotion='contrastFont'>
            Publisher Mode
          </Text.H4>
          <Text.H4
            bold
            mr={4}
            hoverPoint
            hoverEmotion='nectar'
            emotion='contrastFont'>
            My Library
          </Text.H4>
        </S.RightCorner>
      </Layout.Div>
    </S.Container>
  )
}

function LogoBox(props){
  return(
    <Layout.Div
      absolute
      flex
      left={2.7}
      top={.85}>
      <Img.Img
        height='32px'
        src={`${IMG_BASE}/nectar_mark_light.png`}
      />
      <Layout.Div ml={.4} mt={-.2}>
        <Text.H3
          bold
          emotion='contrastFont'>
          { props.title }
        </Text.H3>
        <Text.H3
          bold
          emotion='ruby'>
          { props.subtitle }
        </Text.H3>
      </Layout.Div>
    </Layout.Div>
  )
}

function BreadcrumbsView({crumbs}){
  return (crumbs || []).map((crumb, index) => {
    let separator = null;
    const text = (
      <Link to={crumb.path}>
        <Text.P emotion='contrastFont'>
          { crumb.display }
        </Text.P>
      </Link>
    );

    if(index < (crumbs || []).length - 1){
      separator = <Text.P lt={0.3} right={0.3} emotion='contrastFont'> / </Text.P>
    }

    return(
      <Fragment key={`${crumb.path}${index}`}>
        { text }
        { separator }
      </Fragment>
    )
  });
}
