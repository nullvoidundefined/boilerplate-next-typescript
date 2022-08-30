import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from "./header";

export default {
  title: "Component/Application/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Desktop = Template.bind({});
Desktop.args = { isMobile: false };

export const Mobile = Template.bind({});
Mobile.args = { isMobile: true };
