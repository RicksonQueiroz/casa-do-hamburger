const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className="w-[350px] py-[10px] text-sm px-2 outline-none rounded-md bg-white text-[#32343E] placeholder-[#32343E]"
    ></input>
  );
};
export default Input;
