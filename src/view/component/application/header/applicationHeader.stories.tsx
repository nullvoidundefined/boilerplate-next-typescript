import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ApplicationHeader } from "./applicationHeader";

export default {
  title: "Component/Application/Header",
  component: ApplicationHeader,
} as ComponentMeta<typeof ApplicationHeader>;

const Template: ComponentStory<typeof ApplicationHeader> = (args) => <ApplicationHeader {...args} />;

export const Desktop = Template.bind({});
Desktop.args = { isMobile: false };

export const Mobile = Template.bind({});
Mobile.args = { isMobile: true };
