import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { RadioInputGroup } from "./radioInputGroup";
import { noop } from "lodash";

export default {
    title: "Component/Input/RadioInputGroup",
    component: RadioInputGroup,
} as ComponentMeta<typeof RadioInputGroup>;

const Template: ComponentStory<typeof RadioInputGroup> = () => (
    <RadioInputGroup
        formDataKey="example"
        label="Phone Input Group"
        onChange={() => noop()}
        options={[
            { label: "foo", value: "Foo" },
            { label: "bar", value: "Bar" },
        ]}
        value="foo"
    />
);

export const Default = Template.bind({});
