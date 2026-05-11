import { ChevronLeft, ChevronRight, CircleX, Trash2 } from "lucide-react";
import Button from "./Button";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import type { CartItemType } from "../types/CartItem";
type CartTypeProps = {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  showCart: boolean;
};

const Cart = ({ setShowCart, showCart }: CartTypeProps) => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const getCartItems = async () => {
    try {
      const response = await fetch("http://localhost:3000/get-cart-items", {
        credentials: "include",
      });
      if (!response.ok) {
        console.log("erro na requisição");
        return;
      }
      const data = await response.json();
      setCartItems(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCartItems();
  }, []);

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
        {cartItems?.map((item) => (
          <CartItem
            title={item.product.name}
            price={item.product.price}
            img={item.product.image}
            id={item.product.id}
          />
        ))}
      </div>
      <Button title={"Finalizar pedido"} />
    </div>
  );
};
export default Cart;
