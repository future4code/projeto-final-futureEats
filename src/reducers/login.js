import { routerActions } from "connected-react-router"

const initialState = { error: "", user: {}}

export const setTools = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER":
            return ({...state, user:action.payload.user})
        case "SET_ERROR":
            return ({...state, error:action.payload})
        default:
            return state
    }
}