import classNames from "classnames";
import { useState } from "react";
import { sidebarAnimation } from "../Sidebar";

type SidebarEntryProps = {
  label: string;
  icon: React.FC<React.HTMLAttributes<SVGElement>>;
  isExpanded: boolean;
};

const SidebarEntry: React.FC<SidebarEntryProps> = ({
  label,
  icon: Icon,
  isExpanded,
}) => {
  const [isHover, setHover] = useState(false);

  const hoverBg = "bg-primary-200";
  return (
    <>
      <div
        className={classNames(
          "flex col justify-start items-center p-2 text-primary-900",
          sidebarAnimation,
          { [`${hoverBg}`]: isHover },
          { "opacity-0 -translate-x-16": !isExpanded }
        )}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        {label}
      </div>
      <div
        className={classNames(
          " m-0 w-full aspect-square justify-self-center flex justify-center items-center",
          sidebarAnimation,
          { "rounded-full": !isExpanded },
          { [`${hoverBg}`]: isHover }
        )}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        tabIndex={0}
      >
        <Icon className="size-6 block bg-transparent fill-primary-900" />
      </div>
    </>
  );
};

export default SidebarEntry;
