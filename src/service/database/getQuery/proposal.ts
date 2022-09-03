import { Proposal } from "../../../type";

const editProposalQuery = (proposal: Proposal) =>
    `
        UPDATE proposals 
        SET name = '${proposal.name}', 
            description = '${proposal.description}', 
            id_public = '${proposal.name}' 
        WHERE id = '${proposal.id}';
    `;

const getProposalQuery = (id: string) =>
    `SELECT * FROM proposals WHERE id = '${id}';`;

const getProposalListQuery = `SELECT * FROM proposals;`;

const getProposalListPublicIdsQuery = `SELECT id_public FROM proposals;`;

export {
    getProposalQuery,
    editProposalQuery,
    getProposalListPublicIdsQuery,
    getProposalListQuery,
};
