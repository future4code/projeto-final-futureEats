import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";

import FeedPage from "../FeedPage/feedPage";
import OpeningPage from "../../components/openingPage/openingPage";


const routes = {
  a: "feed"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.a} component={() => <FeedPage  />} />
        <Route path={routes.root} component={() => <FeedPage />} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
