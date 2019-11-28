import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import AddressFormPage from '../../components/AddressFormPage';
import SignUpPage from "../SignUpPage/index"
import OpeningPage from "../../components/OpeningPage";
import ProfilePage from "../../components/ProfilePage/ProfilePage";
import FeedPage from "../FeedPage/feedPage";


export const routes = {
  root: "/",
  login: "/login",
  profilePage: "/profilePage",
  feedPage: "/addressform",
  addressFormPage: "/addressform",
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.addressFormPage} component={() => <AddressFormPage />} />
        <Route path={routes.feedPage} component={() => <AddressFormPage />} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
