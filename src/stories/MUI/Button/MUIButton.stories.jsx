import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

import { MUIButton } from "../../../components";

export default {
	title: "Dyno Web/Atoms/Button",
	component: MUIButton,
	argTypes: {
		variant: {
			options: ["text", "contained", "outlined"],
			control: { type: "radio" },
		},
		size: {
			options: ["small", "medium", "large"],
			control: { type: "radio" },
		},
		disabled: {
			control: "boolean",
		},
		style: {
			control: "object",
		},
	},
};

const Template = (args) => <MUIButton {...args}>{args.label}</MUIButton>;

export const IconButton = ({ variant, size, disabled, style }) => (
	<MUIButton
		variant={variant}
		size={size}
		disabled={disabled}
		style={style}
		startIcon={<DeleteIcon />}
	>
		Delete
	</MUIButton>
);

export const BaseButton = Template.bind({});
BaseButton.args = {
	size: "large",
	label: "Button",
};

export const IconButton2 = Template.bind({});
IconButton2.args = {
	size: "large",
	label: "Delete",
	startIcon: <SendIcon />,
	disabled: true,
};
