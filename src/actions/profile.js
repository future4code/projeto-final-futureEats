import Axios from "axios"


export const getUser = () => async (dispatch) => {

    const token = localStorage.getItem("token")

    const res = await Axios.get("https://us-central1-missao-newton.cloudfunctions.net/futureEats/profile",
        {
            headers:
            {
                auth: token
            }
        }
    )
    dispatch(setUser(res.data.user))
}

export const setUser = (user) => {
    return ({
        type: "SET_USER",
        payload: { user: user }
    })
}


export const getHistory = () => async (dispatch) => {

    const token = localStorage.getItem("token")

    const res = await Axios.get("https://us-central1-missao-newton.cloudfunctions.net/futureEats/orders/history",
        {
            headers:
            {
                auth: token
            }
        }
    )
    dispatch(setHistory(res.data.history))
}

export const setHistory = (history) => {
    return ({
        type: "SET_HISTORY",
        payload: { history: history }
    })
}