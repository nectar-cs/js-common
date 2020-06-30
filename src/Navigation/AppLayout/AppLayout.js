import styled from 'styled-components';
import React from 'react';

export default function AppLayout({sideBar, topBar, children}) {
  return (
    <FullPage>
      { sideBar }
      { topBar }
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
  position: relative;
  margin-top: ${p => p.theme.dims.topBarHeight};
  margin-left: ${p => p.theme.dims.sideBarWidth};
`;
