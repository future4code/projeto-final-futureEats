import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { setTools } from './login';
import login from "./login";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    setTools: setTools
    router: connectRouter(history),
    login
  });
