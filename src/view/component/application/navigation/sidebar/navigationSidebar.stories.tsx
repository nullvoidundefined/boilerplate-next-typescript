import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { NavigationSidebar } from "./navigationSidebar";

export default {
  title: "Component/Application/NavigationSidebar",
  component: NavigationSidebar,
} as ComponentMeta<typeof NavigationSidebar>;

const Template: ComponentStory<typeof NavigationSidebar> = () => (
  <NavigationSidebar heightOffset={0} />
);

export const Default = Template.bind({});
Default.args = {};
