import Head from "next/head";
import { Item } from "../../src/type";
import { Layout } from "../../src/view-component";
import { siteTitle } from "../../src/constant";

export default function SignUpRoute() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
     <h6>Sign Up</h6>
    </Layout>
  );
}