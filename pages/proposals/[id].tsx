import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";

import Head from "next/head";
import { Layout } from "../../src/view-component/layout/layout";
import { ParsedUrlQuery } from "querystring";
import { Proposal } from "../../src/type";
import { ProposalDetailPage } from "../../src/view-page";
import { getAllProposalIds } from "../../src/service/proposal/getAllProposalIds/getAllProposalIds";
import { getProposalData } from "../../src/service/proposal/getProposalData/getProposalData";

type ProposalRouteType = {
  proposal: Proposal;
};

export default function ProposalDetailRoute({ proposal }: ProposalRouteType) {
  const { title } = proposal;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <ProposalDetailPage title={title} />
    </Layout>
  );
}

// SSR

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProposalIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>): Promise<
  GetStaticPropsResult<ProposalRouteType>
> => {
  const id = params?.id || ""; // There will always be an id due to routing
  const proposal: Proposal = await getProposalData(id);
  return {
    props: {
      proposal,
    },
  };
};
