import { ShoppingBag } from "lucide-react";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { formatter } from "../utils/utils";

type ProductProps = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  category: string;
  onDelete: (id: number) => void;
};

const Products = ({
  id,
  name,
  image,
  description,
  price,
  onDelete,
}: ProductProps) => {
  const { user } = useContext(UserContext);

  const handleDeleteProduct = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/delete-product/${id}`,
        { method: "DELETE", credentials: "include" },
      );

      if (!response.ok) {
        console.log("Erro ao deletar");
        return;
      }

      onDelete(id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="flex gap-2">
        <img
          src={`./${image}`}
          alt={name}
          className="w-[100px] h-[80px] md:w-[200px] md:h-[166px]"
        />

        <div className="flex flex-col w-full">
          <div className="flex justify-between">
            <p className="text-sm md:text-lg uppercase font-bold">{name}</p>

            {user?.admin && (
              <div
                className="text-xs border uppercase rounded-md p-2 text-red-500 cursor-pointer"
                onClick={handleDeleteProduct}
              >
                Excluir
              </div>
            )}
          </div>

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

export default Products;
