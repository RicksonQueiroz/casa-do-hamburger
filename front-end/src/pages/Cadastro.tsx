import { Link } from "react-router";
import Input from "../components/Input";
import { useState } from "react";
import Button from "../components/Button";
const Cadastro = () => {
  const [nome, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cep, setCep] = useState("");
  const [error, setError] = useState("");
  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    try {
      if (!nome || !cep || !senha || !email) {
        setError("Todas as informações devem ser preenchidas.");
        return;
      }
      if (senha != confirmPassword) {
        setError("As senhas não correspondem.");
        return;
      }

      const response = await fetch("http://localhost:3000/cadastro", {
        method: "POST",
        headers: { "Content-Type": "application/JSON" },
        body: JSON.stringify({ nome, email, senha, cep }),
      });
      console.log(response);
      switch (response.status) {
        case 409:
          setError("E-mail já associado a uma conta.");
          break;
        case 400:
          setError("Todos os campos são obrigatórios.");
          break;
        case 201:
          setError("");
          setName("");
          setCep("");
          setConfirmPassword("");
          setPassword("");
          setEmail("");
          break;
        case 500:
          setError("Serviço indisponível, tente novamente mais tarde");
          break;
        default:
          setError("");
          break;
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      // console.log(error);
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
        <Input placeholder="Nome" onChange={(e) => setName(e.target.value)} />
        <Input
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          value={email}
        />
        <Input
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          value={senha}
        />
        <Input
          placeholder="Confirme sua senha"
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          value={confirmPassword}
        />
        <Input
          placeholder="CEP"
          onChange={(e) => setCep(e.target.value)}
          type="text"
          value={cep}
        />
        <p className="text-red-400 font-bold">{error}</p>
        <div className="mt-2 flex flex-col gap-2">
          <Button title="Criar conta" type="submit" />
          <Link to="/login">
            <Button title="Já tenho uma conta" variant="outline" />
          </Link>
        </div>
      </div>
    </form>
  );
};
export default Cadastro;
