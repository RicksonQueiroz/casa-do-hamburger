type ButtonType = {
  title: string;
  variant?: "default" | "outline";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ title, variant = "default", ...props }: ButtonType) => {
  //  const default  = className="bg-[#C92A0E] border-2 w-full py-2 rounded-md text-white font-bold cursor-pointer text-sm border-[#C92A0E]"
  //   const outline = className="bg-white border-2 w-full py-2 rounded-md text-[#C92A0E] font-bold cursor-pointer text-sm border-[#C92A0E]"

  const buttonVariant = () => {
    if (variant == "default") {
      return "bg-[#C92A0E] border-2 w-full py-2 rounded-md text-white font-bold cursor-pointer text-sm border-[#C92A0E]";
    } else if (variant == "outline") {
      return "bg-white border-2 w-full py-2 rounded-md text-[#C92A0E] font-bold cursor-pointer text-sm border-[#C92A0E]";
    }
  };

  return (
    <button {...props} className={buttonVariant()}>
      {title}
    </button>
  );
};
export default Button;
