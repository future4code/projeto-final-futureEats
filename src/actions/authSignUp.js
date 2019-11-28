import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";


export const authSignUp = (name, email, cpf, password) => async dispatch => {
  try {
    const response = await axios.post(
      "https://us-central1-missao-newton.cloudfunctions.net/futureeats/signup",
      {
        name,
        email,
        cpf,
        password
      }
    );
    window.localStorage.setItem ("token", response.data.token);
     // dispatch(push(routes.adress));
  } catch (e) {

  }
}