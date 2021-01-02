import React from "react";
import {Redirect, Route, Switch} from "react-router";


export default function CenterContentView(props: Props){
  const { routes, prefix } = props;
  const defaultRoute = routes.find(r => r.isDefault);
  return(
    <Switch>
      { routes.map((route, i) => (
        <Route
          key={i}
          exact={route.isDefault && route.path === '/'}
          path={`${prefix}${route.path}`}
          component={route.component}
        />
      )) }
      { defaultRoute.path !== '/' &&
        <Route
          exact
          path={prefix}
          render={_ => <Redirect to={`${prefix}${defaultRoute.path}`}/>}
        />
      }
    </Switch>
  )
}

type Props = {
  routes: Array<RouteDescriptor>,
  prefix: string
};

type RouteDescriptor = {
  isDefault: boolean,
  path: string,
  component: * => *
};
