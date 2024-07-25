import { twMerge } from "tailwind-merge";

type TButtonProps = React.ComponentPropsWithoutRef<"button">;
const Button = ({ className, children, ...rest }: TButtonProps) => {
  return (
    <>
      <button
        className={twMerge(
          "w-[77px] h-[44px] text-sm text-white rounded-lg cursor-pointer",
          className
        )}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};
export default Button;
