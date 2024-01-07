import { cn } from "@/lib/utils";
import { LucideLoader2 } from "lucide-react";
import { useFormContext } from "./Form";

interface SubmitButtonProps {}

const SubmitButton: React.FC<SubmitButtonProps> = () => {
  const {
    formState: { isSubmitting },
    isFormSubmitting,
  } = useFormContext();
  return (
    <button
      type="submit"
      className={cn(
        "flex gap-2 items-center",
        " text-white",
        "font-bold text-lg w-max",
        "px-3 py-2 rounded-lg",
        isFormSubmitting ? "bg-black/50" : "bg-secondary"
      )}
      disabled={isFormSubmitting}
    >
      {isFormSubmitting && (
        <div className="animate-spin">
          <LucideLoader2 />
        </div>
      )}
      Login
    </button>
  );
};

export default SubmitButton;
