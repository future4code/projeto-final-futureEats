import React, {Component} from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import routes from "./index"
import LoginPage from "../LoginPage/LoginPage";
import AddressFormPage from "../../components/AddressFormPage";


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