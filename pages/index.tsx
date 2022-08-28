import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { siteTitle } from "../src/constant";
import { selectUser, setUser } from "../src/state";
import { User } from "../src/type";
import { HomePage } from "../src/view/page";
import { Layout } from "../src/view/component";

export default function HomeRoute() {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector(selectUser);

  const updateUser = (user: User) => {
    dispatch(setUser(user));
  };

  console.log("HomeRoute is rendering")

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <HomePage onSignInSuccess={updateUser} />
    </Layout>
  );
}
