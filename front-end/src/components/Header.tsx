import { Link, useLocation } from "react-router";
import { UserContext } from "../contexts/UserContext";
import { useContext, useEffect } from "react";
import { LogOut, ShoppingCart, Box, LayoutDashboard, Plus } from "lucide-react";

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const location = useLocation();
  const handleAuthUser = async () => {
    try {
      {
        const response = await fetch("http://localhost:3000/me", {
          credentials: "include",
        });
        if (!response.ok) {
          return;
        }
        const data = await response.json();
        setUser(data);
      }
    } catch (error) {
      console.log(error);
      return;
    }
  };
  useEffect(() => {
    handleAuthUser();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/logout", {
        credentials: "include",
        method: "POST",
      });
      if (!response) {
        console.log("erro ao deslogar");
        return;
      }
      const data = await response.json();
      console.log(data);
      setUser(null);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  const getNavItemClass = (path: string) => {
    const baseClass =
      "w-[35px] h-[35px] rounded-md border-1 flex justify-center items-center cursor-pointer";
    if (location.pathname == path) {
      return `${baseClass} text-[#161410] bg-[#f2daac]`;
    } else {
      return baseClass;
    }
  };
  return (
    <div className="bg-[#161410]">
      <div className="w-full md:w-[737px] md:p-0 mx-auto flex items-center justify-between p-3">
        <Link to="/login" className="text-white">
          login
        </Link>

        <Link to="/">
          <img src="./logo.png" className="h-[86px]" />
        </Link>
        {user ? (
          <div className="flex gap-8 items-center text-white justify-center ">
            {user.admin && (
              <div className="md:flex hidden text-[#F2DAAC] justify-center flex gap-2 items-center ">
                <Link to="/">
                  <div className={getNavItemClass("/")}>
                    <Box />
                  </div>
                </Link>

                <Link to="/pedidos">
                  <div className={getNavItemClass("/pedidos")}>
                    <LayoutDashboard />
                  </div>
                </Link>

                <div className="w-[35px] h-[35px] rounded-md border-1 flex justify-center items-center cursor-pointer">
                  <Plus />
                </div>
              </div>
            )}
            <div className="relative cursor-pointer">
              <ShoppingCart />
              <p className="absolute -top-4 -right-2 bg-[#f2dcaa] rounded-full w-5 h-5 text-center text-sm font-bold text-black">
                1
              </p>
            </div>
            <p className="text-white cursor-pointer">{user.name}</p>
            <p className="cursor-pointer">
              {" "}
              <LogOut onClick={() => handleLogout()} />
            </p>
          </div>
        ) : (
          <Link to="/login">
            <div className="bg-[#F2DAAC] w-[130px] h-[35px] flex items-center justify-center rounded-sm cursor-pointer">
              Entrar
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};
export default Header;
