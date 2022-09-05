import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getProposalViaServer } from "../../../src/service";
import { Proposal } from "../../../src/type";
import { ProposalEditPage } from "../../../src/view/page";

export default function EditProposalRoute() {
    const router = useRouter();
    const query = router.query;
    const id = query.id as string;

    const [proposal, setProposal] = useState<Proposal | null>(null);

    useEffect(() => {
        if (id && !proposal) {
            getProposalViaServer(id)
                .then((result: Proposal) => {
                    setProposal(result);
                })
                .catch((error: string) => console.log(error));
        }
    }, [id, proposal]);

    return (
        <>
            <Head>
                <title>Edit Proposal</title>
            </Head>
            {proposal ? <ProposalEditPage proposal={proposal} /> : null}
        </>
    );
}
