import classNames from "classnames";
import { useState } from "react";

type SelectFormProps = {
  items: string[];
  selectedIndex?: number;
};

// FIXME: keyboard accessiblity
const SelectForm: React.FC<SelectFormProps> = ({ items, selectedIndex: i }) => {
  const [selectedIndex, setSelectedIndex] = useState(i ?? -1);
  const [isActive, setActive] = useState(false);

  return (
    <div className="relative text-very-light-primary m-5">
      <button
        className=" flex items-center justify-start py-2 pl-3 pr-4 border-solid border-light-primary border-[1px] rounded-lg hover:bg-primary hover:text-very-light-primary transition-all duration-300 ease-in-out"
        onClick={() => setActive((isActive) => !isActive)}
      >
        <div className="min-w-20 text-left">
          {items[selectedIndex] ?? "Selection"}
        </div>
        {/* Triangle */}
        <div className="size-0 border-4 border-x-transparent border-b-transparent border-t-very-light-primary translate-x-full translate-y-1/3"></div>
      </button>
      <ul
        className={classNames(
          "w-full absolute border-solid border-[1px] rounded-lg py-1 bg-dark-primary top-12 transition-all duration-200 ease-in-out",
          { "invisible opacity-0 -translate-y-1/2": !isActive, "": isActive }
        )}
      >
        {items.map((item, i) => {
          return (
            <li
              key={item}
              className={classNames(
                "w-full appearance-none list-none hover:bg-primary",
                { "bg-primary": selectedIndex === i }
              )}
              onClick={() => (setSelectedIndex(i), setActive(false))}
            >
              <input
                type="radio"
                name="select_form"
                id={item}
                tabIndex={0}
                className="fixed opacity-0 pointer-events-none"
              />
              <label htmlFor={item}>{item}</label>
            </li>
          );
        })}
      </ul>
    </div>
    // <form>
    //   <select
    //     value={"1"}
    //     className="outline-none appearance-none border-none bg-inherit"
    //   >
    //     <option className={"outline-none appearance-none bg-inherit"} value="1">
    //       Tool 1
    //     </option>
    //     <option value="2">Tool 2</option>
    //     <option value="3">Tool 3</option>
    //   </select>
    // </form>
  );
};

export default SelectForm;
