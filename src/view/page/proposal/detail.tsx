import { Proposal } from "../../../type";

type ProposalPageProps = {
    proposal: Proposal;
};

const ProposalDetailPage = ({ proposal }: ProposalPageProps) => {
    const { name } = proposal;
    return (
        <article>
            <h1>{name}</h1>
        </article>
    );
};

export { ProposalDetailPage };
