import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getProposalUrl } from "../../../src/service/http/url/http";
import { Proposal } from "../../../src/type";
import { ProposalEditPage } from "../../../src/view/page";

export default function EditProposalRoute() {
    const router = useRouter();
    const query = router.query;
    const id = query.id as string;

    const [proposal, setProposal] = useState<Proposal | null>(null);

    useEffect(() => {
        if (id && !proposal) {
            const url = getProposalUrl(id);
            fetch(url)
                .then((response) => response.json())
                .then((requestedProposal: Proposal) => {
                    setProposal(requestedProposal);
                })
                .catch((error) => console.log(error));
            setProposal(proposal);
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
