import React from "react";
import classes from "./Main.module.scss";
import {
	MappingAbout,
	MapFeaturesSection,
	MapProjects,
	MapTestimonials,
	MapExperienceandCocurricular,
} from "./mappingFunctions/mapping";

import {
	useSelector,
	//    useDispatch
} from "react-redux";
import { getMainContent } from "../../HomePageSlice";

export default function Main() {
	//Complete Main Body
	const {
		sectionAbout,
		sectionExperiences,
		sectionFeatures,
		sectionProjects,
		sectionReferences,
	} = useSelector(getMainContent);

	return (
		<main className={classes.mainBody}>
			<MappingAbout mainContent={sectionAbout} classes={classes} />
			<MapFeaturesSection sectionFeatures={sectionFeatures} classes={classes} />
			<MapProjects sectionProjects={sectionProjects} classes={classes} />
			<MapTestimonials
				testimonialComponent={sectionReferences}
				classes={classes}
			/>
			<MapExperienceandCocurricular
				exprerienceContent={sectionExperiences}
				classes={classes}
			/>
		</main>
	);
}
