import { combineReducers } from "redux";
// import { connectRouter } from "connected-react-router";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import sample from "./sample";

const authConfig = {
  key: "auth",
  whitelist: ["accessToken","system","refreshToken","startTime","refreshTokenExpireDate","tokenExpireDate","permissions"],
  storage,
};

export default (history) =>
  combineReducers({
    // router: connectRouter(history),
    sample: persistReducer(authConfig, sample),
  });
