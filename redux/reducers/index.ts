import { combineReducers } from "redux";
import AsyncStorage from "@react-native-community/async-storage";
import { persistReducer } from "redux-persist";
import user from "./user";

const rootConfig = {
  key: "root",
  storage: AsyncStorage,
};

const root = combineReducers({ user });
const persistedReducer = persistReducer(rootConfig, root);

export default persistedReducer;
