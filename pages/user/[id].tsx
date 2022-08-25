import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { selectUser } from "../../src/state";
import { Item } from "../../src/type";
import { LayoutAuth } from "../../src/view/component";

type ItemRouteType = {
  item: Item;
};

export default function ItemDetailRoute({ item }: ItemRouteType) {

  const { title } = item;

  // Creat Auth redirect component

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
        <title>{title}</title>
      </Head>
      User Page
    </LayoutAuth>
  );
}