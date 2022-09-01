import { ProposalForm } from "../../component/form/proposal/proposalForm";
import type { ProposalFormData } from "../../../type";

const ProposalCreatePage = () => {
    const createUser = () => {
        console.log("createUser");
    };

    return (
        <>
            <h3>Create Proposal</h3>
            <ProposalForm
                formData={{} as ProposalFormData}
                onSubmit={createUser}
            />
        </>
    );
};

export { ProposalCreatePage };
