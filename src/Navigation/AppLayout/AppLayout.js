import React from 'react';
// noinspection NpmUsedModulesInstalled
import styled from 'styled-components';


export default function AppLayout(props: Props) {
  const { SideBar, TopBar, BottomBar, children, contentProps } = props;
  const bodyRef = React.createRef(null);

  return (
    <FullPage>
      { SideBar && <SideBar/> }
      <AppContent ref={bodyRef} {...contentProps}>
        { children }
      </AppContent>
      { TopBar && <TopBar bodyRef={bodyRef}/> }
      { BottomBar && <BottomBar bodyRef={bodyRef}/> }
    </FullPage>
  );
}

const FullPage = styled.div`
  margin: 0;
  padding:  0;
  width: 100%;
  height: 100%;
`;

const AppContent = styled.div`
  position: absolute;
  top: ${p => p.theme.dims.topBarHeight};
  left: ${p => p.theme.dims.sideBarWidth};
  bottom: ${p => p.theme.dims.bottomBarHeight};
  //overflow-y: scroll;
  right: 0;
  z-index: -1;
`;

AppLayout.defaultProps = {
  contentProps: {}
}

type Props = {

}
