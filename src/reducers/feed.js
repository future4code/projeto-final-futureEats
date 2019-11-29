const initialState = {
    restaurant: [],
};

export const setFeed = (state = initialState, action) => {
    switch (action.type) {
        case "SET_RESTAURANTS":
            return ({ ...state, restaurant: action.payload.restaurants });
        default:
            return state
    }
};

export default setFeed;