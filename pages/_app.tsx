import "bootstrap/dist/css/bootstrap.min.css";

import "../src/view/style/global.css";

import type { AppProps } from "next/app";

import { useLagRadar, wrapper } from "../src/state";
import { Modal } from "../src/view/component";
import { useRef } from "react";
import { ModalContext } from "../src/state/context/modalContext";

const App = ({ Component: Route, pageProps }: AppProps) => {
  useLagRadar();

  const modalRef = useRef({ hideModal: () => {}, showModal: () => {} });

  const hideModal = () => {
    modalRef.current.hideModal();
  };

  const showModal = () => {
    modalRef.current.showModal();
  };

  return (
    <>
      <Modal ref={modalRef} />
      <ModalContext.Provider value={{ hideModal, showModal }}>
        <Route {...pageProps} />;
      </ModalContext.Provider>
    </>
  );
};

export default wrapper.withRedux(App);
