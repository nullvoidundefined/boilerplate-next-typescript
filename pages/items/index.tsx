import { GetStaticProps } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import { siteTitle } from "../../src/constant";
import { getAllItems } from "../../src/service";
import { selectUser } from "../../src/state";
import { Item } from "../../src/type";
import { LayoutAuth } from "../../src/view/component";
import { ItemListPage } from "../../src/view/page";

type ItemsRouteProps = {
  items: Item[];
};

export default function ItemsRoute({ items }: ItemsRouteProps) {
  const router = useRouter();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [router, user]);

  return (
    <LayoutAuth>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <ItemListPage items={items} />
    </LayoutAuth>
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
