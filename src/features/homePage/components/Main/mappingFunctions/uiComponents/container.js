import React, { Component } from "react";
import classes from "./mapping.module.scss";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default class SlidingContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPosition: 0,
			totalItems: this.props.renderArrayOfComponents.length || 0,
			hideClass: "SwipeEffectHideToRight",
			showClass: "SwipeEffectShowToLeft",
			showRight: true,
			showLeft: false,
		};
	}

	onSwapClickHandler = swapToLeft => () => {
		let newPosition;
		let showClass = "SwipeEffectShowToLeft";
		let hideClass = "SwipeEffectHideToRight";
		let showLeft = true;
		let showRight = true;
		if (swapToLeft) {
			newPosition = this.state.currentPosition - 1;
			showClass = "SwipeEffectShowToLeft";
			hideClass = "SwipeEffectHideToRight";
		} else {
			newPosition = this.state.currentPosition + 1;
			showClass = "SwipeEffectShowToRight";
			hideClass = "SwipeEffectHideToLeft"; //TransfomUpcomingToLeftAndSwipeEffectToShowLeft
		}
		if (newPosition < 0) {
			newPosition = this.state.totalItems - 1;

			showClass = "SwipeEffectShowToLeft";
			hideClass = "SwipeEffectHideToRight";
		}
		if (newPosition >= this.state.totalItems) {
			newPosition = 0;
			showClass = "SwipeEffectShowToRight";
			hideClass = "SwipeEffectHideToLeft";
		}

		if (newPosition === 0) showLeft = false;
		else if (newPosition === this.state.totalItems - 1) showRight = false;

		this.setState({
			...this.state,
			currentPosition: newPosition,
			hideClass: hideClass,
			showClass: showClass,
			showLeft: showLeft,
			showRight: showRight,
		});
	};
	render() {
		const { imageGrade1, imageGrade2, backgroundUrl } =
			this.props.backgroundSpecs;
		const sections = this.props.renderArrayOfComponents;
		const renderElement = sections.map((ele, index) => {
			let renderer = null;
			if (index === this.state.currentPosition) {
				renderer = (
					<div
						key={this.props.uniqueId + index}
						className={[
							classes.FlexBoxContainer,
							classes[this.state.showClass],
						].join(" ")}
					>
						{ele}
					</div>
				);
			} else {
				renderer = (
					<div
						key={this.props.uniqueId + index}
						className={[
							classes.FlexBoxContainer,
							classes[this.state.hideClass],
						].join(" ")}
					>
						{ele}
					</div>
				);
			}

			return renderer;
		});
		return (
			<div
				style={{
					backgroundImage: `linear-gradient(
			to right bottom,
			${imageGrade1 || "rgba(126,213,111,.8)"},
			${imageGrade2 || "rgba(40,180,133,.8)"}),
			url('${process.env.PUBLIC_URL}/${backgroundUrl}')`,
				}}
				className={classes.SlidingContainer}
			>
				{renderElement}
				{this.state.showLeft ? (
					<div
						className={classes.LeftNavigate}
						onClick={this.onSwapClickHandler(true)}
					>
						<AiOutlineLeft className={classes.NavigatorIconClass} />
					</div>
				) : null}
				{this.state.showRight ? (
					<div
						className={classes.RightNavigate}
						onClick={this.onSwapClickHandler(false)}
					>
						<AiOutlineRight className={classes.NavigatorIconClass} />
					</div>
				) : null}
			</div>
		);
	}
}
