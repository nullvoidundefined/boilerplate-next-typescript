import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Modal } from "./modal";
import { Modal as BSModal } from "react-bootstrap";
import { Button } from "../../../design-system";
import { noop } from "lodash";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Component/Application/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

const modalContent = (
  <>
    <BSModal.Header closeButton>
      <BSModal.Title>Modal heading</BSModal.Title>
    </BSModal.Header>
    <BSModal.Body>
      Woohoo, you&apos;re reading this text in a modal!
    </BSModal.Body>
    <BSModal.Footer>
      <Button onClick={() => noop()}>Close</Button>
    </BSModal.Footer>
  </>
);

export const Default = Template.bind({});
Default.args = { initialContent: modalContent };
