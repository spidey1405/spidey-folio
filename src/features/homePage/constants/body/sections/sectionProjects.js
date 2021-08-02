import { nanoid } from "nanoid";
import { sectionIds } from "../../miscMappings";
import { colors } from "../constants/cssColors";

export const sectionProjects = {
	showSection: true,
	projectsHeader: "Cool Things I did",
	projectsHeaderStyle: { marginTop: "12rem", marginBottom: "3rem" },
	sectionProjects_sectionId: sectionIds.sectionProjects_sectionId,
	id: "sectionProjects__" + nanoid(),
	projectComponents: {
		id: "projectComponents__" + nanoid(),
		components: [
			{
				id: "projectComponents_components__" + nanoid(),
				display: "My Water Chain",
				back: {
					display: "About",
					gradientColor1: colors.color_secondary_light,
					gradientColor2: colors.color_secondary_dark,
					gradientDirection: "right bottom",
					projectDescription: `My Water Chain is a full stack project integrated with IoT. I designed the entire project architecture using Raspberry Pi as the Brain of hardware control system and water sensors. 
                        Raspberry Pi creates it's local server where it pings to the backend database, that was built on Python (Flask). 
                        It communicates with the server to verify it's identity and then keeps monitoring the data and send the real time updates.`, //Using New Line to break paragraphs
					buttonList: [
						{
							id: "projectComponents_components_buttonList" + nanoid(),
							href: "https://github.com/sedhha/my-water-chain",
							buttonText: "Source Code",
						},

						{
							id: "projectComponents_components_buttonList" + nanoid(),
							href: "https://www.youtube.com/watch?v=mFHnrSxknFQ",
							buttonText: "View",
						},
					],
				},
				front: {
					imgSource: "web/images/projects/waterchain.jpg",
					display: "front",
					gradientColor1: colors.color_white,
					gradientColor2: colors.color_white,
					disableGradientForPhoto: true,
					gradientDirection: "right bottom",
					featureList: [
						{
							id: "projectComponents_components__" + nanoid(),
							display: "Honorable Mention at Spark Blockchain Hack",
						},

						{
							id: "projectComponents_components__" + nanoid(),
							display: "IoT to monitor Sensor Reading",
						},

						{
							id: "projectComponents_components__" + nanoid(),
							display: "Computer Vision for Virtual Flow Rate",
						},

						{
							id: "projectComponents_components__" + nanoid(),
							display: "MongoDB as the database",
						},

						{
							id: "projectComponents_components__" + nanoid(),
							display: "Flask as Backend server and React JS as frontend",
						},
					],
				},
			},

			{
				id: "projectComponents_components__" + nanoid(),
				display: "CoviFitness",
				back: {
					display: "About",
					gradientColor1: colors.color_primary_light,
					gradientColor2: colors.color_primary_dark,
					gradientDirection: "right bottom",
					projectDescription: `Due to extreme slowdown in the pandemic, we all have been used to staying on our beds all the time. 
                        Covi Fitness is a simple Virtual game that responds to your movements and using computer vision, 
                        it translates it as a virtual joystick to control the character's movement in the game!`, //Using New Line to break paragraphs
					buttonList: [
						{
							id: "projectComponents_components_buttonList" + nanoid(),
							href: "https://github.com/sedhha/covifitness",
							buttonText: "Source Code",
						},

						{
							id: "projectComponents_components_buttonList" + nanoid(),
							href: "https://www.youtube.com/watch?v=WAR2-X3veaE",
							buttonText: "View",
						},
					],
				},
				front: {
					imgSource: "web/images/projects/covifitness.jpg",
					display: "front",
					disableGradientForPhoto: false,
					gradientColor1: colors.color_white,
					gradientColor2: colors.color_white,
					gradientDirection: "right bottom",
					featureList: [
						{
							id: "projectComponents_components__" + nanoid(),
							display: "Pygame Interface for dynamic actions",
						},

						{
							id: "projectComponents_components__" + nanoid(),
							display: "Computer Vision for movement detection",
						},

						{
							id: "projectComponents_components__" + nanoid(),
							display: "Virtual JoyStick for Jump Height Calibration",
						},

						{
							id: "projectComponents_components__" + nanoid(),
							display: "Virtual JoyStick to detect hand gestures",
						},
					],
				},
			},

			{
				id: "projectComponents_components__" + nanoid(),
				display: "GeeCorn",
				back: {
					display: "About",
					gradientColor1: colors.color_tertiary_light,
					gradientColor2: colors.color_tertiary_dark,
					gradientDirection: "right bottom",
					projectDescription: `Gee-Corn is a Flutter based mobile app which allows geeks all around the world to discover their partners with common interests and accordingly learn a new skill.
                        At the moment, the application is down due to some bugs and I don't have time to relaunch it. Would love to collaborate and work with
                        someone on this as a hackathon project and maybe we could take it from there.`, //Using New Line to break paragraphs
					buttonList: [
						{
							id: "projectComponents_components_buttonList" + nanoid(),
							href: "https://github.com/sedhha/GeeCorn",
							buttonText: "Source Code",
						},

						{
							id: "projectComponents_components_buttonList" + nanoid(),
							href: "https://www.youtube.com/watch?v=Y4PzMjd71GE",
							buttonText: "View",
						},
					],
				},
				front: {
					imgSource: "web/images/projects/geecorn.png",
					display: "front",
					disableGradientForPhoto: true,
					gradientColor1: colors.color_white,
					gradientColor2: colors.color_white,
					gradientDirection: "right bottom",
					featureList: [
						{
							id: "projectComponents_components__" + nanoid(),
							display: "Category Winner at FlutterThon 2020",
						},

						{
							id: "projectComponents_components__" + nanoid(),
							display:
								"Tinder for Geeks to meet and learn new things this pandemic",
						},

						{
							id: "projectComponents_components__" + nanoid(),
							display:
								"Matches users based on their area of expertise and interests",
						},

						{
							id: "projectComponents_components__" + nanoid(),
							display: "Fluid UI and Column View",
						},
					],
				},
			},
			{
				id: "projectComponents_components__" + nanoid(),
				display: "The Third Eye",
				back: {
					display: "About",
					specialHeaderStyling: { marginBottom: "0.25rem" },
					infoStyling: { marginTop: "2rem" },

					gradientColor1: colors.color_secondary_light,
					gradientColor2: colors.color_secondary_dark,
					gradientDirection: "right bottom",
					projectDescription: `The Third Eye is an all in one solution for the visually impaired people. With the help of advance computer vision algorithms and cloud vision API, we have created an experience for the users to see the world differently.
                        The vibration motors and the ultrasonic sensors helps in building a 3D distance map and accurately compute things going around the surroundings. Azure API moment detection helps users to capture and live the moment with others without gettint the feeling of left out.
                        Capitol One Transaction API allows the user to perform purchase and money transfer with ease!`, //Using New Line to break paragraphs
					buttonList: [
						{
							id: "projectComponents_components_buttonList" + nanoid(),
							href: "https://github.com/sedhha/PennAppsXX",
							buttonText: "Source Code",
						},

						{
							id: "projectComponents_components_buttonList" + nanoid(),
							href: "https://devpost.com/software/the-third-eye",
							buttonText: "View",
						},
					],
				},
				front: {
					imgSource: "web/images/projects/thirdeye.jpg",
					display: "front",
					gradientColor1: colors.color_white,
					gradientColor2: colors.color_white,
					disableGradientForPhoto: true,
					gradientDirection: "right bottom",
					featureList: [
						{
							id: "projectComponents_components__" + nanoid(),
							display: "Top 30 Award at PennAppsXX among 1200 global hackers.",
						},

						{
							id: "projectComponents_components__" + nanoid(),
							display:
								"Google Cloud Vision and Azure Vision API for moment description and object Identification",
						},

						{
							id: "projectComponents_components__" + nanoid(),
							display:
								"OpenCV Dlib module for facial recognition and registration.",
						},

						{
							id: "projectComponents_components__" + nanoid(),
							display:
								"Alexa integrated Flutter Application for providing best User Experience",
						},
					],
				},
			},

			{
				id: "projectComponents_components__" + nanoid(),
				display: "Agrobuddy",
				back: {
					display: "About",
					gradientColor1: colors.color_primary_light,
					gradientColor2: colors.color_primary_dark,
					infoStyling: { marginTop: "2rem" },
					gradientDirection: "right bottom",
					projectDescription: `A small bot that can navigate through the field and fetch data like soil structure, atmospheric conditions and crop data that are important parameters in estimating the health and life of the crop. 
                        This data is analysed intelligent decisions are made to increase the productiveness of farming. 
                        It collects data from APIs to get weather forecasts and physical parameters like rainfall, humidity, etc. This combined with a model that identifies the most suitable crops to grow based on the conditions.`, //Using New Line to break paragraphs
					buttonList: [
						{
							id: "projectComponents_components_buttonList" + nanoid(),
							href: "https://github.com/sedhha/covifitness",
							buttonText: "Source Code",
							// style: { marginBottom: 0 },
						},

						{
							id: "projectComponents_components_buttonList" + nanoid(),
							href: "https://www.youtube.com/watch?v=WAR2-X3veaE",
							buttonText: "View",
							//style: { marginBottom: 0 },
						},
					],
				},
				front: {
					imgSource: "web/images/projects/agrobuddy.jpg",
					display: "front",
					disableGradientForPhoto: false,
					gradientColor1: colors.color_white,
					gradientColor2: colors.color_white,
					gradientDirection: "right bottom",
					featureList: [
						{
							id: "projectComponents_components__" + nanoid(),
							display: "Pygame Interface for dynamic actions",
						},

						{
							id: "projectComponents_components__" + nanoid(),
							display: "Computer Vision for movement detection",
						},

						{
							id: "projectComponents_components__" + nanoid(),
							display: "Virtual JoyStick for Jump Height Calibration",
						},

						{
							id: "projectComponents_components__" + nanoid(),
							display: "Virtual JoyStick to detect hand gestures",
						},
					],
				},
			},

			{
				id: "projectComponents_components__" + nanoid(),
				display: "Kratos Space Rover",
				back: {
					display: "About",
					gradientColor1: colors.color_tertiary_light,
					gradientColor2: colors.color_tertiary_dark,
					gradientDirection: "right bottom",
					projectDescription: `In a group project, I worked as an instrumentation and design engineer in building the entire 
                        architecture of the rover prototype that would perform various physical and biological tests to detect 
                        biosignatures in Martian-like Environment (MDRS, Utah, Hansville).`, //Using New Line to break paragraphs
					buttonList: [
						{
							id: "projectComponents_components_buttonList" + nanoid(),
							href: "https://github.com/sedhha/URC2019",
							buttonText: "Source Code",
						},

						{
							id: "projectComponents_components_buttonList" + nanoid(),
							href: "https://www.youtube.com/watch?v=Y4PzMjd71GE",
							buttonText: "View",
						},
					],
				},
				front: {
					imgSource: "web/images/projects/kratosrover.png",
					display: "front",
					disableGradientForPhoto: true,
					gradientColor1: colors.color_white,
					gradientColor2: colors.color_white,
					gradientDirection: "right bottom",
					featureList: [
						{
							id: "projectComponents_components__" + nanoid(),
							display: "Stood 19th in the World and 2nd in Asia",
						},

						{
							id: "projectComponents_components__" + nanoid(),
							display: "Microcontroller programming and Sensor Data Fusion",
						},

						{
							id: "projectComponents_components__" + nanoid(),
							display:
								"Socket Connection for Real Time Sensor Data and Image Feed",
						},
					],
				},
			},
		],
	},
};
