const mapParagraphContent = (mainIntroContents, classes) => {
	return mainIntroContents.map(element => {
		return (
			<div key={element.id} className={classes["heading-para"]}>
				<h3
					style={element.headingStyle || {}}
					className={[
						classes["heading-tertiary"],
						classes["backgroundGradient"],
					].join(" ")}
				>
					{element.heading}
				</h3>
				{element.description.split("\n").map((ee, index) => (
					<p
						key={element.id + "_p_" + index}
						style={element.descriptionStyle || {}}
						className={classes["paragraph"]}
					>
						{ee}
					</p>
				))}
			</div>
		);
	});
};
export const MappingAbout = ({ mainContent, classes }) => {
	if (!mainContent.showSection) return null;
	const paragraphContent = mapParagraphContent(
		mainContent.mainIntroContents,
		classes
	);
	return (
		<section
			id={mainContent.mainContent_sectionId}
			className={classes.sectionAbout}
		>
			<div className={classes.centetText}>
				<h2
					className={[classes.headingSecondary].join(" ")}
					style={mainContent.aboutParaStyle || {}}
				>
					{mainContent.aboutParaHeader || "WHO AM I?"}
				</h2>
			</div>

			<div className={classes.row_section}>
				<div>
					{paragraphContent}
					<a
						href={mainContent.aboutConnectButtonRedirectLink || "#"}
						className={classes["btn-text"]}
					>
						{mainContent.aboutConnectButtonText || "Learn More "} &#8594;
					</a>
				</div>

				<div className={classes["composition"]}>
					<img
						src={
							process.env.PUBLIC_URL +
							(mainContent.composition.img1 ||
								"web/images/composition/nat-1.jpg")
						}
						alt={"composiiton images"}
						className={[
							classes["composition__photo"],
							classes["composition__photo--p1"],
						].join(" ")}
					/>
					<img
						src={
							process.env.PUBLIC_URL +
							(mainContent.composition.img2 ||
								"web/images/composition/nat-1.jpg")
						}
						alt={"composiiton images"}
						className={[
							classes["composition__photo"],
							classes["composition__photo--p2"],
						].join(" ")}
					/>
					<img
						src={
							process.env.PUBLIC_URL +
							(mainContent.composition.img3 ||
								"web/images/composition/nat-1.jpg")
						}
						alt={"composiiton images"}
						className={[
							classes["composition__photo"],
							classes["composition__photo--p3"],
						].join(" ")}
					/>
				</div>
			</div>
		</section>
	);
};
