import { configureStore } from "@reduxjs/toolkit";
import questionsSlice from "./questionsSlice";
import usersSlice from "./usersSlice";

const store = configureStore({
  reducer: {
    questions: questionsSlice,
    users: usersSlice,
  },
});

export default store;
