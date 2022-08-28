import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { siteTitle } from "../src/constant";
import { selectUser, setUser } from "../src/state";
import { User } from "../src/type";
import { HomePage } from "../src/view/page";
import { Layout } from "../src/view/component";
import { ModalContext } from "../src/state/context/modalContext";

export default function HomeRoute() {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector(selectUser);

  const updateUser = (user: User) => {
    dispatch(setUser(user));
  };

  const modalContext = useContext(ModalContext);

  useEffect(() => {
    if (user) {
      router.push("/items");
    }
  }, [router, user]);

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <button onClick={() => modalContext.showModal()}>Show Modal</button>
      <button onClick={() => modalContext.hideModal()}>Hide Modal</button>
      <HomePage onSignInSuccess={updateUser} />
    </Layout>
  );
}
