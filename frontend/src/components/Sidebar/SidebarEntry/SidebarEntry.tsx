import classNames from "classnames";
import { useState } from "react";
import { sidebarAnimation } from "../Sidebar";
import { Link } from "react-router-dom";

type SidebarEntryProps = {
  label: string;
  icon: React.FC<React.HTMLAttributes<SVGElement>>;
  isExpanded: boolean;
  href: string;
};

const SidebarEntry: React.FC<SidebarEntryProps> = ({
  label,
  icon: Icon,
  isExpanded,
  href,
}) => {
  const [isHover, setHover] = useState(false);

  const hoverBg = "bg-primary-200";
  const fallback_route = "/not-found";
  return (
    <>
      <Link
        to={href ?? fallback_route}
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
      </Link>
      <Link
        to={href ?? fallback_route}
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
      </Link>
    </>
  );
};

export default SidebarEntry;
