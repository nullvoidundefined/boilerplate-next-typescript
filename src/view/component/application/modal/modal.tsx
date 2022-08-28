import { forwardRef, useImperativeHandle, useState } from "react";

const Modal = forwardRef((_props, ref) => {
  const [modal, setModal] = useState("");

  useImperativeHandle(ref, () => ({
    showModal() {
      setModal("Show Modal");
    },

    hideModal() {
      setModal("");
    },
  }));

  return <h1>{modal}</h1>;
});

Modal.displayName = "Modal";

export { Modal };
