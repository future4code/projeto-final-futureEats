import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import { OpeningPage } from "../../components/openingPage";

export const routes = {
  root: "/",  
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.root} component={() => <OpeningPage />} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
