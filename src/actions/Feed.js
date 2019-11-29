import Axios from "axios"
import { push } from "connected-react-router"
import { routes } from "../containers/Router"


export const setFeed = () => async dispacth => {

    const token = localStorage.getItem('token')
    const res = await Axios.get("https://us-central1-missao-newton.cloudfunctions.net/futureEats/restaurants", {headers:{auth:token}})
    
    dispacth(setRestaurant(res.data.restaurants))
}

export const setRestaurant = (restaurants) => {
    return ({
        type: "SET_RESTAURANTS",
        payload: {restaurants: restaurants}
    })
}
