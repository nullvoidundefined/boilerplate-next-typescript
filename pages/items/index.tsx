import { Item, Post } from "../../src/type";

import { GetStaticProps } from "next";
import Head from "next/head";
import { ItemListPage } from "../../src/view-page";
import { Layout } from "../../src/view-component";
import { getAllItems } from "../../src/service";
import { siteTitle } from "../../src/constant";

type HomeRouteProps = {
  items: Item[];
};

export default function HomeRoute({ items }: HomeRouteProps) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <ItemListPage items={items} />
    </Layout>
  );
}

// SSR

export const getStaticProps: GetStaticProps = async () => {
  const items = getAllItems();
  return {
    props: {
      items,
    },
  };
};
