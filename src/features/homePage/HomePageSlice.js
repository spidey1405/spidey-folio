import { createSlice } from "@reduxjs/toolkit";
import * as pageConstants from "./constants";

const initialState = {
	topHeader: pageConstants.topHeaders,
	mainContent: pageConstants.mainContent,
	navigation: pageConstants.navItemsHeader,
	footer: pageConstants.footerData,
};

export const assetSlice = createSlice({
	name: "pageassets",
	initialState,
	reducers: {},
});

export const getTopHeaders = state => state.assetsReducer.topHeader;
export const getMainContent = state => state.assetsReducer.mainContent;
export const getNavigation = state => state.assetsReducer.navigation;
export const getFooter = state => state.assetsReducer.footer;
export const getForkingData = state => state.assetsReducer.githubForking;

export default assetSlice.reducer;
