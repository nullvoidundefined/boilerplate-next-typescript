import React, {
  ReactNode,
  forwardRef,
  useImperativeHandle,
  useState,
  useMemo,
} from "react";
import { Modal } from "react-bootstrap";

const ModalManager = forwardRef((_props, ref) => {
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

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

ModalManager.displayName = "ModalProvider";

export { ModalManager };
