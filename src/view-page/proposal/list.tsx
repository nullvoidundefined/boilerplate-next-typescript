import Link from "next/link";
import { Proposal } from "../../type";
import globalStyles from "../../style/global.module.css";

type ProposalsPageProps = {
  proposals: Proposal[];
};

const ProposalListPage = ({ proposals }: ProposalsPageProps) => {
  return (
    <>
      <h2 className={globalStyles.headingLg}>Proposals</h2>
      <ul className={globalStyles.list}>
        {proposals.map(({ id, title }) => (
          <li className={globalStyles.listItem} key={id}>
            <Link href={`/proposals/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
          </li>
        ))}
      </ul>
    </>
  );
};

export { ProposalListPage };
