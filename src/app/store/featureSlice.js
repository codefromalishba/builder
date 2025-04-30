import { createSlice } from "@reduxjs/toolkit";
import { initialPhases } from "@/data";

const featureSlice = createSlice({
  name: "feature",
  initialState: {
    selectedFeature: null,
    allFeatures: [],
    selectedPhases: [],
    initialPhases: initialPhases, // NEW
  },
  reducers: {
    setPhases: (state, action) => {
      state.selectedPhases = action.payload;
    },
    setSelectedFeature: (state, action) => {
      state.selectedFeature = action.payload;
    },
    addFeature: (state, action) => {
      const exists = state.allFeatures.some((f) => f.id === action.payload.id);
      if (!exists) {
        state.allFeatures.push(action.payload);
      }
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

export const calculateFeatureTotals = (
  features,
  selectedPhases = [],
  initialPhases = []
) => {
  console.log("selectedPhases", selectedPhases);
  console.log("initialPhases", initialPhases);
  if (!Array.isArray(features)) {
    console.error("Expected features to be an array but got:", features);
    features = [];
  }

  const phaseModifiers = {
    "Product Roadmap": 0.1,
    "Professional Prototype": 0.18,
    "Full Build": 0.2,
    Design: 0.08,
    MVP: 0.05,
  };

  const fixedCost = features.reduce(
    (sum, feature) => sum + parseFloat(feature.price || 0),
    0
  );

  const customizationCost = features.length * 10;

  const totalTimeline = features.reduce(
    (sum, feature) => sum + parseFloat(feature.timeline || 0),
    0
  );

  const indicativeDurationInWeeks = Math.ceil(totalTimeline / 7);

  // 🧠 Apply Phase Modifiers
  let fixedBonus = 0;
  let customizationBonus = 0;

  selectedPhases.forEach((id) => {
    const phase = initialPhases.find((p) => parseInt(p.id) === id);
    if (phase) {
      const modifier = phaseModifiers[phase.name] || 0;
      fixedBonus += fixedCost * modifier;
      customizationBonus += customizationCost * modifier;
    }
  });

  console.log("fixedBonus", fixedBonus);
  console.log("customisationBonus", customizationBonus);
  const totalFixedCost = fixedCost + fixedBonus;
  const totalCustomizationCost = customizationCost + customizationBonus;

  return {
    fixedCost: totalFixedCost,
    customizationCost: totalCustomizationCost,
    totalCost: (totalFixedCost + totalCustomizationCost).toFixed(0),
    indicativeDurationInWeeks,
    phasesCost: fixedBonus + customizationBonus,
  };
};

export const {
  setSelectedFeature,
  addFeature,
  removeFeature,
  addPhase,
  setPhases,
  removePhase,
} = featureSlice.actions;
export default featureSlice.reducer;
