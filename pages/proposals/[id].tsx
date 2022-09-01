import {
    GetStaticPaths,
    GetStaticProps,
    GetStaticPropsContext,
    GetStaticPropsResult,
} from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import { getProposalById } from "../../src/service";

import { Proposal } from "../../src/type";
import { ProposalDetailPage } from "../../src/view/page";

type ProposalRouteType = {
    proposal: Proposal;
};

export default function ProposalDetailRoute({ proposal }: ProposalRouteType) {
    const { name } = proposal;

    return (
        <>
            <Head>
                <title>{name}</title>
            </Head>
            <ProposalDetailPage proposal={proposal} />
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
    const result = await getProposalById(id as string);
    const { data } = result;
    const proposal = data ? data : [];
    return {
        props: {
            proposal,
        },
    };
};
