import React, {Component} from "react";
import { Route } from "react-router-dom";
import {routes} from "./index"
import AddressFormPage from '../../components/AddressFormPage';
import SignUpPage from "../SignUpPage/index"
import OpeningPage from "../../components/OpeningPage/OpeningPage";
import ProfilePage from "../../components/ProfilePage/ProfilePage";
import FeedPage from "../FeedPage/feedPage";
import LoginPage from "../LoginPage/LoginPage";
import DetailsPage from "../DetailsPage"
import {push} from "connected-react-router";
import {connect} from "react-redux";

class ProtectedRouter extends Component {

    checkRoute = () => {
        const token = localStorage.getItem("token");
        const address = localStorage.getItem("hasAddress");
        if (token === null)
            this.props.gotoLoginPage()
        else if (address === null || address === "false"){
            this.props.gotoAddressFormPage()      
    }
        else
            return <Route path={this.props.path} component={this.props.component}/>
    };

    render () {
        const route = this.checkRoute();
        return (
             <div>
                 {route}
             </div>
        );
    }
}

const mapDispatchToProps = dispatch =>({
    gotoLoginPage: () => dispatch(push(routes.loginPage)),
    gotoAddressFormPage: () => dispatch(push(routes.addressFormPage)),
});

export default connect(null, mapDispatchToProps)(ProtectedRouter);