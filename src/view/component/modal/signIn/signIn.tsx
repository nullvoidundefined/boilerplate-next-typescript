import { Modal } from "react-bootstrap";
import { AuthRequestData } from "../../../../type";
import { Button } from "../../../design-system";
import { SignInForm } from "../../form/signIn/signInForm";

interface ExampleModalProps {
  onHide: () => void;
  onFormSubmit: (formData:AuthRequestData) => void;
}

const SignInModal = ({ onHide, onFormSubmit }: ExampleModalProps) => {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SignInForm onSubmit={onFormSubmit} />
      </Modal.Body>
    </>
  );
};

export { SignInModal };
