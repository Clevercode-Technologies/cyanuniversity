import { configureStore, combineReducers } from "@reduxjs/toolkit";

// Reducers
import appSlice from "./Splice/AppSplice";

const rootReducer = combineReducers({
  data: appSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;