import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ApplicationLogo } from "./applicationLogo";
import { noop } from "lodash";

export default {
    title: "Component/Application/Logo",
    component: ApplicationLogo,
} as ComponentMeta<typeof ApplicationLogo>;

const Template: ComponentStory<typeof ApplicationLogo> = () => (
    <ApplicationLogo onClick={() => noop()} />
);

export const Default = Template.bind({});
