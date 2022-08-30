import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { selectUser } from "../../src/state";

export default function ItemDetailRoute() {
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
        <title>User Profile</title>
      </Head>
      User Page
    </>
  );
}
