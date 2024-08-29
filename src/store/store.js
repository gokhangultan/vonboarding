import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
import { globalReducer } from "./reducers/GlobalReducer";
import { userReducer } from "./reducers/UserReducer";
import { thunk } from "redux-thunk";
import authReducer from "./reducers/AuthReducer";

const reducers = combineReducers({
    global: globalReducer,
    user: userReducer,
    auth: authReducer
})


export const store = createStore(
    reducers,
    applyMiddleware(thunk, logger)
);