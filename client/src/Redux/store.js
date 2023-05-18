import { legacy_createStore, applyMiddleware, combineReducers } from "redux";

import { reducer as AuthReducer } from "../Redux/AuthReducer/reducer";
import { reducer as AppReducer } from "../Redux/AppReducer/reducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  AuthReducer,
  AppReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };
