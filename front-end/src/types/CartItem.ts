import type { ProductType } from "./Product";

export type CartItemType = {
  id: string;
  userId: number;
  productId: number;
  product: ProductType;
};

export type CartItemsContextType = {
  cartItems: CartItemType[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>;
};
