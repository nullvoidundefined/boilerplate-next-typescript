import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import { getAllItemIds, getItemData } from "../../src/service";
import { selectUser } from "../../src/state";
import { Item } from "../../src/type";
import { Layout } from "../../src/view/component";
import { ItemDetailPage } from "../../src/view/page";


type ItemRouteType = {
  item: Item;
};

export default function ItemDetailRoute({ item }: ItemRouteType) {
  const { title } = item;

  const router = useRouter();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [router, user]);


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
