import { GOOGLE_LOGIN, GOOGLE_LOGOUT, AUTO_LOGIN } from "./types";

export function userReducer(state, action) {
  switch (action.type) {
    default:
      return state;
    case GOOGLE_LOGIN:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { ...state, user: JSON.parse(localStorage.getItem("user")) };
    case GOOGLE_LOGOUT:
      localStorage.removeItem("user");
      return { ...state, user: null };
    case AUTO_LOGIN:
      return { ...state, user: JSON.parse(localStorage.getItem("user")) };
  }
}
