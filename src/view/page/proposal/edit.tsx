import { ProposalFormData } from "../../../type";
import { ProposalForm } from "../../component/form/proposal/proposalForm";

const ProposalEditPage = () => {
    const updateUser = () => {
        console.log("updateUser");
    };

    return (
        <>
            <h3>Edit Proposal</h3>
            <ProposalForm
                formData={{} as ProposalFormData}
                onSubmit={updateUser}
            />
        </>
    );
};

export { ProposalEditPage };
