import axios from "axios"


const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/futureEats";

export const setRestaurantDetails = (restaurantDetails) => ({
  type: "SET_RESTAURANT_DETAILS",
  payload: {
    restaurantDetails
  }
});

export const setSelectedRestaurant = (restaurantId) => ({
  type: "SET_SELECTED_RESTAURANT",
  payload: {
    restaurantId
  }
});

export const getRestaurantDetails = (restaurantId) => async (dispatch, getState) => {
  const token =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkRlOFVBQ1NGZ0Z5U25LZFhtNWhJIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjExMS4xMTEuMTExLTExIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcgLSBWaWxhIE4uIENvbmNlacOnw6NvIiwiaWF0IjoxNTc0NjU4NTcxfQ.H4RbqziC6oQP_9wM-enzBWO0h3hRGXw7TYCSjoEDYBI"
  const response = await axios.get (
    `${baseURL}/restaurants/${restaurantId}`,
  {
            headers: {
              auth: token,
            }
         });
  dispatch(setRestaurantDetails(response.data.restaurant));
};

