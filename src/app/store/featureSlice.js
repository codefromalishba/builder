import { createSlice } from "@reduxjs/toolkit";

const featureSlice = createSlice({
  name: "feature",
  initialState: {
    selectedFeature: null,
    allFeatures: [],
  },
  reducers: {
    setSelectedFeature: (state, action) => {
      state.selectedFeature = action.payload;
    },
    addFeature: (state, action) => {
      state.allFeatures.push(action.payload);
    },
    removeFeature: (state, action) => {
      console.log("removing feature");
      state.allFeatures = state.allFeatures.filter(
        (feature) => feature.id !== action.payload
      );
    },
  },
});

export const { setSelectedFeature, addFeature, removeFeature } =
  featureSlice.actions;
export default featureSlice.reducer;
