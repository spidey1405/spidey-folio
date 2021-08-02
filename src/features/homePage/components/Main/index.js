import React from "react";
import classes from "./Main.module.scss";
import {
	mappingAbout,
	mapFeaturesSection,
	map_Projects,
	mapTestimonials,
	mapExperienceandCocurricular,
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

	//About Section
	const aboutSection = mappingAbout(sectionAbout, classes);

	//Features Section
	const featuresSection = mapFeaturesSection(sectionFeatures, classes);

	//Project Section
	const projectsSection = map_Projects(sectionProjects, classes);

	//Testimonial Sections
	const testimonials = mapTestimonials(sectionReferences, classes);

	//Experience Section
	const experiences = mapExperienceandCocurricular(sectionExperiences, classes);

	return (
		<main className={classes.mainBody}>
			{aboutSection}
			{featuresSection}
			{projectsSection}
			{testimonials}
			{experiences}
		</main>
	);
}
