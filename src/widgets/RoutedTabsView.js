import {useHistory, useLocation} from "react-router";
import React from "react";
import NectarGuiUtils from "../utils/NectarGuiUtils";
import Layout from "../styles/layout-styles";
import TabsView from "./TabsView";

export default function RoutedTabsView({routes, prefix, seekIndex}) {
  const history = useHistory();
  const location = useLocation();

  function navToTab(index){
    const path = `${prefix}${routes[index].path}`
    history.push(path);
  }

  return (
    <Layout.Div width='100%'>
      <TabsView
        crtIndex={NectarGuiUtils.findCrtIndex(routes, location, seekIndex)}
        descriptors={routes}
        onTabSelected={navToTab}

      />
    </Layout.Div>
  )
}
