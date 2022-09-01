import { GetStaticProps } from "next";
import Head from "next/head";

import { Proposal } from "../../src/type";
import { getProposalList } from "../../src/service";
import { ProposalListPage } from "../../src/view/page";

type ProposalsRouteProps = {
    proposals: Proposal[];
};

export default function ProposalsRoute({ proposals }: ProposalsRouteProps) {
    return (
        <>
            <Head>
                <title>Proposals</title>
            </Head>
            <ProposalListPage proposals={proposals} />
        </>
    );
}

// SSR

export const getStaticProps: GetStaticProps = async () => {
    const result = await getProposalList();
    const { data } = result;
    const proposals = data ? data : [];
    return {
        props: {
            proposals,
        },
    };
};
