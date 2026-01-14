import Input from "../components/Input";
import { useState } from "react";
import { Link } from "react-router";
import Button from "../components/Button";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
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
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Fazer login" />
        <Link to="/cadastro">
          <Button title="Não tenho uma conta" variant="outline" />
        </Link>
      </div>
    </form>
  );
};
export default Login;
