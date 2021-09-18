const mapFeatures = (sections, classes) => {
	const result = sections.map(element => {
		return (
			<div key={element.id}>
				<div className={classes["feature-box"]}>
					<i className={classes["feature-box__icon"]}>
						<svg width="0" height="0">
							<linearGradient
								id={element.displayIconId}
								x1={element.displayIconStyle.x1}
								y1={element.displayIconStyle.y1}
								x2={element.displayIconStyle.x2}
								y2={element.displayIconStyle.y2}
							>
								<stop
									stopColor={element.displayIconStyle.startColor}
									offset={element.displayIconStyle.startOffset}
								/>
								<stop
									stopColor={element.displayIconStyle.stopColor}
									offset={element.displayIconStyle.stopOffset}
								/>
							</linearGradient>
						</svg>
						{element.displayIcon}
					</i>
					<h3
						className={classes["heading-tertiary"]}
						style={element.headingStyle || {}}
					>
						{element.heading || "BC"}
					</h3>
					<p className={classes["feature-box__text"]}>
						{element.para ||
							"Lorem, ipsum dolor sit amet consectetur adipisicing elit."}
					</p>
				</div>
			</div>
		);

		//const projects =
	});

	return result;
};

export const MapFeaturesSection = ({ sectionFeatures, classes }) => {
	if (!sectionFeatures.showSection) return null;
	const keySections = mapFeatures(sectionFeatures.sections, classes);
	return (
		<section
			id={sectionFeatures.sectionFeatures_sectionId}
			className={classes["section-features"]}
			style={{
				backgroundImage: `linear-gradient(
to right bottom,
${sectionFeatures.imageGrade1 || "rgba(126,213,111,.8)"},
${sectionFeatures.imageGrade2 || "rgba(40,180,133,.8)"}),
url('${process.env.PUBLIC_URL}/${sectionFeatures.headImageUrl}')`,
			}}
		>
			<p className={classes.sectionHeading}>
				{sectionFeatures.sectionHeading || "What I Love Doing?"}
			</p>
			<div className={classes["row_myExpertise"]}>{keySections}</div>
		</section>
	);
};
