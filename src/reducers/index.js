import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import restaurant from "./restaurant";
import { setTools } from './login';
import login from "./login";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    restaurant,
    setTools: setTools,
    login
  });
