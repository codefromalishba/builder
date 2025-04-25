import { createSlice } from "@reduxjs/toolkit";
import { initialPhases } from "@/data";

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

export const selectTotalCost = (state, initialPhases) => {
  const { selectedFeature, allFeatures, selectedPhases } = state.feature;

  let fixedCost = 0;
  let totalTimeline = 0;
  let customizationCost = allFeatures.length > 0 ? allFeatures.length * 10 : 0;

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
  // 🧠 Convert timeline in days → weeks
  const totalTimelineInWeeks = Math.ceil(totalTimeline / 7);
  const phaseModifiers = {
    "Product Roadmap": 0.1,
    "Professional Prototype": 0.18,
    "Full Build": 0.2,
    Design: 0.08,
    MVP: 0.05,
  };

  let fixedBonus = 0;
  let customizationBonus = 0;

  selectedPhases.forEach((id) => {
    const phase = initialPhases.find((p) => p.id === id);
    if (phase) {
      const modifier = phaseModifiers[phase.name] || 0;
      fixedBonus += fixedCost * modifier;
      customizationBonus += customizationCost * modifier;
    }
  });

  return {
    fixedCost: fixedCost + fixedBonus,
    customizationCost: customizationCost + customizationBonus,
    totalTimeline,
    totalTimelineInWeeks,
    phasesCost: fixedBonus + customizationBonus,
  };
};
// export const selectTotalCost = (state) => {
//   const { selectedFeature, allFeatures, selectedPhases } = state.feature;

//   let fixedCost = 0;
//   let totalTimeline = 0;
//   let customizationCost = allFeatures.length > 0 ? allFeatures.length * 10 : 0;

//   if (allFeatures.length > 0) {
//     ({ fixedCost, totalTimeline } = allFeatures.reduce(
//       (totals, feature) => ({
//         fixedCost: totals.fixedCost + parseFloat(feature.price),
//         totalTimeline: totals.totalTimeline + parseFloat(feature.timeline),
//       }),
//       { fixedCost: 0, totalTimeline: 0 }
//     ));
//   } else if (selectedFeature) {
//     fixedCost = parseFloat(selectedFeature.price);
//     totalTimeline = parseFloat(selectedFeature.timeline);
//   }

//   // 💡 Phase-based additional cost (10%, 20%, ... etc.)
//   const base = fixedCost + customizationCost;
//   const phasesCost = selectedPhases.reduce((total, phaseId, index) => {
//     const percentage = (index + 1) * 0.1;
//     return total + base * percentage;
//   }, 0);

//   return {
//     fixedCost,
//     customizationCost,
//     totalTimeline,
//     phasesCost, // NEW
//   };
// };
export const {
  setSelectedFeature,
  addFeature,
  removeFeature,
  addPhase,
  removePhase,
} = featureSlice.actions;
export default featureSlice.reducer;
