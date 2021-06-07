import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/firebaseConfig";
import { uiFinishLoading, uiStartLoading } from "./ui";
import Swal from "sweetalert2";

export const startLoginWithEmailPassword = (password, email) => {
  return (dispatch) => {
    dispatch(uiStartLoading());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        dispatch(uiFinishLoading());
      })
      .catch((e) => {
        dispatch(uiFinishLoading());
        Swal.fire("Fail", e.message, "error");
      });
  };
};

export const startRegisterWithEmailPasswordEmail = (email, password, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        dispatch(login(user.uid, user.displayName));
      })
      .catch((err) => console.log(err));
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: { uid, displayName },
  };
};

export const startLogOut = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
  };
};

export const logout = () => ({ type: types.logout });
