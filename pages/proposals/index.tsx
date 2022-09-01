import { GetStaticProps } from "next";
import Head from "next/head";

import { Proposal } from "../../src/type";
import { getProposalList } from "../../src/service";
import { ProposalListPage } from "../../src/view/page";
import { useRouter } from "next/router";

type ProposalsRouteProps = {
    proposals: Proposal[];
};

export default function ProposalsRoute({ proposals }: ProposalsRouteProps) {
    const router = useRouter();

    const deleteProposal = (id: string) => {
        console.log(`Delete proposal ${id}`);
    };

    const navigateToEditProposalPage = (id: string) => {
        router.push(`/proposals/${id}/edit`);
    };

    return (
        <>
            <Head>
                <title>Proposals</title>
            </Head>
            <ProposalListPage
                onDeleteClick={deleteProposal}
                onEditClick={navigateToEditProposalPage}
                proposals={proposals}
            />
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
