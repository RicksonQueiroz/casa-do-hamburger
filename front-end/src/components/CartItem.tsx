import { ChevronLeft, ChevronRight, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { formatter } from "../utils/utils";

type CartItemType = {
  title: string;
  price: number;
  img: string;
  id: number;
};

const CartItem = ({ title, price, img, id }: CartItemType) => {
  return (
    <div className="flex gap-3 items-center ">
      <img src={img} alt="" className="w-[100px] rounded-md " />
      <div className="flex-1">
        <p className="uppercase font-bold">{title}</p>
        <p className="font-bold text-white">{formatter(price)}</p>
        <div className="flex gap-3 mt-2">
          <div className="bg-[#b72f18] cursor-pointer p-1 rounded-md text-[#f2daac]">
            <ChevronLeft size={20} />
          </div>
          <p className="font-bold">1</p>
          <div className="bg-[#b72f18] cursor-pointer p-1 rounded-md text-[#f2daac]">
            <ChevronRight size={20} />
          </div>
        </div>
      </div>
      <div>
        <Trash2 className="cursor-pointer" onClick={() => alert(id)} />
      </div>
    </div>
  );
};
export default CartItem;
