import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginstart: (state) => {
        state.isFetching=true
    },
    loginSuccess: (state,action) => {
        state.isFetching = false;
        state.currentUser=action.payload
    },
    loginFailure: (state) => {
        state.isFetching = false;
        state.error = true;
    },
  },
});

export const {loginstart,loginSuccess,loginFailure} = userSlice.actions;
export default userSlice.reducer;
