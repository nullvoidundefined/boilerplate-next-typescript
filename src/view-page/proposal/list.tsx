import Link from "next/link";
import { Proposal } from "../../type";
import globalStyles from "../../style/global.module.css";

type ProposalsPageProps = {
    proposals: Proposal[];
};

const ProposalListPage = ({ proposals }: ProposalsPageProps) => {
  return (
    <>
      <section className={globalStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section
        className={`${globalStyles.headingMd} ${globalStyles.padding1px}`}
      >
        <h2 className={globalStyles.headingLg}>Blog</h2>
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
      </section>
    </>
  );
};

export { ProposalListPage };
