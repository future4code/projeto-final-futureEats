import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import AddressFormPage from '../../components/AddressFormPage';
import SignUpPage from "../SignUpPage/index"
import OpeningPage from "../../components/OpeningPage/OpeningPage";
import ProfilePage from "../../components/ProfilePage/ProfilePage";
import FeedPage from "../FeedPage/feedPage";
import LoginPage from "../LoginPage/loginPage";
import DetailsPage from "../DetailsPage"

export const routes = {
  root: "/",
  login: "/login",
  profilePage: "/profilePage",
  feedPage: "/addressform",
  addressFormPage: "/addressform",
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
