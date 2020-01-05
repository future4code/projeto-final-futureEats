import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import AddressFormPage from '../../components/AddressFormPage';
import SignUpPage from "../SignUpPage/index"
import OpeningPage from "../../components/OpeningPage/OpeningPage";
import ProfilePage from "../../components/ProfilePage/ProfilePage";
import FeedPage from "../FeedPage/feedPage";
import LoginPage from "../LoginPage/LoginPage";
import DetailsPage from "../DetailsPage"
import ProtectedRouterPublic from "./ProtectedRoutePublic";
import ProtectedRouter from "./ProtectedRoute";
import {CartPage} from "../CartPage";

export const routes = {
  root: "/",
  signUpPage: "/signup",
  loginPage: "/login",
  profilePage: "/profile",
  feedPage: "/feed",
  addressFormPage: "/addressform",
  detailsPage: "/details",
  cartPage:"/cart"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <ProtectedRouterPublic path={routes.loginPage} component={LoginPage} />
        <ProtectedRouterPublic path={routes.signUpPage} component={SignUpPage} />
        <ProtectedRouterPublic path={routes.addressFormPage} component={AddressFormPage} />
        <ProtectedRouter path={routes.detailsPage} component={DetailsPage} />
        <ProtectedRouter path={routes.feedPage} component={FeedPage} />
        <ProtectedRouter path={routes.profilePage} component={ProfilePage} />
        <ProtectedRouter path={routes.cartPage} component={CartPage} />
        <Route path={routes.root} component={OpeningPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
