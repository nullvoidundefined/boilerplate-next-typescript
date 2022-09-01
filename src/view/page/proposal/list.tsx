import Link from "next/link";
import { Proposal } from "../../../type";
import { Button } from "../../design-system";

type ProposalsPageProps = {
    onDeleteClick: (id: string) => void;
    onEditClick: (id: string) => void;
    proposals: Proposal[];
};

const ProposalListPage = ({ proposals, onEditClick }: ProposalsPageProps) => {
    return (
        <>
            <h2>Proposals</h2>
            <ul>
                {proposals.map(({ id, name, id_public: publicId }) => (
                    <li key={publicId}>
                        <span>{name}</span>
                        <span>{publicId}</span>
                        <Link href={`/proposals/${id}`}>
                            <a>{name}</a>
                        </Link>
                        <Button onClick={() => onEditClick(id)}>Edit</Button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export { ProposalListPage };
