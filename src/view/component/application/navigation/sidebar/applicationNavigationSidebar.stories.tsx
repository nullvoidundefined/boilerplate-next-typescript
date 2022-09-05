import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ApplicationNavigationSidebar } from "./applicationNavigationSidebar";

export default {
    title: "Component/Application/NavigationSidebar",
    component: ApplicationNavigationSidebar,
} as ComponentMeta<typeof ApplicationNavigationSidebar>;

const Template: ComponentStory<typeof ApplicationNavigationSidebar> = () => (
    <ApplicationNavigationSidebar heightOffset={0} />
);

export const Default = Template.bind({});
Default.args = {};
