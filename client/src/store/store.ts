import { combineReducers, configureStore } from "@reduxjs/toolkit";
import shoppingCartReducer from "./slices/shoppingCart.slice";

const reducer = combineReducers({
  shoppingCart: shoppingCartReducer,
});

export const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
