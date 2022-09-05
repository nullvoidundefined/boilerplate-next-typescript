import { useRouter } from "next/router";
import { editProposalViaServer } from "../../../service";
import { Proposal, ProposalFormData } from "../../../type";
import { ProposalForm } from "../../component";

interface ProposalEditPageProps {
    proposal: Proposal;
}

const ProposalEditPage = ({ proposal }: ProposalEditPageProps) => {
    const router = useRouter();

    const editProposal = (proposalFormData: ProposalFormData) => {
        const newProposal = { ...proposal, ...proposalFormData };
        editProposalViaServer(newProposal)
            .then(() => {
                router.push(`/proposals`);
            })
            .catch((error) => console.log(error));
    };

    return (
        <>
            <h3>Edit Proposal</h3>
            <ProposalForm
                formData={{ ...proposal } as ProposalFormData}
                onSubmit={editProposal}
            />
        </>
    );
};

export { ProposalEditPage };
