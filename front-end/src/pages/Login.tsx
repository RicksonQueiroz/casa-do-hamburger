import Input from "../components/Input";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import Button from "../components/Button";
import { useNavigate } from "react-router";
import type { UserInterface } from "../types/User";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setError] = useState("");
  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    try {
      if (!email || !password) {
        setError("E-mail e senha não podem ficar em branco!");
        return;
      }
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });
      if (response.status == 404) {
        setError("Usuário não encontrado.");
      }
      if (response.status == 401) {
        setError("Login inválido");
      }
      if (response.status == 400) {
        setError("E-mail e senha são campos obrigatórios!");
      }
      if (response.status == 200) {
        const data = await response.json();
        setError("");
        setUser(data);
        navigate("/");
      }
      if (response.status == 500) {
        setError("Tente mais tarde.");
      }
      const data = await response.json();
      console.log(data);
    } catch (wrong) {
      console.log(wrong);
      return;
    }
  }
  return (
    <form
      className="flex justify-center bg-[#161410] h-screen items-center"
      onSubmit={handleSubmit}
    >
      <div className=" bg-black flex justify-center flex-col gap-2 p-2">
        <Link to="/">
          <img src="./logo.png" className="w-[134px] m-auto mb-4" />
        </Link>
        <Input
          placeholder="E-mail"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="text-red-500 font-bold text-sm">{erro}</p>
        <Button title="Fazer login" type="submit" />
        <Link to="/cadastro">
          <Button title="Não tenho uma conta" variant="outline" />
        </Link>
      </div>
    </form>
  );
};
export default Login;
