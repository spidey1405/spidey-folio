export const getMainHeading = (headingString, headingStyle, classes) => {
	return (
		<div className={classes.centetText}>
			<h2
				className={[classes.headingSecondary].join(" ")}
				style={headingStyle || {}}
			>
				{headingString || "WHO AM I?"}
			</h2>
		</div>
	);
};
