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
const Sidebar: React.FC<SidebarProps> = ({ active, setActive, ...props }) => {
  return (
    <>
      <div
        className={classNames(
          `relative h-full bg-slate-300 overflow-hidden grid content-start gap-0`,
          { "grid-cols-[0px_64px]": !active, "grid-cols-[196px_64px]": active },
          sidebarAnimation
        )}
        {...props}
      >
        {/* Column line */}
        {/* <div
          className="absolute h-full w-0 right-[64px] top-[64px] border-solid border-primary"
          {...props}
        ></div> */}
        {/* invisible */}
        <div></div>
        <HamburgerIcon
          className="w-6 inline-block m-auto"
          hamburgerColor="bg-primary-700"
          active={active}
          setActive={setActive}
          {...props}
        />
        {/* Barrier */}
        <div className="relative -top-1 col-start-1 col-span-2 border-none h-1 bg-primary-200 m-0"></div>

        <SidebarEntry
          label="label"
          icon={ChatMessageIcon}
          isExpanded={active}
          {...props}
        />
        <SidebarEntry
          label="label2"
          icon={TextFileLineIcon}
          isExpanded={active}
          {...props}
        />
      </div>
    </>
  );
};

export default Sidebar;
