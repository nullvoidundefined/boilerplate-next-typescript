import Head from "next/head";
import { ProposalEditPage } from "../../../src/view/page";

export default function EditProposalRoute() {
    return (
        <>
            <Head>
                <title>Edit Proposal</title>
            </Head>
            <ProposalEditPage />
        </>
    );
}
