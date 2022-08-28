import { createContext } from "react";

const ModalContext = createContext({ hideModal: () => {}, showModal: () => {} })

export { ModalContext };