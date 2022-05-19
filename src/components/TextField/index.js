import React from "react";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

export default function BasicTextFields(props) {
	const { label, variant, required, defaultValue, type, helperText } = props;
	return (
		<TextField
			label={label}
			variant={variant}
			required={required}
			defaultValue={defaultValue}
			type={type}
			helperText={helperText}
		/>
	);
}

BasicTextFields.propTypes = {
	variant: PropTypes.oneOf(["filled", "standard", "outlined"]),
	label: PropTypes.string,
	type: PropTypes.oneOf(["password", "text"]),
	required: PropTypes.bool,
	helperText: PropTypes.string,
};

BasicTextFields.defaultProps = {
	variant: "outlined",
	label: "Outlined",
	type: "text",
	required: false,
	helperText: "",
};
