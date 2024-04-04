import classNames from "classnames";
import { useRef } from "react";

type HamburgerIconProps = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  hamburgerColor: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const HamburgerIcon: React.FunctionComponent<HamburgerIconProps> = ({
  active,
  setActive,
  hamburgerColor,
  ...props
}: HamburgerIconProps) => {
  const self = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`m-1 size-18 flex items-center justify-center aspect-square cursor-pointer hover:bg-primary-200 rounded-full`}
      onClick={() => setActive((active) => !active)}
      onKeyDown={(e) => e.code == "Enter" && setActive((active) => !active)}
      tabIndex={0}
    >
      <div
        ref={self}
        className={classNames(
          "flex flex-col justify-center items-center w-full aspect-square"
        )}
        {...props}
      >
        <span
          className={classNames(
            `block ${hamburgerColor} h-1 my-1 rounded-full transition-all duration-200 ease-in-out`,
            { [`rotate-45 origin-top-left translate-x-1`]: active }
          )}
        ></span>
        <span
          className={classNames(
            `block ${hamburgerColor} h-1 my-1 rounded-full transition-all duration-200 ease-in-out`,
            { "opacity-0": active }
          )}
        ></span>
        <span
          className={classNames(
            `block ${hamburgerColor} h-1 my-1 rounded-full transition-all duration-200 ease-in-out`,
            { [`-rotate-45 origin-bottom-left translate-x-1`]: active }
          )}
        ></span>
      </div>
    </div>
  );
};
