import { createContext, ReactNode } from "react";

const ModalManagerContext = createContext({
  hideModal: () => {},
  showModal: (_modalContent: ReactNode) => {},
});

export { ModalManagerContext };
