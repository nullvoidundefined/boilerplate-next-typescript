import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextInputGroup } from "./textInputGroup";

export default {
    component: TextInputGroup,
    title: "Component/Input/TextInputGroup",
} as ComponentMeta<typeof TextInputGroup>;

const Template: ComponentStory<typeof TextInputGroup> = () => {
    interface FormState {
        example: string;
    }

    const [formState, setFormState] = React.useState<FormState>({
        example: "",
    });
    return (
        <>
            <TextInputGroup
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
