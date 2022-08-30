import { Modal } from "react-bootstrap";
import { AuthRequestData } from "../../../../type";
import { SignInForm } from "../../form/signIn/signInForm";

interface ExampleModalProps {
  onFormSubmit: (formData:AuthRequestData) => void;
}

const SignInModal = ({ onFormSubmit }: ExampleModalProps) => {
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
