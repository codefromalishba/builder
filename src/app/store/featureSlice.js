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
    removeFeature: (state, action) => {
      console.log("Removing feature with ID:", action.payload);
      state.allFeatures = state.allFeatures.filter(
        (feature) => feature.id !== action.payload
      );
    },
  },
});

export const { setSelectedFeature, addFeature, removeFeature } =
  featureSlice.actions;
export default featureSlice.reducer;
