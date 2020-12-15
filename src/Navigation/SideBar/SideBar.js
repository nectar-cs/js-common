import React from 'react';
import S from './SideBarStyles'
import {inverseTheme} from "./../../styles/constants";
import {ThemeProvider} from "styled-components";
import LogoBox from "../../widgets/LogoBox";

export default function SideBar(props: Props) {
  return(
    <S.Sidebar>
      <ThemeProvider theme={inverseTheme}>
        <LogoBox
          left={1}
          top={1}
          {...props}
        />
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
