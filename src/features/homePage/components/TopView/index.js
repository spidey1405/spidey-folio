import React from "react"; //useState
import {
	useSelector,
	//    useDispatch
} from "react-redux";
import { getTopHeaders } from "../../HomePageSlice";
import classes from "./components.module.scss";
import {sectionIds} from '../../constants/miscMappings';
import {Link} from 'react-scroll';

export default function TopHeader() {
	const topHeader = useSelector(getTopHeaders);
	return (
		<header id = {sectionIds.topHeader_sectionId}
			className={classes.heading}
			style={{
				backgroundImage: `linear-gradient(
			to right bottom,
			${topHeader.headerGrade1 || "rgba(126,213,111,.8)"},
			${topHeader.headerGrade2 || "rgba(40,180,133,.8)"}),
			url('${process.env.PUBLIC_URL}/${topHeader.headImageUrl}')`,
			}}
		>
			<div className={classes.logobox}>
				{topHeader.isLogoRequired ? (
					<img
						className={classes.logo}
						src={process.env.PUBLIC_URL + topHeader.logoImageUrl}
						alt={topHeader.logoAltDescription || "logo"}
					/>
				) : null}
			</div>

			<div className={classes.textBox}>
				<h1 className={classes.headingPrimary}>
					<span
						className={classes.headingPrimaryMain}
						style={topHeader.injectMainHeadingStyle || {}}
					>
						{topHeader.mainHeading || "Shivam Sahil"}
					</span>
					<span
						className={classes.headingPrimarySub}
						style={topHeader.injectSubHeadingStyle || {}}
					>
						{topHeader.mainSubHeading || "Artist by Birth, Engineer by Choice"}
					</span>
				</h1>

				<Link
				spy={true}
				smooth={true}
				offset={-70}
				duration={800}
				to={topHeader.gotoButtonSectionName} 
				className={[classes.btn, 
				classes.btnWhite, 
				classes.btnAnimated].join(" ")}>
					{topHeader.buttonText || "Know More"}
				</Link>
			</div>
		</header>
	);
}
