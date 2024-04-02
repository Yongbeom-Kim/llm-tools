import classNames from "classnames";
import { useState, useEffect } from "react";
import { HamburgerIcon } from "./HamburgerIcon";

const Sidebar: React.FC<React.HTMLAttributes<HTMLDivElement>> = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    console.log({ active });
  }, [active]);
  return (
    <div
      className={classNames(
        `absolute left-0 top-0 h-full bg-slate-800 transition-all duration-300 ease-in-out`,
        { "w-16": !active },
        { "w-64": active }
      )}
    >
      <div
        className={`absolute top-2 right-2 size-12 p-2 flex items-center justify-center aspect-square cursor-pointer hover:bg-slate-900 rounded-full`}
        onClick={() => setActive((active) => !active)}
      >
        <HamburgerIcon className="w-6 inline-block m-auto" active={active} />
      </div>
    </div>
  );
};

export default Sidebar;
