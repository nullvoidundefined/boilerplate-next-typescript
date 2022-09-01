import Link from "next/link";
import { Proposal } from "../../../type";

type ProposalsPageProps = {
    proposals: Proposal[];
};

const ProposalListPage = ({ proposals }: ProposalsPageProps) => {
    console.log("proposals", proposals);
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
                    </li>
                ))}
            </ul>
        </>
    );
};

export { ProposalListPage };
