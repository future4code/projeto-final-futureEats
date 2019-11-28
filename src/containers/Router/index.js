import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import OpeningPage from "../../components/OpeningPage";
import ProfilePage from "../../components/ProfilePage/ProfilePage";

export const routes = {
  root: "/",
  login: "/login",
  profilePage: "/profilePage",
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.profilePage} component={() => <ProfilePage />} />
        <Route path={routes.login} component={() => <div />} />
        <Route path={routes.root} component={() => <OpeningPage />} />       
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;