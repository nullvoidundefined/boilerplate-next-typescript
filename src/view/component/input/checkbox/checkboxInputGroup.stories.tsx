import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CheckboxInputGroup } from "./checkboxInputGroup";
import { noop } from "lodash";

export default {
    component: CheckboxInputGroup,
    title: "Component/Input/CheckboxInputGroup",
} as ComponentMeta<typeof CheckboxInputGroup>;

const Template: ComponentStory<typeof CheckboxInputGroup> = () => (
    <CheckboxInputGroup
        checked={false}
        formDataKey="example"
        label="Checkbox Input Group"
        onChange={() => noop()}
    />
);

export const Default = Template.bind({});
