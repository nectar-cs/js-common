import styled from 'styled-components';
import React from 'react';

export default function AppLayout({SideBar, TopBar, children}) {
  return (
    <FullPage>
      <SideBar/>
      <TopBar/>
      <AppContent>
        { children }
      </AppContent>
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
`;
