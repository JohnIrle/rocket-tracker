import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction, Action, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

const middlewares = [thunk];

export type RootStore = ReturnType<typeof rootReducer>;
export type ThunkActionType<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStore,
  null,
  Action<String>
>;
export type ThunkDispatchType = ThunkDispatch<RootStore, null, AnyAction>;

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
