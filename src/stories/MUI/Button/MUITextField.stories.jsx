import React from "react";

import { MUITextField } from "../../../components";

export default {
	title: "Dyno Web/Atoms/Text Field",
	component: MUITextField,
	argTypes: {
		variant: {
			options: ["filled", "standard", "outlined"],
			control: { type: "radio" },
		},
		required: {
			control: "boolean",
		},
		type: {
			options: ["password", "text"],
			control: { type: "radio" },
		},
	},
};

const Template = (args) => <MUITextField {...args} />;

export const BasicTextField = Template.bind({});
BasicTextField.args = {
	label: "outlined",
	variant: "outlined",
	required: false,
	type: "text",
	helperText: "Helper Text Here",
};
