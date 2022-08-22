import { Item } from "../../type";
import Link from "next/link";
import globalStyles from "../../style/global.module.css";

type ItemsPageProps = {
  items: Item[];
};

const ItemListPage = ({ items }: ItemsPageProps) => {
  return (
    <>
      <h2 className={globalStyles.headingLg}>Items</h2>
      <ul className={globalStyles.list}>
        {items.map(({ id, title }) => (
          <li className={globalStyles.listItem} key={id}>
            <Link href={`/items/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
          </li>
        ))}
      </ul>
    </>
  );
};

export { ItemListPage };
