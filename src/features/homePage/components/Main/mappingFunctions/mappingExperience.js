import { getMainHeading } from "./utility";
const getExperienceContent = (experienceElements, classes) => {
	//console.log(experienceElements);
	return experienceElements.map(element => {
		return (
			<a
				className={classes["section-gridbox__anchortag"]}
				href={element.href || "https://www.google.com/"}
				key={element.id}
			>
				<div className={classes["section-gridbox__gridElement"]}>
					<img
						className={classes["section-gridbox__gridElement--img"]}
						src={element.image.src}
						alt={element.image.alt || "img"}
					/>
					<div>
						<p className={classes["section-gridbox__gridElement--date-widget"]}>
							{element.companyName || "Company Name"}
						</p>
						<p className={classes["section-gridbox__gridElement--date-widget"]}>
							{element.dates}
						</p>
						<p className={classes["section-gridbox__gridElement--designation"]}>
							{element.designation}
						</p>
					</div>
				</div>
			</a>
		);
	});
};

export const MapExperienceandCocurricular = ({
	exprerienceContent,
	classes,
}) => {
	if (!exprerienceContent.showSection) return null;
	const sectionHeading = getMainHeading(
		exprerienceContent.heading,
		exprerienceContent.headingStyle,
		classes
	);

	const experienceElements = getExperienceContent(
		exprerienceContent.experienceContent.experienceElements,
		classes
	);
	return (
		<section
			key={"experience_Section"}
			className={classes["section-experience"]}
		>
			{sectionHeading}

			<div className={classes["section-gridbox"]}>{experienceElements}</div>
		</section>
	);
};
