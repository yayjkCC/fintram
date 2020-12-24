import { applyMiddleware, createStore } from "redux";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import root from "./reducers";

export const store = createStore(root, applyMiddleware(thunk));
export const persistor = persistStore(store);
