import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import SignUpPage from "../SignUpPage/index"
import { Switch, Route } from "react-router-dom";
import OpeningPage from "../../components/OpeningPage";
import ProfilePage from "../../components/ProfilePage/ProfilePage";

import FeedPage from "../FeedPage/feedPage";
import OpeningPage from "../../components/openingPage/openingPage";


const routes = {
  a: "feed"
};
export const routes = {
  root: "/",
  login: "/login",
  profilePage: "/profilePage",
};

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
