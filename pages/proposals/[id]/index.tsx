import {
    GetStaticPaths,
    GetStaticProps,
    GetStaticPropsContext,
    GetStaticPropsResult,
} from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { getProposalViaDatabase } from "../../../src/service";

import { Proposal } from "../../../src/type";
import { ProposalViewPage } from "../../../src/view/page";

type ProposalRouteType = {
    proposal: Proposal;
};

export default function ProposalViewRoute({ proposal }: ProposalRouteType) {
    const { name } = proposal;

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
                <title>{name}</title>
            </Head>
            <ProposalViewPage
                onDeleteClick={deleteProposal}
                onEditClick={navigateToEditProposalPage}
                proposal={proposal}
            />
        </>
    );
}

// SSR

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = [
        {
            params: {
                id: "1",
            },
        },
    ];
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
    const result = await getProposalViaDatabase(id as string);
    const { data } = result;
    const proposal = data ? data : [];
    return {
        props: {
            proposal,
        },
    };
};
