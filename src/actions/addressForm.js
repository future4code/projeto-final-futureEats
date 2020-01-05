import axios from 'axios'
import { routes } from '../containers/Router';
import { push } from 'connected-react-router';


export const setError = (error) => {
    return({
        type: "SET_ERROR",
        payload: error 
    })
}

export const setUser = (user) => {
    return({
        type: "SET_USER",
        payload: {user: user} 
    })
}

export const createAddress = (street, number, neighbourhood, city, state, complement) => async (dispatch) => {
    
    const data = {
        street,
        number,
        neighbourhood,
        city,
        state,
        complement
    }

    const token = localStorage.getItem("token")

    try {
        const res = await axios.put("https://us-central1-missao-newton.cloudfunctions.net/futureEats/address",
            data,
            {
                headers:
                {
                    auth: token
                }
            }
        )
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("hasAddress", res.data.user.hasAddress)
        dispatch(setError(""))
        dispatch(setUser(res.data.user))
        dispatch(push(routes.feedPage))
        
    }catch(error){
        dispatch(setError(error.message))
    }
}
