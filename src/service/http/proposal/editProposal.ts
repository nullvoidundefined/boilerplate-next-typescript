import { Proposal } from "../../../type";
import { queryDatabaseClient } from "../../database/client/queryDatabaseClient";

const editProposalViaDatabase = async (proposal: Proposal) => {
    const query = `
        UPDATE proposals 
        SET name = '${proposal.name}', 
            description = '${proposal.description}', 
            id_public = '${proposal.name}' 
        WHERE id = '${proposal.id}';
    `;

    // IAN TODO: Fix this
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result: any = await queryDatabaseClient(query);
    if (result.rows) {
        return { data: result.rows, success: true };
    } else {
        return { data: null, success: false };
    }
};

const editProposalViaServer = (editedProposal: Proposal) => {
    const url = `/api/proposals/edit`;
    return fetch(url, {
        body: JSON.stringify(editedProposal),
        method: "POST",
    }).then((response) => response.json());
};

export { editProposalViaDatabase, editProposalViaServer };
