import { GET_DATA, GET_LOGIN } from "./action";

const init = {
  isAuth: false,
  data: [],
};

export const reducer = (store = init, action) => {
  switch (action.type) {
    case GET_LOGIN:
      return {
        ...store,
        isAuth: action.payload,
      };
      case GET_DATA:
        return {
          ...store,
          data:action.payload
        }
    default:
      return store;
  }
};
