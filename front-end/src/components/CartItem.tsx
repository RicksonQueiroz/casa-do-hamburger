import { ChevronLeft, ChevronRight, Trash2 } from "lucide-react";

const CartItem = () => {
  return (
    <div className="flex gap-3 items-center ">
      <img src="./batata-frita.png" alt="" className="w-[100px] rounded-md " />
      <div className="flex-1">
        <p className="uppercase font-bold">Duplo da casa</p>
        <p className="font-bold text-white">R$28,99</p>
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
        <Trash2 className="cursor-pointer" />
      </div>
    </div>
  );
};
export default CartItem;
