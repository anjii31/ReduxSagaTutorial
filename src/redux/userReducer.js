import { USER_UPDATE_SUCCEEDED } from "./userActions";
import { createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  name: "Sameera",
  age: 22,
};

const userReducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(USER_UPDATE_SUCCEEDED, (state, action) => {
    state.name = action.payload;
  });
});

export default userReducer;
