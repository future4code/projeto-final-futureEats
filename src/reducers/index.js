import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import restaurant from "./restaurant";
import { setTools } from './login';
import login from "./login";
import setFeed from "./feed";
import profile from "./profile"

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    restaurant,
    setTools,
    setFeed,
    profile
  });
