import classNames from "classnames";
import { HamburgerIcon } from "./HamburgerIcon";
import SidebarEntry from "./SidebarEntry/SidebarEntry";
import ChatMessageIcon from "./SidebarIcons/ChatMessageIcon";
import TextFileLineIcon from "./SidebarIcons/TextFileLineIcon";

type SidebarProps = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
} & React.HTMLAttributes<HTMLDivElement>;

export const sidebarAnimation = "transition-all duration-300 ease-in-out";
const Sidebar: React.FC<SidebarProps> = ({ active, setActive }) => {
  return (
    <>
      <div
        className={classNames(
          `relative h-full bg-very-dark-primary overflow-hidden grid content-start`,
          { "grid-cols-[0px_64px]": !active, "grid-cols-[196px_64px]": active },
          sidebarAnimation
        )}
      >
        {/* Column line */}
        <div className="absolute h-full w-0 right-[64px] top-[64px] border-solid border-primary"></div>
        {/* invisible */}
        <div></div>
        <HamburgerIcon
          className="w-6 inline-block m-auto"
          hamburgerColor="bg-light-primary"
          active={active}
          setActive={setActive}
        />
        {/* Barrier */}
        <div className="relative -top-1 col-start-1 col-span-2 border-2 border-solid border-dark-primary"></div>

        <SidebarEntry
          label="label"
          icon={ChatMessageIcon}
          isExpanded={active}
        />
        <SidebarEntry
          label="label2"
          icon={TextFileLineIcon}
          isExpanded={active}
        />
      </div>
    </>
  );
};

export default Sidebar;
