import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const customerTransactionsApi = createApi({
  reducerPath: "customerTransactionApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_BASE_URL}` }),
  endpoints: (builder) => ({
    getCustomerTransactions: builder.query({
      query: () => "/customerTransactions",
    }),
  }),
});

export const { useGetCustomerTransactionsQuery } = customerTransactionsApi;
