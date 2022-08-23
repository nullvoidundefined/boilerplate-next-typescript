import { GetStaticProps } from "next";
import Head from "next/head";
import { Item } from "../../src/type";
import { ItemListPage } from "../../src/view-page";
import { Layout } from "../../src/view-component";
import { getAllItems } from "../../src/service";
import { selectUser } from "../../src/state/userSlice";
import { siteTitle } from "../../src/constant";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

type HomeRouteProps = {
  items: Item[];
};

export default function HomeRoute({ items }: HomeRouteProps) {
  const router = useRouter();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [router, user]);

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
