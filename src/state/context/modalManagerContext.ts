import { noop } from "lodash";
import { createContext, ReactNode } from "react";

const ModalManagerContext = createContext({
  hideModal: () => noop(),
  showModal: (modalContent: ReactNode ) => console.log(modalContent),
});

export { ModalManagerContext };
