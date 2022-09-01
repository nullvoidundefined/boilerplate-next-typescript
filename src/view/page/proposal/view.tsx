import { Button } from "react-bootstrap";
import { Proposal } from "../../../type";

type ProposalViewPageProps = {
    onDeleteClick: (id: string) => void;
    onEditClick: (id: string) => void;
    proposal: Proposal;
};

const ProposalViewPage = ({ onEditClick, proposal }: ProposalViewPageProps) => {
    const { name, id } = proposal;
    return (
        <article>
            <h1>{name}</h1>
            <Button onClick={() => onEditClick(id)}>Edit</Button>
        </article>
    );
};

export { ProposalViewPage };
