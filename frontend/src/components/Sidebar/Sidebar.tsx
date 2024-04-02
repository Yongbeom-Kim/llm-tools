import classNames from "classnames";
import { HamburgerIcon } from "./HamburgerIcon";

type SidebarProps = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
} & React.HTMLAttributes<HTMLDivElement>;
const Sidebar: React.FC<SidebarProps> = ({ active, setActive }) => {
  return (
    <>
      <div
        className={classNames(
          `h-full bg-very-dark-primary transition-all duration-300 ease-in-out w-16`,
          { "w-16": !active, "w-64": active }
        )}
      >
        <HamburgerIcon
          className="w-6 inline-block m-auto"
          hamburgerColor="bg-light-primary"
          active={active}
          setActive={setActive}
        />
      </div>
    </>
  );
};

export default Sidebar;
