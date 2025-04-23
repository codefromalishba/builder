import { createSlice } from "@reduxjs/toolkit";

const featureSlice = createSlice({
  name: "feature",
  initialState: {
    selectedFeature: null,
    allFeatures: [],
    selectedPhases: [], // NEW
  },

  reducers: {
    setSelectedFeature: (state, action) => {
      state.selectedFeature = action.payload;
    },
    addFeature: (state, action) => {
      state.allFeatures.push(action.payload);
    },
    removeFeature: (state, action) => {
      state.allFeatures = state.allFeatures.filter(
        (feature) => feature.id !== action.payload
      );
    },
    addPhase: (state, action) => {
      if (!state.selectedPhases.includes(action.payload)) {
        state.selectedPhases.push(action.payload);
      }
    },
    removePhase: (state, action) => {
      state.selectedPhases = state.selectedPhases.filter(
        (id) => id !== action.payload
      );
    },
  },
});

export const selectTotalCost = (state) => {
  const { selectedFeature, allFeatures, selectedPhases } = state.feature;

  let fixedCost = 0;
  let totalTimeline = 0;
  let customizationCost = allFeatures.length > 0 ? allFeatures.length * 10 : 10;

  if (allFeatures.length > 0) {
    ({ fixedCost, totalTimeline } = allFeatures.reduce(
      (totals, feature) => ({
        fixedCost: totals.fixedCost + parseFloat(feature.price),
        totalTimeline: totals.totalTimeline + parseFloat(feature.timeline),
      }),
      { fixedCost: 0, totalTimeline: 0 }
    ));
  } else if (selectedFeature) {
    fixedCost = parseFloat(selectedFeature.price);
    totalTimeline = parseFloat(selectedFeature.timeline);
  }

  // 💡 Phase-based additional cost (10%, 20%, ... etc.)
  const base = fixedCost + customizationCost;
  const phasesCost = selectedPhases.reduce((total, phaseId, index) => {
    const percentage = (index + 1) * 0.1;
    return total + base * percentage;
  }, 0);

  return {
    fixedCost,
    customizationCost,
    totalTimeline,
    phasesCost, // NEW
  };
};
export const {
  setSelectedFeature,
  addFeature,
  removeFeature,
  addPhase,
  removePhase,
} = featureSlice.actions;
export default featureSlice.reducer;
