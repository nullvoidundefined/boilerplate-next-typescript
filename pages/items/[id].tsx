import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";

import Head from "next/head";
import { Item } from "../../src/type";
import { ItemDetailPage } from "../../src/view-page";
import { Layout } from "../../src/view-component/layout/layout";
import { ParsedUrlQuery } from "querystring";
import { getAllItemIds } from "../../src/service/item/getAllItemIds/getAllItemIds";
import { getItemData } from "../../src/service/item/getItemData/getItemData";

type ItemRouteType = {
  item: Item;
};

export default function ItemDetailRoute({ item }: ItemRouteType) {
  const { title } = item;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <ItemDetailPage title={title} />
    </Layout>
  );
}

// SSR

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllItemIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>): Promise<
  GetStaticPropsResult<ItemRouteType>
> => {
  const id = params?.id || ""; // There will always be an id due to routing
  const item: Item = await getItemData(id);
  return {
    props: {
      item,
    },
  };
};
