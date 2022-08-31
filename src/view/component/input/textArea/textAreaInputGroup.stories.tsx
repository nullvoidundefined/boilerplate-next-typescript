import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextAreaInputGroup } from "./textAreaInputGroup";

export default {
    component: TextAreaInputGroup,
    title: "Component/Input/TextAreaInputGroup",
} as ComponentMeta<typeof TextAreaInputGroup>;

const Template: ComponentStory<typeof TextAreaInputGroup> = () => {
    interface FormState {
        example: string;
    }

    const [formState, setFormState] = React.useState<FormState>({
        example: "",
    });
    return (
        <>
            <TextAreaInputGroup
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
