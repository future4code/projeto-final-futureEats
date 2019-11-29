const initialState = {
    history:[]
};

export const profile = (state = initialState, action) => {
    switch (action.type) {
        case "SET_HISTORY":
            return ({ ...state, user: action.payload.history });
        default:
            return state
    }
};



export default profile;