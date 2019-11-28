import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import routes from "./index"


const routes = {};

function ProtectedRouter(props) {

    const token = localStorage.getItem("token")
    
    let route
    if (token === false){ 
        props.path === "address" ?
            route = <Route path={routes.login} component={<Login/>} />:
            route = <Route path={props.path} component={props.component} />
    }
    else{
        route = <Route path={routes.feed} component={() => <FeedPage />} />
           
    }   
    
    return (
        {route}
    );
}

export default ProtectedRouter;