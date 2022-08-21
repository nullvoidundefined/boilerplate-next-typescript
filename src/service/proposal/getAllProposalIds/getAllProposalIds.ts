import { proposals } from "../../../data";

const getAllProposalIds = () => {
  return proposals.map((proposal) => {
    return {
      params: {
        id: proposal.id,
      },
    };
  });
}

export { getAllProposalIds };
