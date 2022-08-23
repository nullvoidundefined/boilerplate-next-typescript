import Head from "next/head";
import { Layout } from "../../src/view-component";
import { siteTitle } from "../../src/constant";

export default function SignInRoute() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h6>Sign In</h6>
    </Layout>
  );
}
