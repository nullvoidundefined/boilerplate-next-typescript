import { Post, Proposal } from "../src/type";

import { GetStaticProps } from "next";
import Head from "next/head";
import { Layout } from "../src/view-component";
import { ProposalListPage } from "../src/view-page";
import { getAllProposals } from "../src/service";
import { siteTitle } from "../src/constant";

type HomeRouteProps = {
  proposals: Proposal[];
};

export default function HomeRoute({ proposals }: HomeRouteProps) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <ProposalListPage proposals={proposals} />
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
