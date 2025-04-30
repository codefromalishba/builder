import { createSlice } from "@reduxjs/toolkit";
import { initialPhases, speedOptions } from "@/data";

const featureSlice = createSlice({
  name: "feature",
  initialState: {
    selectedFeature: null,
    allFeatures: [],
    selectedPhases: [],
    speed: 3,
    initialPhases: initialPhases, // NEW
  },
  reducers: {
    changeSpeed: (state, action) => {
      state.speed = action.payload;
    },
    updatePlatforms: (state, action) => {
      state.initialPhases = state.initialPhases.map((phase, index) => ({
        ...phase,
        platform: action.payload,
      }));
    },

    updateInitialPhases: (state, action) => {
      state.initialPhases = action.payload;
    },

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
  initialPhases = [],
  speed = 3
) => {
  if (!Array.isArray(features)) {
    console.error("Expected features to be an array but got:", features);
    features = [];
  }

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

  // ✅ Bonuses for selected phases
  const bonusModifiers = {
    "Product Roadmap": 0.1,
    "Professional Prototype": 0.18,
    "Full Build": 0.2,
  };

  let fixedBonus = 0;
  let customizationBonus = 0;

  selectedPhases.forEach((id) => {
    const phase = initialPhases.find((p) => parseInt(p.id) === id);
    if (phase && bonusModifiers[phase.name]) {
      const modifier = bonusModifiers[phase.name];
      fixedBonus += fixedCost * modifier;
      customizationBonus += customizationCost * modifier;
    }
  });

  // 🔻 Penalties for deselected Design or MVP
  const penaltyModifiers = {
    Design: 0.08,
    MVP: 0.05,
  };

  let fixedPenalty = 0;
  let customizationPenalty = 0;

  Object.entries(penaltyModifiers).forEach(([phaseName, penalty]) => {
    const isSelected = initialPhases.some(
      (phase) =>
        phase.name === phaseName && selectedPhases.includes(parseInt(phase.id))
    );
    if (!isSelected) {
      fixedPenalty += fixedCost * penalty;
      customizationPenalty += customizationCost * penalty;
    }
  });

  const baseFixedCost = fixedCost + fixedBonus - fixedPenalty;
  const baseCustomizationCost =
    customizationCost + customizationBonus - customizationPenalty;

  // 🚀 Apply speed adjustment

  const speedIndex = Math.max(0, Math.min(speed - 1, 4)); // Ensure valid index
  const speedAdjustment = speedOptions[speedIndex].adjustment;

  const speedFixedBonus = baseFixedCost * speedAdjustment;
  const speedCustomizationBonus = baseCustomizationCost * speedAdjustment;

  const finalFixedCost = baseFixedCost + speedFixedBonus;
  const finalCustomizationCost =
    baseCustomizationCost + speedCustomizationBonus;

  // const totalFixedCost = fixedCost + fixedBonus - fixedPenalty;
  // const totalCustomizationCost =
  //   customizationCost + customizationBonus - customizationPenalty;

  return {
    fixedCost: finalFixedCost,
    customizationCost: finalCustomizationCost,
    totalCost: (finalFixedCost + finalCustomizationCost).toFixed(0),
    indicativeDurationInWeeks,
    phasesCost:
      fixedBonus + customizationBonus - (fixedPenalty + customizationPenalty),
    speedAdjustmentCost: speedFixedBonus + speedCustomizationBonus,
  };
};

export const {
  setSelectedFeature,
  addFeature,
  removeFeature,
  updatePlatforms,
  updateInitialPhases,
  changeSpeed,
  addPhase,
  setPhases,
  removePhase,
} = featureSlice.actions;
export default featureSlice.reducer;
