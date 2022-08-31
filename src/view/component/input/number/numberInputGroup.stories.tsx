import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { NumberInputGroup } from "./numberInputGroup";

export default {
    component: NumberInputGroup,
    title: "Component/Input/NumberInputGroup",
} as ComponentMeta<typeof NumberInputGroup>;

const Template: ComponentStory<typeof NumberInputGroup> = () => {
    interface FormState {
        example: number | null;
    }

    const [formState, setFormState] = React.useState<FormState>({
        example: null,
    });
    return (
        <>
            <NumberInputGroup
                formDataKey="example"
                label="Text Area Input Group"
                onChange={(formDataKey: string, value: number | null) => {
                    const newState: FormState = { ...formState };
                    newState[formDataKey as keyof FormState] = value;
                    setFormState(newState);
                }}
                value={Number(formState.example)}
            />
            <br />
            <h5>Form State:</h5>
            <code>{JSON.stringify(formState)}</code>
        </>
    );
};

export const Default = Template.bind({});
