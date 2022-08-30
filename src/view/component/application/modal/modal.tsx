import React, {
  ReactNode,
  forwardRef,
  useImperativeHandle,
  useState,
  useMemo,
} from "react";
import { Modal as BSModal } from "react-bootstrap";

interface ModalProps {
  initialContent?: ReactNode | null;
}

const Modal = forwardRef(({ initialContent }: ModalProps, ref) => {
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
    <BSModal show={doShow} onHide={() => setModalContent(null)}>
      {modalContent}
    </BSModal>
  );
});

Modal.displayName = "ModalProvider";

export { Modal };
