import Head from "next/head";
import { Layout } from "../../src/view-component";
import { siteTitle } from "../../src/constant";

export default function SignOutRoute() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h6>Sign Out</h6>
    </Layout>
  );
}
