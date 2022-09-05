import Head from "next/head";

import { ProposalCreatePage } from "../../src/view/page";

export default function CreateProposalRoute() {
    return (
        <>
            <Head>
                <title>Create Proposal</title>
            </Head>
            <ProposalCreatePage />
        </>
    );
}
