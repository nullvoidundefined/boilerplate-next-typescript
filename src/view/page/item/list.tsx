import Link from "next/link";

import globalStyles from "../../style/global.module.css";
import { Item } from "../../../type";

type ItemsPageProps = {
  items: Item[];
};

const ItemListPage = ({ items }: ItemsPageProps) => {
  return (
    <>
      <h2 className={globalStyles.heading}>Items</h2>
      <ul>
        {items.map(({ id, title }) => (
          <li key={id}>
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
