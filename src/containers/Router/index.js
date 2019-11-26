import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";

const routes = {};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.root} component={() => <SearchBar />} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
