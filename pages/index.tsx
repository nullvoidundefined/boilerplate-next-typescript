import { APPLICATION_LOCAL_STORAGE_KEY, siteTitle } from "../src/constant";
import {
  selectAuthSessionToken,
  setAuthSessionToken,
} from "../src/state/authSlice";
import { useDispatch, useSelector } from "react-redux";

import Head from "next/head";
import { HomePage } from "../src/view-page";
import { Layout } from "../src/view-component";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { writeLocalStorage } from "../src/service/localStorage/write";

export default function HomeRoute() {
  const router = useRouter();
  const dispatch = useDispatch();
  const sessionToken = useSelector(selectAuthSessionToken);

  const handleUserSignIn = (sessionToken: string) => {
    dispatch(setAuthSessionToken(sessionToken));
    writeLocalStorage("sessionToken", sessionToken);
    console.log("sessionToken:", sessionToken);
    router.push("items");
  };

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <HomePage onSignInSuccess={handleUserSignIn} />
    </Layout>
  );
}
