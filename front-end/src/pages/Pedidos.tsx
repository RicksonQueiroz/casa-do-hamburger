import { useState, type SetStateAction } from "react";
import { AlarmClockCheck, CalendarPlus, ClockFading, User } from "lucide-react";
import CardOrder from "../components/CardOrder";

const Pedidos = () => {
  const [category, setCategory] = useState("Pendente");

  const handleCategory = (newCategory: SetStateAction<string>) => {
    setCategory(newCategory);
  };
  const getCategoryClass = (categoryName: String) => {
    const selectedElement =
      "w-24 text-sm font-bold md:text-md cursor-pointer border-1 border-[#f2daac] md:w-32 rounded-md bg-[#f2daac] text-black  h-7 md:h-[35px]  flex justify-center items-center";
    const notSelectedElement =
      "w-24 text-sm font-bold md:text-md cursor-pointer border-1 border-[#f2daac] md:w-32 rounded-md bg-[#161410] text-[#f2daac]  h-7 md:h-[35px]  flex justify-center items-center hover:bg-[#f2daac] hover:text-black";
    if (category == categoryName) {
      return selectedElement;
    } else {
      return notSelectedElement;
    }
  };

  return (
    <div className="text-white md:w-[737px]  mx-auto w-full px-3 md:px-0">
      {/* Categorias */}
      <div className="flex gap-3 md:py-4 py-1">
        <div
          className={getCategoryClass("Pendente")}
          onClick={() => handleCategory("Pendente")}
        >
          Pendente
        </div>

        <div
          className={getCategoryClass("Retirado")}
          onClick={() => handleCategory("Retirado")}
        >
          Retirado
        </div>

        <div
          className={getCategoryClass("Cancelado")}
          onClick={() => handleCategory("Cancelado")}
        >
          Cancelado
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <CardOrder
          id={1}
          name="Rickson"
          horaPedido="16h15"
          date="21/03/2026"
          valorTotal={125.34}
        />
      </div>
    </div>
  );
};
export default Pedidos;
