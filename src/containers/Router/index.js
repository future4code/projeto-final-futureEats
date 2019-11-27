import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom"; 
import SignUpPage from "../SignUpPage/index"


const routes = {};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <SignUpPage />
        <Route path={routes.root} component={() => <div />} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
