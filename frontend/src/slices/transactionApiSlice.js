import { ALL_TRANSACTION, STATISTICS } from "../utils/baseUrls";
import { apiSlice } from "./apiSlice";
const transactionApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllTransaction: builder.query({
      query: ({ search, month, page, limit = 10 }) => ({
        url: `${ALL_TRANSACTION}`,
        params: { search, month, page, limit },
      }),
      keepUnusedDataFor: 0,
    }),
    getCombinedData: builder.query({
      query: (month) => ({
        url: `${STATISTICS}`,
        params: { month },
      }),
    }),
  }),
});

export const { useGetAllTransactionQuery, useGetCombinedDataQuery } =
  transactionApi;
