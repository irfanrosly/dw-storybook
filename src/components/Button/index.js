import * as React from "react";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

/**
 * Primary UI component for user interaction
 */
export default function BasicButtons(props) {
	const { variant, children, disabled, size, style, startIcon } = props;
	return (
		<Button
			variant={variant}
			disabled={disabled}
			size={size}
			style={style}
			startIcon={startIcon}
		>
			{children}
		</Button>
	);
}

BasicButtons.propTypes = {
	variant: PropTypes.oneOf(["text", "contained", "outlined"]),
	label: PropTypes.string,
	disabled: PropTypes.bool,
	size: PropTypes.oneOf(["small", "medium", "large"]),
	style: PropTypes.object,
};

BasicButtons.defaultProps = {
	variant: "contained",
	label: "Text",
	disabled: false,
	size: "medium",
	style: {},
};
