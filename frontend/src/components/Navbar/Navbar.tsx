import SelectForm from "./SelectForm";

const Navbar: React.FC<React.HTMLAttributes<HTMLDivElement>> = () => {
  return (
    <div className="flex flex-row items-center justify-between m-0 border-0 w-full bg-slate-200 h-16">
      <div className={"flex flex-row items-center"}>
        <SelectForm items={["abc", "def", "ghi", "jkl", "mno", "pqr"]} />
      </div>
      <div className="flex flex-row items-center">
        <span className="text-slate-900 text-lg font-bold">Account</span>
      </div>
    </div>
  );
};

export default Navbar;
