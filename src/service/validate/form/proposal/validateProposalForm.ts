import { ProposalFormData, ProposalFormErrorMap } from "../../../../type";

const validateProposalForm = (
    formData: ProposalFormData,
    setErrors: React.Dispatch<React.SetStateAction<ProposalFormErrorMap>>
) => {
    const newErrors: ProposalFormErrorMap = {} as ProposalFormErrorMap;

    if (formData.name.length < 1) {
        newErrors.name = "Please enter an email";
    }

    setErrors(newErrors);

    return Boolean(Object.keys(newErrors).length);
};

export { validateProposalForm };
