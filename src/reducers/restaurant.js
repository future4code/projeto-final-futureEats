const initialState = {
  restaurantDetails: {},
  restaurantId: "1",
  selectedProducts: [],
};

const restaurant = (state = initialState, action) => {
  switch (action.type) {
    case "SET_RESTAURANT_DETAILS":
      return {...state, restaurantDetails: action.payload.restaurantDetails };
    case "SET_SELECTED_RESTAURANT":
      return {...state, restaurantId: action.payload.restaurantId};
    case "SET_SELECTED_PRODUCT":
      const actualProduct = {
        productId: action.payload.productId,
        quantity: action.payload.quantity
      };
      const selectedProductsList = [...state.selectedProducts];
      selectedProductsList.push(actualProduct);
      const productsList = [...state.restaurantDetails.products];
      for (let selectedProductAmount of selectedProductsList) {
      for (let product of productsList) {
        if (product.id === selectedProductAmount.productId) {
          product.quantity = selectedProductAmount.quantity
        }
      }}
      return {...state, selectedProducts: selectedProductsList, restaurantDetails: {...state.restaurantDetails, products: productsList}};
    default:
      return state;
  }
};

export default restaurant;