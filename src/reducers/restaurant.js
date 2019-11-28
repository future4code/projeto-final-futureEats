const initialState = {
  restaurantDetails: {},
  restaurantId: "1",
};

const restaurant = (state = initialState, action) => {
  switch (action.type) {
    case "SET_RESTAURANT_DETAILS":
      return {...state, restaurantDetails: action.payload.restaurantDetails };
    case "SET_SELECTED_RESTAURANT":
      return {...state, restaurantId: action.payload.restaurantId};
    default:
      return state;
  }
};

export default restaurant;