import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import {DetailsPage} from "../DetailsPage"
import {LoginPage} from "../LoginPage";
import OpeningPage from "../../components/OpeningPage";

const routes = {
  OpeningPage: "/",
  LoginPage: "/login",
  DetailsPage: "/detailspage",
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.LoginPage} component={LoginPage} />
        <Route path={routes.DetailsPage} component={DetailsPage} />
        <Route path={routes.OpeningPage} component={OpeningPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
