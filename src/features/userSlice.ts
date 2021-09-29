import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";

interface USER {
  displayName: string;
}

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: { displayName: "" },
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = { displayName: "" };
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
