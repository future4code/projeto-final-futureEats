const initialState = {
    error: ""
}

const login = (state = initialState, action) => {
    switch (action.type) {
        case "MESSAGEM_OF_ERROR":
            return { ...state, error: action.payload }
        default:
            return state
    }
}

export default login