import { ItemsProps } from "./product-card";

export type AddToCartPayload = Omit<ItemsProps, "id"> & { id: number };

export type RemoveFromCartPayload = { id: number };

export type GetSumPayload = { cost: number };

export type GetAllPositionsPayload = { quantity: number };
