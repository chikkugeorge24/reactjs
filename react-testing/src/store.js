import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import RootReducer from "./reducers";

export const middlewares = [ReduxThunk];
const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore);
export const store = createStoreWithMiddlewares(RootReducer);
