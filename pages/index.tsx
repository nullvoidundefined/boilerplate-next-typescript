import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { siteTitle } from "../src/constant";
import { selectUser, setUser } from "../src/state";
import { User } from "../src/type";
import { HomePage } from "../src/view/page";
import { Layout } from "../src/view/component";
import { ModalManagerContext } from "../src/state/context/modalManagerContext";
import { ExampleModal } from "../src/view/component/modal/example/exampleModal";
import { Button } from "../src/view/design-system";

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
      <HomePage />
    </>
  );
}
