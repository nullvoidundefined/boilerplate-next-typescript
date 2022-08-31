import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DropdownInput } from "./dropdownInput";
import { noop } from "lodash";

export default {
    component: DropdownInput,
    title: "Component/Input/DropdownInput",
} as ComponentMeta<typeof DropdownInput>;

const Template: ComponentStory<typeof DropdownInput> = () => (
    <DropdownInput
        id="dropdown-input"
        buttonText="Dropdown Input"
        items={[
            {
                itemText: "Item One",
                onClick: () => noop(),
            },
            {
                itemText: "Item Two",
                onClick: () => noop(),
            },
        ]}
    />
);

export const Default = Template.bind({});
