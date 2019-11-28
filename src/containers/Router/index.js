import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import DetailsPage from "../DetailsPage"
import {LoginPage} from "../LoginPage";
import OpeningPage from "../../components/OpeningPage";

const routes = {
  openingPage: "/",
  loginPage: "/login",
  detailsPage: "/detailspage",
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.loginPage} component={LoginPage} />
        <Route path={routes.detailsPage} component={DetailsPage} />
        <Route path={routes.openingPage} component={OpeningPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
