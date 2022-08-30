import { noop } from "lodash";
import { createContext, ReactNode } from "react";

const ApplicationModalContext = createContext({
  hideModal: () => noop(),
  showModal: (modalContent: ReactNode) => console.log(modalContent),
});

export { ApplicationModalContext };
