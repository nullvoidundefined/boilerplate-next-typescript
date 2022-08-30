import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { siteTitle } from "../../src/constant";
import { selectUser } from "../../src/state";
import { AdminDashboardPage } from "../../src/view/page";

export default function HomeRoute() {
  const router = useRouter();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user) {
      router.push("/items");
    }
  }, [router, user]);

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <AdminDashboardPage />
    </>
  );
}
