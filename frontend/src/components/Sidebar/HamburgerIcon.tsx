import classNames from "classnames";
import { useRef } from "react";

type HamburgerIconProps = {
  active: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const HamburgerIcon: React.FunctionComponent<HamburgerIconProps> = ({
  active,
  ...props
}: HamburgerIconProps) => {
  const self = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={self}
      className={classNames(
        "flex flex-col justify-center items-center w-full aspect-square"
      )}
      {...props}
    >
      <span
        className={classNames(
          `block bg-white h-1 my-1 rounded-full transition-all duration-200 ease-in-out`,
          { [`rotate-45 origin-top-left translate-x-1`]: active }
        )}
      ></span>
      <span
        className={classNames(
          `block bg-white h-1 my-1 rounded-full transition-all duration-200 ease-in-out`,
          { "opacity-0": active }
        )}
      ></span>
      <span
        className={classNames(
          `block bg-white h-1 my-1 rounded-full transition-all duration-200 ease-in-out`,
          { [`-rotate-45 origin-bottom-left translate-x-1`]: active }
        )}
      ></span>
    </div>
  );
};
