import utilStyles from "../../style/global.module.css";

type ProposalPageProps = {
  title: string;
};

const ProposalDetailPage = ({ title }: ProposalPageProps) => {
  return (
    <article>
      <h1 className={utilStyles.headingXl}>{title}</h1>
    </article>
  );
};

export { ProposalDetailPage };
