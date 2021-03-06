import Axios from "axios"
import { push } from "connected-react-router"
import { routes } from "../containers/Router"


export const login = (email,password) => async dispacth => {
    const data = {
        "email": email,
        "password": password
    }
    try {
        const res = await Axios.post("https://us-central1-missao-newton.cloudfunctions.net/futureEats/login", data)
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('hasAddress', res.data.user.hasAddress)
        
        dispacth(push(routes.feedPage))
    } 
    catch (error) {
        dispacth(messageError(error.message))
        alert("Email ou senha incorretos!")
    }
    
} 

export const messageError = (error) => {
    return({
    type: "MESSAGEM_OF_ERROR",
    payload: error
})
}
