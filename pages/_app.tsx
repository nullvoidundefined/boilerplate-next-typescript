import "bootstrap/dist/css/bootstrap.min.css";

import "../src/view/style/global.css";

import type { AppProps } from "next/app";

import { useLagRadar, wrapper } from "../src/state";
import { ModalManager } from "../src/view/component";
import { ReactNode, useRef } from "react";
import { ModalManagerContext } from "../src/state/context/modalManagerContext";

const App = ({ Component: Route, pageProps }: AppProps) => {
  useLagRadar();

  const modalRef = useRef({
    hideModal: () => {},
    showModal: (_modalContent: ReactNode) => {},
  });

  const hideModal = () => {
    modalRef.current.hideModal();
  };

  const showModal = (modalContent: ReactNode) => {
    modalRef.current.showModal(modalContent);
  };

  return (
    <>
      <ModalManager ref={modalRef} />
      <ModalManagerContext.Provider value={{ hideModal, showModal }}>
        <Route {...pageProps} />;
      </ModalManagerContext.Provider>
    </>
  );
};

export default wrapper.withRedux(App);
