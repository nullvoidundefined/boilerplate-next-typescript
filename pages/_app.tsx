import "../src/style/global.css";

import type { AppProps } from "next/app";
import { wrapper } from "../src/state/store";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);
