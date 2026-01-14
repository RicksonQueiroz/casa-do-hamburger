import { Link } from "react-router";
import Input from "../components/Input";
import { useState } from "react";
import Button from "../components/Button";
const Cadastro = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cep, setCep] = useState("");
  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    alert(name + email + password + confirmPassword + cep);
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
        <Input placeholder="Nome" onChange={(e) => setName(e.target.value)} />
        <Input
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <Input
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <Input
          placeholder="Confirme sua senha"
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
        />
        <Input
          placeholder="CEP"
          onChange={(e) => setCep(e.target.value)}
          type="text"
        />

        <Button title="Criar conta" />
        <Link to="/login">
          <Button title="Já tenho uma conta" variant="outline" />
        </Link>
      </div>
    </form>
  );
};
export default Cadastro;
