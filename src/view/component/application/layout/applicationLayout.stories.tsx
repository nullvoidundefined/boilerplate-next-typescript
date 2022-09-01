import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ApplicationLayout } from "./applicationLayout";
import { noop } from "lodash";
import { mockUser } from "../../../../data";
import { DIMENSION } from "../../../../constant";

export default {
    title: "Component/Application/Layout",
    component: ApplicationLayout,
} as ComponentMeta<typeof ApplicationLayout>;

const Template: ComponentStory<typeof ApplicationLayout> = (args) => (
    <ApplicationLayout {...args} />
);

export const DesktopAuth = Template.bind({});
DesktopAuth.args = {
    children: <div>Content</div>,
    contentHeightOffset:
        DIMENSION.HEADER_HEIGHT_DESKTOP + DIMENSION.FOOTER_HEIGHT,
    isMobile: false,
    navigationDropdownHeightOffset: DIMENSION.HEADER_HEIGHT_DESKTOP,
    onLogInButtonClick: () => noop(),
    onLogOutButtonClick: () => noop(),
    user: mockUser,
};

export const DesktopNoAuth = Template.bind({});
DesktopNoAuth.args = {
    children: <div>Content</div>,
    contentHeightOffset:
        DIMENSION.HEADER_HEIGHT_DESKTOP + DIMENSION.FOOTER_HEIGHT,
    isMobile: false,
    navigationDropdownHeightOffset: DIMENSION.HEADER_HEIGHT_DESKTOP,
    onLogInButtonClick: () => noop(),
    onLogOutButtonClick: () => noop(),
    user: null,
};

export const MobileAuth = Template.bind({});
MobileAuth.args = {
    children: <div>Content</div>,
    contentHeightOffset:
        DIMENSION.HEADER_HEIGHT_MOBILE + DIMENSION.FOOTER_HEIGHT,
    isMobile: true,
    navigationDropdownHeightOffset: DIMENSION.HEADER_HEIGHT_MOBILE,
    onLogInButtonClick: () => noop(),
    onLogOutButtonClick: () => noop(),
    user: mockUser,
};

export const MobileNoAuth = Template.bind({});
MobileNoAuth.args = {
    children: <div>Content</div>,
    contentHeightOffset:
        DIMENSION.HEADER_HEIGHT_MOBILE + DIMENSION.FOOTER_HEIGHT,
    isMobile: true,
    navigationDropdownHeightOffset: DIMENSION.HEADER_HEIGHT_MOBILE,
    onLogInButtonClick: () => noop(),
    onLogOutButtonClick: () => noop(),
    user: null,
};
