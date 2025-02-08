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

export const selectTotalCost = (state) => {
  const { selectedFeature, allFeatures } = state.feature;

  // Base calculations
  let fixedCost = 0;
  let totalTimeline = 0;
  let customizationCost = allFeatures.length > 0 ? allFeatures.length * 10 : 10;

  // If allFeatures is not empty, calculate total price & timeline normally
  if (allFeatures.length > 0) {
    ({ fixedCost, totalTimeline } = allFeatures.reduce(
      (totals, feature) => ({
        fixedCost: totals.fixedCost + parseFloat(feature.price),
        totalTimeline: totals.totalTimeline + parseFloat(feature.timeline),
      }),
      { fixedCost: 0, totalTimeline: 0 }
    ));
  }
  // If allFeatures is empty but selectedFeature exists, use its values
  else if (selectedFeature) {
    fixedCost = parseFloat(selectedFeature.price);
    totalTimeline = parseFloat(selectedFeature.timeline);
  }

  return {
    fixedCost,
    totalTimeline,
    customizationCost,
  };
};

export const { setSelectedFeature, addFeature, removeFeature } =
  featureSlice.actions;
export default featureSlice.reducer;
