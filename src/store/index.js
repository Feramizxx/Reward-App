import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { customerTransactionsApi as customerApi } from "./CustomerApi";
import { customerTransactionsApi } from "./CustomerApi";
export const store = configureStore({
  reducer: {
    [customerTransactionsApi.reducerPath]: customerTransactionsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(customerApi.middleware),
});

setupListeners(store.dispatch);
