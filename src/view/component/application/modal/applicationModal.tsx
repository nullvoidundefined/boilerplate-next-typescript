import React, {
  ReactNode,
  forwardRef,
  useImperativeHandle,
  useState,
  useMemo,
} from "react";
import { Modal } from "react-bootstrap";

interface ModalProps {
  initialContent?: ReactNode | null;
}

const ApplicationModal = forwardRef(({ initialContent = null }: ModalProps, ref) => {
  const [modalContent, setModalContent] =
    useState<ReactNode | null>(initialContent);

  const doShow = useMemo(() => {
    return modalContent !== null;
  }, [modalContent]);

  useImperativeHandle(ref, () => ({
    showModal(modalContent: ReactNode) {
      setModalContent(modalContent);
    },

    hideModal() {
      setModalContent(null);
    },
  }));

  return (
    <Modal show={doShow} onHide={() => setModalContent(null)}>
      {modalContent}
    </Modal>
  );
});

ApplicationModal.displayName = "ModalProvider";

export { ApplicationModal };
