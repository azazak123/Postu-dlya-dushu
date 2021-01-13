import { GOOGLE_LOGIN, GOOGLE_LOGOUT, AUTO_LOGIN } from "./types";

import firebase from "../firebase.js";

const provider = new firebase.auth.GoogleAuthProvider();

export function googleLogin() {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        let user = result.user;
        dispatch({ type: GOOGLE_LOGIN, payload: user });
      })
      .catch((error) => {});
  };
}
export function googleLogout() {
  return (dispatch) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: GOOGLE_LOGOUT });
      })
      .catch((error) => {});
  };
}
export function autoLogin() {
  return { type: AUTO_LOGIN };
}
