import { nanoid } from "nanoid";
import SlidingContainer from "../../Main/mappingFunctions/uiComponents/container";
import { getMainHeading } from "./utility";
const getUserTestimonials = (testimonialContent, classes) => {
	const testimonials = testimonialContent.map(element => {
		const socialMediaIcons = getSocialHandles(element.socialHandles, classes);
		const pbreaks = element.content.split("\n").map(pElement => (
			<p key={nanoid()} className={classes["story__paras"]}>
				{pElement}
			</p>
		));
		return (
			<div className={classes.TestimonialRow}>
				<div className={classes.story}>
					<p className={classes.story_displayElement}>{element.name}</p>
					<img
						className={classes.story_image}
						src={
							element.isWebImage
								? element.displayUri
								: `${process.env.PUBLIC_URL}/${element.displayUri}`
						}
						alt={"reference"}
					/>
				</div>
				{pbreaks}
				{socialMediaIcons}
			</div>
		);
	});

	return testimonials;
};

const getSocialHandles = (socialDetails, classes) => {
	socialDetails = socialDetails || [];
	const socials = socialDetails.map(element => (
		<a key={element.id} href={element.href}>
			<div className={classes["social_icon"]}>{element.icon}</div>
		</a>
	));
	return <div className={classes["rowElement"]}>{socials}</div>;
};

export const mapTestimonials = (testimonialComponent, classes) => {
	if (!testimonialComponent.showSection) return null;
	else {
		const sectionHeading = getMainHeading(
			testimonialComponent.heading,
			testimonialComponent.headingStyle,
			classes
		);
		const sectionContents = getUserTestimonials(
			testimonialComponent.userTestimonials,
			classes
		);
		return (
			<section
				key={testimonialComponent.id}
				id={testimonialComponent.id}
				className={classes["section-stories"]}
			>
				{sectionHeading}
				<SlidingContainer
					backgroundSpecs={testimonialComponent.backgroundSpecs}
					renderArrayOfComponents={sectionContents}
					uniqueId={testimonialComponent.id}
				/>
			</section>
		);
	}
};
