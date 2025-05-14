import { createSlice } from "@reduxjs/toolkit";
// import { initialPhases, speedOptions } from "@/data";

const featureSlice = createSlice({
  name: "feature",
  initialState: {
    selectedFeature: null,
    allFeatures: [],
    selectedPhases: [],
    speed: 3,
    recentBuildCard: null,
    initialPhases: null,
    selectedPlatformss: null,
    cloudEnabled: false,
    cloudRangeIndex: 1,
  },
  reducers: {
    setCloudAndRange: (state, action) => {
      const { cloudEnabled, cloudRange } = action.payload;
      state.cloudEnabled = cloudEnabled;
      state.cloudRangeIndex = cloudRange;
    },
    toggleCloud: (state) => {
      state.cloudEnabled = !state.cloudEnabled;
    },
    setCloudRangeIndex: (state, action) => {
      state.cloudRangeIndex = action.payload;
    },
    updateRecentBuildCard: (state, action) => {
      state.recentBuildCard = action.payload;
    },
    changeSpeed: (state, action) => {
      state.speed = action.payload;
    },
    updatePlatforms: (state, action) => {
      if (state.initialPhases) {
        state.initialPhases = state.initialPhases.map((phase) => ({
          ...phase,
          platform: action.payload,
        }));
      }
      state.selectedPlatformss = action.payload;
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
    removeAllFeatures: (state) => {
      state.allFeatures = [];
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
  removeAllFeatures,
  updateRecentBuildCard,
  addFeature,
  removeFeature,
  updatePlatforms,
  updateInitialPhases,
  changeSpeed,
  addPhase,
  setPhases,
  removePhase,
  toggleCloud,
  setCloudRangeIndex,
  setCloudAndRange,
} = featureSlice.actions;
export default featureSlice.reducer;
