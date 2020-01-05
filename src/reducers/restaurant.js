const initialState = {
  restaurantDetails: {},
  restaurantId: "",
  quantity: "",
  selectedProducts: [],
  cartProducts: [],
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
    case  "REMOVE_PRODUCTS":
      return {...state, quantity: 0 };
    case "ADD_TO_CART":
      return {...state, cartProducts: state.selectedProducts};
    default:
      return state;
  }
};

export default restaurant;