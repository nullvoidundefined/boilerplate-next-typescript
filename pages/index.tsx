import { selectUser, setUser } from "../src/state/userSlice";
import { useDispatch, useSelector } from "react-redux";

import Head from "next/head";
import { HomePage } from "../src/view-page";
import { Layout } from "../src/view-component";
import { User } from "../src/type";
import { siteTitle } from "../src/constant";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function HomeRoute() {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const updateUser = (user: User) => {
    dispatch(setUser(user));
  };

  useEffect(() => {
    if (user) {
      console.log("user:", user);
      router.push("items");
    }
  }, [router, user]);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <HomePage onSignInSuccess={updateUser} />
    </Layout>
  );
}
