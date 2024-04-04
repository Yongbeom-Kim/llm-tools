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
    <div className="relative text-primary-900 m-5">
      {/* Form Button */}
      <button
        className="flex items-center justify-start py-2 pl-3 pr-4 border-none rounded-lg hover:bg-primary-300 transition-all duration-300 ease-in-out"
        onClick={() => setActive((isActive) => !isActive)}
      >
        <div className="min-w-20 text-left">
          {items[selectedIndex] ?? "Selection"}
        </div>
        {/* Triangle */}
        <div className="size-0 border-4 border-x-transparent border-b-transparent border-t-primary-900 translate-x-full translate-y-1/3"></div>
      </button>
      {/* List */}
      <ul
        className={classNames(
          "w-full absolute border-solid border-[1px] rounded-lg py-2 bg-primary-300 top-12 transition-all duration-200 ease-in-out",
          { "invisible opacity-0 -translate-y-1/2": !isActive, "": isActive }
        )}
      >
        {items.map((item, i) => {
          return (
            <li
              key={item}
              className={classNames(
                "w-full appearance-none list-none hover:bg-primary-400",
                { "bg-primary-400": selectedIndex === i }
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
              <label className="px-3 py-1" htmlFor={item}>
                {item}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SelectForm;
