import type { ProductType } from "./Product";

export type CartItemType = {
  id: string;
  userId: number;
  productId: number;
  product: ProductType;
};
