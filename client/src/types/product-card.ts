export interface ItemsProps {
  id: number;
  img: string;
  title: string;
  composition: string;
  cost: number;
  tags?: string[];
}

export interface ProductCardProps {
  items: ItemsProps[];
}
