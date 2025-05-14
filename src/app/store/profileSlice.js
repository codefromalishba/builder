import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  uid: "",
  buildCards: [],
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      const { name, email } = action.payload;
      if (name !== undefined) state.name = name;
      if (email !== undefined) state.email = email;
    },
    setProfile: (state, action) => {
      const { name, email, uid, buildCards } = action.payload;
      state.name = name;
      state.email = email;
      state.uid = uid;
      state.buildCards = buildCards;
    },
    resetProfile: () => initialState,
  },
});

export const { updateProfile, setProfile, resetProfile } = profileSlice.actions;
export default profileSlice.reducer;
