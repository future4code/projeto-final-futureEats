import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import login from "./login";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    // Outros reducers aqui
    login
  });
