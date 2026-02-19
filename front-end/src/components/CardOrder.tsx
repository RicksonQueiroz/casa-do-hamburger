import { AlarmClockCheck, CalendarPlus, ClockFading, User } from "lucide-react";

type orderType = {
  id: number;
  name: string;
  date: string;
  horaPedido: string;
  horaRetirada?: string;
  valorTotal: number;
};

const CardOrder = ({
  id,
  name,
  date,
  horaPedido,
  horaRetirada,
  valorTotal,
}: orderType) => {
  return (
    <div className="  bg-[#f2daac] p-2 rounded-md">
      <div className="flex text-black justify-between">
        <p>#{id}</p>
        <select className="font-bold">
          <option value="pendente" defaultChecked disabled>
            Pendente
          </option>
          <option value="retirado">Retirado</option>
          <option value="cancelado">Cancelado</option>
        </select>
      </div>

      <div className="mt-3 flex flex-col gap-1">
        <div className="text-black flex gap-2 items-center">
          <User size={16} />
          <p className="text-sm">{name}</p>
        </div>
        <div className="text-black flex gap-2 items-center">
          <CalendarPlus size={16} />
          <p className="text-sm">{date}</p>
        </div>
        <div className="flex gap-3">
          <div className="text-black flex gap-2 items-center">
            <ClockFading size={16} />
            <p className="text-sm">{horaPedido}</p>
          </div>

          <div className="text-black flex gap-3 items-center">
            <AlarmClockCheck size={16} />
            <p className="text-sm">
              {horaRetirada ? horaRetirada : "Aguardando"}
            </p>
          </div>
        </div>
        <div className="h-0.5 w-full bg-black mt-4"></div>
        <p className="text-gray-700 text-right font-bold">R${valorTotal}</p>
      </div>
    </div>
  );
};
export default CardOrder;
