import { GetStaticProps } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import { siteTitle } from "../../src/constant";
import { getAllItems } from "../../src/service";
import { selectUser } from "../../src/state";
import { Item } from "../../src/type";
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
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <ItemListPage items={items} />
    </>
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
