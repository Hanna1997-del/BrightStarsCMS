import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";
import ShowError from "./ShowError";

interface FormInputProps {
  name: string;
  label: string;
  value?: any;
  defaultValue?: any;
  className?: string;
  type?: string;
  placeHolderText?: string;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  showError?: boolean;
  min?: number;
}

const FormInput: React.FC<FormInputProps> = ({
  value,
  defaultValue,
  name,
  label,
  className,
  type = "text",
  placeHolderText = "",
  onFocus,
  onBlur,
  onChange,
  disabled = false,
  showError = false,
  ...rest
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const inputRegister = register(name, {
    valueAsNumber: type == "number",
    value,
  });
  return (
    <div className={cn("w-full h-max flex flex-col gap-3", className)}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        {...inputRegister}
        className={cn(
          `w-full rounded-lg border border-solid !border-grey-fade border-transparent bg-white px-5 py-4 font-roboto text-[16px] text-black outline-none focus:border-black disabled:border-none disabled:bg-grey-light lg:w-[400px] xl:w-full`,
          className,
          errors[name] && "!border-[#FF5454] focus:!border-[#FF5454]"
        )}
        placeholder={placeHolderText}
        onFocus={onFocus}
        onBlur={onBlur ? onBlur : inputRegister.onBlur}
        onChange={onChange ? onChange : inputRegister.onChange}
        value={value}
        disabled={disabled}
        autoComplete="off"
        {...rest}
      />
      <ShowError name={name} className="" />
    </div>
  );
};

export default FormInput;
