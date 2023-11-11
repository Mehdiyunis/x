import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const createPopUp = createSlice({
  name: "createPopUp",
  initialState,
  reducers: {
    openCreatePopup: (state) => {
      state.value = true;
    },
    closeCreatePopup: (state) => {
      state.value = false;
    },
  },
});
export const { openCreatePopup, closeCreatePopup } = createPopUp.actions;

export default createPopUp.reducer;