import { GetStaticProps } from "next";
import Head from "next/head";
import { HomePage } from "../src/view-page";
import { Layout } from "../src/view-component";
import { siteTitle } from "../src/constant";
import { useRouter } from "next/router";

export default function HomeRoute() {
  const router = useRouter();

  const navigateToItemsPage = () => {
    router.push("items");
  };

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <HomePage onButtonClick={navigateToItemsPage} />
    </Layout>
  );
}
