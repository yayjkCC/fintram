import firebase from "firebase";
import { Dispatch } from "redux";
import { FETCH_USER_DETAILS, FETCH_USER_DETAILS_ERROR } from "../action-types";

type FetchUserType = () => (dispatch: Dispatch) => void;

const fetchUser: FetchUserType = () => (dispatch) => {
  firebase
    .database()
    .ref(`users/${firebase.auth().currentUser?.uid}`)
    .on(
      "value",
      (snapshot) =>
        dispatch({ type: FETCH_USER_DETAILS, payload: snapshot.val() }),
      (error: Record<string, unknown>) =>
        dispatch({ type: FETCH_USER_DETAILS_ERROR, payload: error }),
    );
};

export default fetchUser;
