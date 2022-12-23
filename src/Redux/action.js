import axios from "axios";

export const GET_LOGIN = "GET_LOGIN";
export const GET_DATA = "GET_DATA";

export const getLogin = (payload) => (dispatch) => {
  return fetch(`https://api.earthsfresh.in/api/users/userLogin`, {
    method: "POST",
    headers: {
      Content_type: "application/json",
      SESSIONID: "4532164864",
    },
    body: JSON.stringify({
      user_email: "test@test.com",
      user_password: "Test@123",
    }),
  })
    .then((r) => r.json())
    .then((r) => {
      console.log("r:", r);
    })
    .catch((e) => console.log("e:", e));
};

export const getData = () => (dispatch) => {
  return axios.get(`https://api.earthsfresh.in/api/products`).then((r) => {
    dispatch({ type: GET_DATA, payload: r.data });
  });
};
