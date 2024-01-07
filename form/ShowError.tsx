import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";

interface ShowErrorProps {
  name: string;
  className?: string;
  width?: string;
}

const ShowError: React.FC<ShowErrorProps> = ({ name, className, width }) => {
  const {
    formState: { errors },
  } = useFormContext();
  return (
    <div
      className={cn(
        "flex items-center gap-[5px] break-words font-roboto font-normal w-max bg-[#FFBEBE] pl-[4px] pr-[6px] py-[3.5px] text-black rounded-[4px]",
        className,
        !errors[name] && "absolute m-0 h-0 p-0 opacity-0 pointer-events-none"
      )}
      style={{
        width: width ? width : "max-content" 
      }}
    >
      {errors[name] && (
        <>
          <div className="text-black font-robot font-normal text-[14px]">
            <p>{errors[name]?.message?.toString()}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default ShowError;
