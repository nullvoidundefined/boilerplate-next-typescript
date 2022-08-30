import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ApplicationLayout } from "./applicationLayout";
import { noop } from "lodash";
import { mockUser } from "../../../../data";
import { APPLICATION_DIMENSION } from "../../../../constant";

export default {
  title: "Component/Application/Layout",
  component: ApplicationLayout,
} as ComponentMeta<typeof ApplicationLayout>;

const Template: ComponentStory<typeof ApplicationLayout> = (args) => <ApplicationLayout {...args} />;

export const DesktopAuth = Template.bind({});
DesktopAuth.args = {
  children: <div>Content</div>,
  contentHeightOffset:
    APPLICATION_DIMENSION.HEADER_HEIGHT_DESKTOP +
    APPLICATION_DIMENSION.FOOTER_HEIGHT,
  isMobile: false,
  navigationDropdownHeightOffset: APPLICATION_DIMENSION.HEADER_HEIGHT_DESKTOP,
  onLogInButtonClick: () => noop(),
  onLogOutButtonClick: () => noop(),
  user: mockUser,
};

export const DesktopNoAuth = Template.bind({});
DesktopNoAuth.args = {
  children: <div>Content</div>,
  contentHeightOffset:
    APPLICATION_DIMENSION.HEADER_HEIGHT_DESKTOP +
    APPLICATION_DIMENSION.FOOTER_HEIGHT,
  isMobile: false,
  navigationDropdownHeightOffset: APPLICATION_DIMENSION.HEADER_HEIGHT_DESKTOP,
  onLogInButtonClick: () => noop(),
  onLogOutButtonClick: () => noop(),
  user: null,
};

export const MobileAuth = Template.bind({});
MobileAuth.args = {
  children: <div>Content</div>,
  contentHeightOffset:
    APPLICATION_DIMENSION.HEADER_HEIGHT_MOBILE +
    APPLICATION_DIMENSION.FOOTER_HEIGHT,
  isMobile: true,
  navigationDropdownHeightOffset: APPLICATION_DIMENSION.HEADER_HEIGHT_MOBILE,
  onLogInButtonClick: () => noop(),
  onLogOutButtonClick: () => noop(),
  user: mockUser,
};

export const MobileNoAuth = Template.bind({});
MobileNoAuth.args = {
  children: <div>Content</div>,
  contentHeightOffset:
    APPLICATION_DIMENSION.HEADER_HEIGHT_MOBILE +
    APPLICATION_DIMENSION.FOOTER_HEIGHT,
  isMobile: true,
  navigationDropdownHeightOffset: APPLICATION_DIMENSION.HEADER_HEIGHT_MOBILE,
  onLogInButtonClick: () => noop(),
  onLogOutButtonClick: () => noop(),
  user: null,
};