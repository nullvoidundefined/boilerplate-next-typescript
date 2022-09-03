import { getDatabaseClient } from "../../database/getClient/getClient";

import { editProposalQuery } from "../../../service";

import { Proposal } from "../../../type";

const editProposal = async (proposal: Proposal) => {
    const client = getDatabaseClient();
    await client.connect();
    const result = await client.query(editProposalQuery(proposal));
    await client.clean();
    if (result.rows) {
        return { data: result.rows, success: true };
    } else {
        return { data: null, success: false };
    }

    return { data: proposal, success: true };
};

export { editProposal };
