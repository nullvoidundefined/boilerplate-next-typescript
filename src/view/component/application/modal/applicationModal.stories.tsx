import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ApplicationModal } from "./applicationModal";
import { Modal } from "react-bootstrap";
import { Button } from "../../../design-system";
import { noop } from "lodash";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Component/Application/Modal",
  component: ApplicationModal,
} as ComponentMeta<typeof ApplicationModal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ApplicationModal> = (args) => <ApplicationModal {...args} />;

const modalContent = (
  <>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      Woohoo, you&apos;re reading this text in a modal!
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={() => noop()}>Close</Button>
    </Modal.Footer>
  </>
);

export const Default = Template.bind({});
Default.args = { initialContent: modalContent };
