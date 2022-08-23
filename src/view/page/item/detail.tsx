import utilStyles from "../../style/global.module.css";

type ItemPageProps = {
  title: string;
};

const ItemDetailPage = ({ title }: ItemPageProps) => {
  return (
    <article>
      <h1 className={utilStyles.headingXl}>{title}</h1>
    </article>
  );
};

export { ItemDetailPage };
