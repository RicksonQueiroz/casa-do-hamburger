import { createBrowserRouter } from "react-router";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Outlet } from "react-router";
import Header from "./components/Header";
import Pedidos from "./pages/Pedidos";
import PublicRoutes from "./components/PublicRoutes";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#161410]">
      <Header />
      <Outlet />
    </div>
  );
};

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pedidos",
        element: <Pedidos />,
      },
    ],
  },

  {
    path: "/login",
    element: (
      <PublicRoutes>
        <Login />,
      </PublicRoutes>
    ),
  },
  {
    path: "cadastro",
    element: (
      <PublicRoutes>
        <Cadastro />,
      </PublicRoutes>
    ),
  },
]);
