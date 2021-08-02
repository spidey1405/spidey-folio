import { configureStore } from "@reduxjs/toolkit";
import assetsReducer from "../features/homePage/HomePageSlice";

export const store = configureStore({
	reducer: {
		assetsReducer: assetsReducer,
	},
});
