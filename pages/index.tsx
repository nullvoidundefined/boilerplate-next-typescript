import { Post, Proposal } from "../src/type";

import { GetStaticProps } from "next";
import Head from "next/head";
import { HomePage } from "../src/view-page";
import { Layout } from "../src/view-component";
import { getAllProposals } from "../src/service";
import { siteTitle } from "../src/constant";
import { useRouter } from "next/router";

type HomeRouteProps = {
  proposals: Proposal[];
};

export default function HomeRoute({ proposals }: HomeRouteProps) {
  const router = useRouter();

  const navigateToProposalsPage = () => {
    router.push("proposals");
  };

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <HomePage onButtonClick={navigateToProposalsPage} />
    </Layout>
  );
}

// SSR

export const getStaticProps: GetStaticProps = async () => {
  const proposals = getAllProposals();
  return {
    props: {
      proposals,
    },
  };
};
