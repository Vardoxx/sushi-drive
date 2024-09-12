export interface ItemsProps {
  id: number;
  img: string;
  title: string;
  composition: string;
  cost: number;
  tag?: string[] | undefined[] | undefined;
  quantity: number;
}

export interface ProductCardProps {
  items: ItemsProps[];
}
