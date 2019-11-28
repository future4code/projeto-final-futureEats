import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import routes from "./index"

const routes = {
};

function ProtectedRouter(props) {

    const token = localStorage.getItem("token")
    const address = localStorage.getItem("address")
    
    let route
    if (token === false){
        route = <Route path={routes.login} component={() => <LoginPage />} />
    }
    else{
        address === false ?
            route = <Route path={routes.address} component={() => <Address />} />:
            route = <Route path={props.path} component={props.component} />
    }   
    
    return (
        {route}
    );
}

export default ProtectedRouter;