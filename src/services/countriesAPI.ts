import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countriesAPI = createApi({
  reducerPath: "countriesAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1/all" }),
  endpoints: (build) => ({
    getAllCountries: build.query({
      query: () => "",
    }),
  }),
});

export const { useGetAllCountriesQuery } = countriesAPI;
