# React Component with Storybook Integration

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [Storybook](https://storybook.js.org/).

You can see the live version of this project using this [LINK](https://raging-potato.netlify.app/)

## Available Scripts

In the project directory, you can run:

### `npm run storybook`

Runs the storybook in the development mode.\
Open [http://localhost:3000](http://localhost:6006) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build-storybook`

Run the command to compile you codes into static files\
See this [Publish Storybook](https://storybook.js.org/docs/react/sharing/publish-storybook) for more information.

## Storybook Installation

Installation of the storybook is pretty simple. You can just run the command below to install the storybook.

```
npx storybook init
```

Follow the instructions and wait for the installations to complete. \
Then, run the following command.

```
npm run storybook
```

## How to Create a Stories

Once you open your codebase, you will see `stories` folder under `src/` folder.\
You can start to create a stories directly under `src/stories` folder.

1. First we create the component. For example, a `Button` component .

```javascript
import React from "react";
import PropTypes from "prop-types";
import "./button.css";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
	const mode = primary
		? "storybook-button--primary"
		: "storybook-button--secondary";
	return (
		<button
			type="button"
			className={["storybook-button", `storybook-button--${size}`, mode].join(
				" "
			)}
			style={backgroundColor && { backgroundColor }}
			{...props}
		>
			{label}
		</button>
	);
};
```

2. We can create the stories for the button. For example `src/stories/Button.stories.jsx`

```javascript
// Button.stories.js|jsx

import React from "react";

import { Button } from "./Button";

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Button",
	component: Button,
};

export const Primary = () => <Button primary>Button</Button>;
```

From the code above, you will get the following image when you start your storybook.

![Stories-without-args](./src/stories/assets/readme/example-button-noargs.png)

## Adding Add-ons into a Stories

Add-ons is storybook are called **Args**. **Args** can be used to dynamically change props, styles and many more. By having these, you can play around with your components and see the changes on the fly.

This is how you can add args into your existing story.

```javascript
// Button.stories.js|jsx

import React from "react";

import { Button } from "./Button";

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Button",
	component: Button,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
	primary: true,
	label: "Button",
};
```

You can read more about args [here](https://storybook.js.org/docs/react/writing-stories/args).
