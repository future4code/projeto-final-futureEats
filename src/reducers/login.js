const initialState = {
    error: "",
    user: [],
    restaurants: []
};

export const setTools = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER":
            return ({...state, user:action.payload.user});
        case "SET_ERROR":
            return ({...state, error:action.payload});
        case "ERROR_MESSAGE":
            return { ...state, error: action.payload };
          default:
            return state
    }
};



export default setTools;