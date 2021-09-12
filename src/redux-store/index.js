import { configureStore } from "@reduxjs/toolkit";
import mealReducer from "./reducer-slice";

const store = configureStore({ reducer: mealReducer });

export default store;
