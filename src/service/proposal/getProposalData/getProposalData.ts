import { Proposal } from "../../../type";
import { proposals } from "../../../data"
async function getProposalData(id: string | string[]): Promise<Proposal> {
  return proposals.find((proposal) => proposal.id === id) as Proposal;
}

export { getProposalData };
