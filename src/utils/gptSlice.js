import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggaleGptSearchView: (state ) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const { toggaleGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;
