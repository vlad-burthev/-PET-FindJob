import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const vacanciesAPI = createApi({
  reducerPath: "vacanciesAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jobs-api14.p.rapidapi.com/list",
    credentials: "same-origin",
    method: "PATCH",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "20f608a9a5msh87e2814b43bbe5fp1f7168jsn1fc93d55ecaa"
      );
      headers.set("X-RapidAPI-Host", "jobs-api14.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (build) => ({
    getVacancies: build.query({
      query: ({
        datePosted,
        workType,
        selectedCountry,
        employments,
        jobTitle,
      }) => ({
        url: "",
        method: "GET",
        params: {
          query: jobTitle !== null ? jobTitle : "FrontEnd",
          location: selectedCountry,
          remoteOnly: workType,
          datePosted,
          employmentTypes: employments.join(";"),
        },
      }),
    }),
  }),
});

export const { useGetVacanciesQuery } = vacanciesAPI;
