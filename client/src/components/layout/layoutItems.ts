import { GetItemsProps } from "../../types/layout-items";
import { getItem } from "../../utils/getItem";

export const layoutItems: GetItemsProps[] = [
  { label: "Сезонное меню", key: "/season" },
  { label: "Комбо наборы", key: "/combo" },
  { label: "Роллы", key: "/sushi" },
  { label: "Пицца", key: "/pizza" },
  { label: "Закуски", key: "/appetizers" },
  { label: "Воки", key: "/woks" },
  { label: "Дополнительно", key: "/additional" },
];

getItem(layoutItems);
