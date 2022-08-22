import { Item } from "../../../type";
import { items } from "../../../data"
async function getItemData(id: string | string[]): Promise<Item> {
  return items.find((item) => item.id === id) as Item;
}

export { getItemData };
