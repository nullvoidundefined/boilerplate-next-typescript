import { ComponentStory, ComponentMeta } from "@storybook/react";

import { noop } from "lodash";
import React from "react";

import { SignInForm } from "./signInForm";

export default {
    title: "Component/Form/SignIn",
    component: SignInForm,
} as ComponentMeta<typeof SignInForm>;

const Template: ComponentStory<typeof SignInForm> = () => (
    <SignInForm onSubmit={() => noop()} />
);

export const Default = Template.bind({});
