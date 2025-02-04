import { createSlice } from "@reduxjs/toolkit";

const featureSlice = createSlice({
  name: "feature",
  initialState: {
    selectedFeature: null,
    allFeatures: [],
  },
  reducers: {
    setSelectedFeature: (state, action) => {
      console.log("action.payload", action.payload);
      state.selectedFeature = action.payload;
    },
    addFeature: (state, action) => {
      console.log("Adding feature:", action.payload);
      state.allFeatures.push(action.payload);
    },
  },
});

export const { setSelectedFeature, addFeature } = featureSlice.actions;
export default featureSlice.reducer;
