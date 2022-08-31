import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PhoneInputGroup } from "./phoneInputGroup";

export default {
    component: PhoneInputGroup,
    title: "Component/Input/PhoneInputGroup",
} as ComponentMeta<typeof PhoneInputGroup>;

const Template: ComponentStory<typeof PhoneInputGroup> = () => {
    interface FormState {
        example: string;
    }

    const [formState, setFormState] = React.useState<FormState>({
        example: "",
    });
    return (
        <>
            <PhoneInputGroup
                formDataKey="example"
                label="Text Area Input Group"
                onChange={(formDataKey: string, value: string) => {
                    const newState: FormState = { ...formState };
                    newState[formDataKey as keyof FormState] = value;
                    setFormState(newState);
                }}
                value={formState.example}
            />
            <br />
            <h5>Form State:</h5>
            <code>{JSON.stringify(formState)}</code>
        </>
    );
};

export const Default = Template.bind({});
