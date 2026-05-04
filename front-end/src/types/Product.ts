import type { SetStateAction } from "react";

export type ProductType = {
  [x: string]: any;
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  setProduct: React.Dispatch<SetStateAction<ProductType[]>>;
  onDelete: (id: number) => void;
};
