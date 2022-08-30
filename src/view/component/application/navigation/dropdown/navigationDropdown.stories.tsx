import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { NavigationDropdown } from "./navigationDropdown";
import { APPLICATION_DIMENSION } from "../../../../../constant";

export default {
  title: "Component/Application/NavigationDropdown",
  component: NavigationDropdown,
} as ComponentMeta<typeof NavigationDropdown>;

const Template: ComponentStory<typeof NavigationDropdown> = (args) => (
  <NavigationDropdown {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  heightOffset: APPLICATION_DIMENSION.HEADER_HEIGHT_MOBILE,
};
