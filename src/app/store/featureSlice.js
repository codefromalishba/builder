import { createSlice } from "@reduxjs/toolkit";
import { initialPhases, speedOptions } from "@/data";

const featureSlice = createSlice({
  name: "feature",
  initialState: {
    selectedFeature: null,
    allFeatures: [],
    selectedPhases: [],
    speed: 3,
    recentBuildCard: null,
    initialPhases: initialPhases, // NEW
  },
  reducers: {
    updateRecentBuildCard: (state, action) => {
      state.recentBuildCard = action.payload;
    },
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
      console.log("initialPhases", action.payload);
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

export const {
  setSelectedFeature,
  updateRecentBuildCard,
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
