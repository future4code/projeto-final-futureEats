import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../loginPage/loginPage";

export const routes = {
  login : '/login',
  singUp: '/login',
  feed: '/login',

};

function Router(props) { 
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.login} component={LoginPage} />
        <Route path={routes.singUp} component={LoginPage} />
        <Route path={routes.feed} component={LoginPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
