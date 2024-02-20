import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  employments: string[];
  workType: boolean;
  datePosted: null | "month" | "week" | "today" | "3days";
  selectedCountry: null | string;
  jobTitle: null | string;
}

const initialState: InitialState = {
  employments: ["fulltime"],
  workType: false,
  datePosted: "month",
  selectedCountry: "United States",
  jobTitle: "Web Developer",
};

const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    setEmployment: (state, { payload }) => {
      if (state.employments.includes(payload)) {
        state.employments = state.employments.filter(
          (employment) => employment !== payload
        );
      } else {
        state.employments.push(payload);
      }
    },
    setWorkType: (state, { payload }) => {
      state.workType = payload;
    },
    setDatePosted: (state, { payload }) => {
      state.datePosted = payload;
    },
    setSelectedCountry: (state, { payload }) => {
      state.selectedCountry = payload;
    },
    setJobTitle: (state, { payload }) => {
      state.jobTitle = payload;
    },
  },
});

export const {
  setEmployment,
  setWorkType,
  setDatePosted,
  setSelectedCountry,
  setJobTitle,
} = filterSlice.actions;
export default filterSlice.reducer;
