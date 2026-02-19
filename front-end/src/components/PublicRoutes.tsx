import { useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "react-router";

const PublicRoutes = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [isChecking, setIsCheking] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/me", {
      credentials: "include",
    })
      .then((res) => {
        if (res.ok) {
          navigate("/", { replace: true });
          return;
        }
        setIsCheking(false);
      })
      .catch(() => {
        // se der erro de rede, deixa acessar a rota pública
      });
  }, [navigate]);
  if (isChecking) {
    return <p>Carregando</p>;
  }
  return <>{children}</>;
};

export default PublicRoutes;
