import React from 'react';
import S from './SideBarStyles'
import {inverseTheme} from "./../../styles/constants";
import {Link} from "react-router-dom";
import {ThemeProvider} from "styled-components";

const GCP_BASE = "https://storage.googleapis.com/";
const IMG_BASE = GCP_BASE + "nectar-mosaic-public/images";

export default function SideBar(props: Props) {
  const image = `${IMG_BASE}/nectar_mark_light.png`;
  return(
    <S.Sidebar>
      <ThemeProvider theme={inverseTheme}>
        <S.LogoBox>
          <Link to='/'>
            <S.TitleLogo src={image} alt="Nectar App Store"/>
            <S.TitleText>{props.title}</S.TitleText>
            <S.TitleSub>{props.subtitle}</S.TitleSub>
          </Link>
        </S.LogoBox>
        <S.Content>
        </S.Content>
      </ThemeProvider>
    </S.Sidebar>
  )
}

type Props = {
  title: string,
  subtitle: string
}

SideBar.defaultProps = {
  title: "Nectar",
  subtitle: "For Kubernetes"
}
