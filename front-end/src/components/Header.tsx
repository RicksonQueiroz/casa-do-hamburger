import { Link } from "react-router";

const Header = () => {
  return (
    <div className="bg-[#161410]">
      <div className="w-full md:w-[737px] md:p-0 mx-auto flex items-center justify-between p-3">
        <img src="./logo.png" className="h-[86px]" />
        <Link to="/login">
          <div className="bg-[#F2DAAC] w-[130px] h-[35px] flex items-center justify-center rounded-sm cursor-pointer">
            Entrar
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Header;
