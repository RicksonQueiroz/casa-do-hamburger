import { ChevronLeft, ChevronRight, CircleX, Trash2 } from "lucide-react";
import Button from "./Button";
import CartItem from "./CartItem";
type CartTypeProps = {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  showCart: boolean;
};

const Cart = ({ setShowCart, showCart }: CartTypeProps) => {
  return (
    <div className="bg-[#f2daac] w-[375px] h-screen absolute right-0 p-5 flex flex-col">
      <div className="flex">
        <CircleX
          className="mx-5 cursor-pointer"
          onClick={() => setShowCart(!showCart)}
        />
        <p className="uppercase font-bold">Meu carrinho</p>
      </div>
      <div className="flex-1 mt-5 flex-col gap-2">
        <CartItem />
      </div>
      <Button title={"Finalizar pedido"} />
    </div>
  );
};
export default Cart;
