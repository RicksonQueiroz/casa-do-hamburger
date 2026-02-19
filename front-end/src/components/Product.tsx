import { ShoppingBag } from "lucide-react";
import type { ProductType } from "../types/Product";
import { formatter } from "../utils/utils";

const Product = ({
  id,
  name,
  image,
  description,
  price,
  category,
}: ProductType) => {
  return (
    <div className="">
      <div className="flex gap-2">
        <img
          src={`./${image}`}
          className="w-[100px] h-[80px] md:w-[200px] md:h-[166px]"
        />
        <div className="flex flex-col  w-full">
          <p className="text-sm md:text-lg uppercase font-bold">{name}</p>
          <p className="text-xs md:text-[14px] text-gray-400 flex-1">
            {description}
          </p>
          <div className="flex gap-2 items-center justify-end">
            <p className="text-[12px] md:text-lg text-[#f2daac]">
              {formatter(price)}
            </p>
            <ShoppingBag size={18} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
