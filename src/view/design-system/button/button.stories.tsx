import { ComponentStory, ComponentMeta } from "@storybook/react";

import React from "react";

import { Button } from "./button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Design-System/Button",
    component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
    <Button {...args}>{args.children}</Button>
);

export const Primary = Template.bind({});
Primary.args = {
    children: "Button",
};
