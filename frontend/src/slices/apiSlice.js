import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../utils/baseUrls";
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
});
export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["sales", "activities"],
  endpoints: (builder) => ({}),
});
