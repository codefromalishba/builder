import { createSlice } from "@reduxjs/toolkit";

const featureSlice = createSlice({
  name: "feature",
  initialState: {
    selectedFeature: null,
  },
  reducers: {
    // updateProfile: (state, action) => {
    //   const { name, email } = action.payload;
    //   if (name !== undefined) state.name = name;
    //   if (email !== undefined) state.email = email;
    // },
    setSelectedFeature: (state, action) => {
      console.log("action.payload", action.payload);
      state.selectedFeature = action.payload;
    },
  },
});

export const { setSelectedFeature } = featureSlice.actions;
export default featureSlice.reducer;
