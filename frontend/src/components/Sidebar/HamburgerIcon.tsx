import classNames from "classnames";

type HamburgerIconProps = {
  active: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const HamburgerIcon: React.FunctionComponent<HamburgerIconProps> = ({
  active,
  ...props
}: HamburgerIconProps) => {
  return (
    <div
      className={classNames(
        "flex flex-col justify-center items-center w-full aspect-square gap-3"
      )}
      {...props}
    >
      <span
        className={classNames(
          "block bg-white h-1 my-1 rounded-full transition-all duration-200 ease-in-out",
          { "rotate-45 origin-top-left": active }
        )}
      ></span>
      <span
        className={classNames(
          "block bg-white h-1 my-1 rounded-full transition-all duration-200 ease-in-out",
          { "opacity-0": active }
        )}
      ></span>
      <span
        className={classNames(
          "block bg-white h-1 my-1 rounded-full transition-all duration-200 ease-in-out",
          { "-rotate-45 origin-bottom-left": active }
        )}
      ></span>
    </div>
  );
};
