import { noop } from "lodash";
import { createContext, ReactNode } from "react";

const ModalContext = createContext({
  hideModal: () => noop(),
  showModal: (modalContent: ReactNode) => console.log(modalContent),
});

export { ModalContext };
