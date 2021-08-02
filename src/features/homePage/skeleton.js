import React from "react";
import TopView from "./components/TopView";
import Main from "./components/Main";
import TopNavigation from "./components/NavItem";
import Footer from "./components/Footer";
export default function skeleton() {
	return (
		<div>
			<TopNavigation />
			<TopView />
			<Main />
			<Footer />
		</div>
	);
}
