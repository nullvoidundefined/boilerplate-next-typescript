import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ApplicationNavigationDropdown } from "./applicationNavigationDropdown";
import { DIMENSION } from "../../../../../constant";

export default {
    title: "Component/Application/NavigationDropdown",
    component: ApplicationNavigationDropdown,
} as ComponentMeta<typeof ApplicationNavigationDropdown>;

const Template: ComponentStory<typeof ApplicationNavigationDropdown> = (
    args
) => <ApplicationNavigationDropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
    isOpen: true,
    heightOffset: DIMENSION.HEADER_HEIGHT_MOBILE,
};
