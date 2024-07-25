import { useId } from "react";
import { twMerge } from "tailwind-merge";

type TCheckBoxProps = React.ComponentPropsWithoutRef<"input">;
const CheckBox = ({ children, ...rest }: TCheckBoxProps) => {
  const uuid = useId();
  return (
    <>
      <div className="flex items-center gap-2 relative">
        <input
          type="checkbox"
          id={uuid}
          className={twMerge(
            `appearance-none w-5 h-5 border border-[#4F4F4F] rounded-[5px] bg-white checked:bg-[#4f4f4f] peer/agree`,
            `checked:bg-[url('./icons.svg')] checked:bg-no-repeat checked:bg-center`
          )}
          {...rest}
        />
        <label htmlFor={uuid} className="text-sm inter">
          {children}
        </label>
      </div>
    </>
  );
};
export default CheckBox;
