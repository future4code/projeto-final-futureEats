import React, { Component } from "react";
import { Route } from "react-router-dom";
import {routes} from "./index"
import { push } from "connected-react-router"
import AddressFormPage from '../../components/AddressFormPage';
import SignUpPage from "../SignUpPage/index"
import OpeningPage from "../../components/OpeningPage/OpeningPage";
import ProfilePage from "../../components/ProfilePage/ProfilePage";
import FeedPage from "../FeedPage/feedPage";
import LoginPage from "../LoginPage/LoginPage";
import DetailsPage from "../DetailsPage"
import { connect } from "react-redux";




class ProtectedRouterPublic extends Component {
    constructor(props) {
        super(props);
    }
    
    checkRoute = () => {

        const token =  localStorage.getItem("token");

        const address = localStorage.getItem("hasAddress");

        
        {

        if (token === null && this.props.path === routes.addressFormPage ){
            this.props.gotoLoginPage()}
        else if (this.props.path === routes.addressFormPage) {
            return <Route path={this.props.path} component={this.props.component} />
        }
        else if (token !== null && (address === null || address === "false") && this.props.path !== routes.addressFormPage){
            this.props.gotoAddressFormPage()
            ;}
       
        else if (token === null )
            return <Route path={this.props.path} component={this.props.component} />
        else
        
            this.props.gotoFeedPage() }
    };

    render() {
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
    gotoFeedPage: () => dispatch(push(routes.feedPage)),
});

export default connect(null, mapDispatchToProps)(ProtectedRouterPublic);