import { AnyAction } from "redux";
import { FETCH_USER_DETAILS, FETCH_USER_DETAILS_ERROR } from "../action-types";

interface Bank {
  name: string;
  type: "current" | "savings";
  key: string;
}

type UserState = {
  user: {
    firstName: string;
    lastName: string;
    gmail: string;
    locale: string;
    banks?: Array<Bank>;
    primaryBankKey?: string;
  };
  userError: Record<string, unknown> | undefined;
};

const initialState: UserState = {
  user: {
    firstName: "",
    lastName: "",
    gmail: "",
    locale: "",
  },
  userError: undefined,
};

const user: (state: UserState, action: AnyAction) => UserState = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case FETCH_USER_DETAILS:
      return { ...state, user: action.payload };
    case FETCH_USER_DETAILS_ERROR:
      return { ...state, userError: action.payload };
    default:
      return { ...state };
  }
};

export default user;
