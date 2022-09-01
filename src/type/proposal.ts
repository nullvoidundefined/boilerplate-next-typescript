interface Proposal {
    description: string;
    id: string;
    id_public: string;
    name: string;
}

interface ProposalFormData {
    description: string;
    name: string;
}

interface ProposalFormErrorMap {
    description: string;
    name: string;
}

export type { Proposal, ProposalFormData, ProposalFormErrorMap };
