import { Modal } from "react-bootstrap";
import { Button } from "../../../design-system";

interface ExampleModalProps {
  onHide: () => void;
}

const ExampleModal = ({ onHide }: ExampleModalProps) => {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you&apos;re reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </>
  );
};

export { ExampleModal };
