import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const vacanciesAPI = createApi({
  reducerPath: "vacanciesAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://findwork.dev/api/jobs/",
    credentials: "same-origin",
    method: "PATCH",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        "Token 380a5124ce9fe16b64a9000c04f4935a00215510"
      );
      return headers;
    },
  }),
  endpoints: (build) => ({
    getTest: build.query({
      query: () => ({
        url: "",
        method: "GET",
        headers: {
          Authorization: "Token 380a5124ce9fe16b64a9000c04f4935a00215510",
          "Access-Control-Allow-Origin": " https://findwork.dev/api/jobs/",
        },
      }),
    }),
  }),
});

export const { useGetTestQuery } = vacanciesAPI;
