import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type TInputProps = React.ComponentPropsWithRef<"input">;

const Input = forwardRef<HTMLInputElement, TInputProps>(
  ({ className, ...rest }, ref) => {
    return (
      <>
        <input
          ref={ref}
          className={twMerge(
            `w-[240px] h-[44px] rounded-lg placeholder:text-[#acacac] border border-[#4F4F4F] py-[13.5px] px-[16px] text-sm outline-none`,
            className
          )}
          {...rest}
        />
      </>
    );
  }
);
export default Input;
