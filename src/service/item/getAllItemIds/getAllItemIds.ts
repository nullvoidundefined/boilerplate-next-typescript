import { items } from "../../../data";

const getAllItemIds = () => {
  return items.map((item) => {
    return {
      params: {
        id: item.id,
      },
    };
  });
}

export { getAllItemIds };
