import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <Link to="/login"> Login</Link>
      <Link to="/cadastro"> Cadastrar</Link>
    </div>
  );
};
export default Home;
