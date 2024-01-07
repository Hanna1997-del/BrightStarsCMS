import Image from "@/components/Image";
import { cn } from "@/lib/utils";

interface LogoSectionProps {}

const LogoSection: React.FC<LogoSectionProps> = () => {
  return (
    <div
      className={cn(
        "w-full h-screen bg-primary",
        "flex justify-center items-center",
      )}
    >
      <div className="flex-column items-center w-max h-max gap-3">
        <div className="img-container w-[10rem]">
          <Image
            src="/images/bright-stars-logo-circle.png"
            alt="bright stars logo"
          />
        </div>
        <h1 className="text-white font-bold text-2xl w-max">Bright Stars</h1>
      </div>
    </div>
  );
};

export default LogoSection;
