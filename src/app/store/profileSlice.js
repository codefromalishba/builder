import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    name: "Malik Alishba",
    email: "dummy@mail.com",
  },
  reducers: {
    updateProfile: (state, action) => {
      const { name, email } = action.payload;
      if (name !== undefined) state.name = name;
      if (email !== undefined) state.email = email;
    },
    setProfile: (state, action) => {
      const { name, email } = action.payload;
      state.name = name;
      state.email = email;
    },
  },
});

export const { updateProfile, setProfile } = profileSlice.actions;
export default profileSlice.reducer;
