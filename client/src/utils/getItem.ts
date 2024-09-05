import { GetItemsProps } from "../types/layout-items";

export function getItem(props: GetItemsProps[]): GetItemsProps[] {
  return props.map((item) => ({
    key: item.key,
    icon: item.icon,
    children: item.children,
    label: item.label,
  }));
}
