import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";

import Head from "next/head";
import { Item } from "../../src/type";
import { ItemDetailPage } from "../../src/view-page";
import { LayoutAuth } from "../../src/view-component";
import { ParsedUrlQuery } from "querystring";
import { getAllItemIds } from "../../src/service";
import { getItemData } from "../../src/service";
import { selectUser } from "../../src/state/slice/user";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

type ItemRouteType = {
  item: Item;
};

export default function ItemDetailRoute({ item }: ItemRouteType) {
  const router = useRouter();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [router, user]);

  const { title } = item;

  return (
    <LayoutAuth>
      <Head>
        <title>{title}</title>
      </Head>
      <ItemDetailPage title={title} />
    </LayoutAuth>
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
