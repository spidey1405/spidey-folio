import { nanoid } from "nanoid";
import { sectionIds } from "../../miscMappings";
export const sectionAbout = {
	showSection: true,
	mainContent_sectionId: sectionIds.mainContent_sectionId,
	aboutParaHeader: "Who Am I?", // About Para Header is the Primary header of the main section. This could be anything related to a heading for your about who Am I? What do I do? etc.
	aboutParaStyle: { marginBottom: "5rem" }, //External Para Styling
	mainIntroContents: [
		{
			id: "mainIntroContents__" + nanoid(),
			heading: "Professionally",
			headingStyle: {
				marginBottom: "1.5rem",
			},
			description:
				"I am working as a Software Engineer from last 1.5 years. My major work includes full stack development, alertbot integrations, data driven intelligence and automation etc. In my spare time, I love to connect with tech enthusiasts, entrepreneurs and Hackathon teams.",
			descriptionStyle: {},
		},

		{
			id: "mainIntroContents__" + nanoid(),
			heading: "Personally",
			headingStyle: {
				marginBottom: "1.5rem",
			},
			description:
				"I am a writer, athlete, poet, programmer, robocist and computer vision enthusiast. I love to bridge up the gap between amazing ideas and real world. I admire the concept of entreprenurship and would love to be a part of startups which align with my idealogy to solve real world problems.",
			descriptionStyle: {},
		},
	], //Includes the Header along with the Description

	aboutConnectButtonText: "Linkedin Connect", //Note that Forward arrow will remain and if you want to replace that, you may directly go to the code snippet
	aboutConnectButtonRedirectLink: "https://www.linkedin.com/in/shivamsahil/",
	composition: {
		//Images to be displayed in About Section
		img1: "web/images/composition/cover-3.jpg",
		img2: "web/images/composition/cover-2.jpg",
		img3: "web/images/composition/cover-1.jpg",
	},
};
