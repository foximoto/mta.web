import { configureStore } from "@reduxjs/toolkit";
import partnerSlice from "./partner.slice";

const store = configureStore({
  reducer: {
    partners: partnerSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
