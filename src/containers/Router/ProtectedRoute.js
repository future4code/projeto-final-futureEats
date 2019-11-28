import React, {Component} from "react";
import { Route } from "react-router-dom";
import routes from "./index"
import AddressFormPage from '../../components/AddressFormPage';
import SignUpPage from "../SignUpPage/index"
import OpeningPage from "../../components/OpeningPage/OpeningPage";
import ProfilePage from "../../components/ProfilePage/ProfilePage";
import FeedPage from "../FeedPage/feedPage";
import LoginPage from "../LoginPage/LoginPage";
import DetailsPage from "../DetailsPage"




class ProtectedRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: localStorage.getItem("token"),
            address: localStorage.getItem("address")
        }
    }

    bla = () => {
        if (this.state.token === false) {
            return <Route path={routes.loginPage} component={() => <LoginPage/>}/>
        } else  if (this.state.address === false ) {
            return <Route path={routes.addressFormPage} component={() => <AddressFormPage/>}/>
        } else {
            return <Route path={this.props.path} component={this.props.component}/>
        }
    }

    render () {
        const route = this.bla();
        console.log(route);
          return (
            <div>
                {route}
            </div>
        );
    }
}


export default ProtectedRouter;