import "bootstrap/dist/css/bootstrap.min.css";

import "../src/view/style/global.css";

import type { AppProps } from "next/app";

import { useLagRadar, wrapper } from "../src/state";

const App = ({ Component: Route, pageProps }: AppProps) => {
  useLagRadar();
  return <Route {...pageProps} />;
};

export default wrapper.withRedux(App);
