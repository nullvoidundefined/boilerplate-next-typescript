import "bootstrap/dist/css/bootstrap.min.css";

import "../src/view/style/global.css";

import type { AppProps } from "next/app";

import { wrapper } from "../src/state/store";
import { useLagRadar } from "../src/state";

const App = ({ Component, pageProps }: AppProps) => {
  useLagRadar();
  console.log("App is rendering")
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);
