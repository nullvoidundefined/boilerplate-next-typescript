import { Proposal } from "../../../type";

async function getProposalData(id: string | string[]): Promise<Proposal> {
  const proposals = [
    { id: "1", title: "Proposal 1" },
    { id: "2", title: "Proposal 2" },
  ];

  return proposals.find((proposal) => proposal.id === id) as Proposal;
}

export { getProposalData };
