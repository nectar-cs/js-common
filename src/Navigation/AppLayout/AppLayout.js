import styled from 'styled-components';
import React from 'react';

export default function AppLayout({SideBar, TopBar, children}) {
  const bodyRef = React.createRef(null);

  return (
    <FullPage>
      { SideBar && <SideBar/> }
      <AppContent ref={bodyRef}>
        { children }
      </AppContent>
      { TopBar && <TopBar bodyRef={bodyRef}/> }
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
  bottom: 0;
  right: 0;
  z-index: -1;
`;
