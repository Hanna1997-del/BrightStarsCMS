import { cn } from "@/lib/utils";
import LoginForm from "@/views/login/LoginForm";
import LogoSection from "@/views/login/LogoSection";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return (
    <div className={cn("grid grid-cols-2", "w-screen h-screen bg-gray")}>
      <LogoSection />
      <LoginForm />
    </div>
  );
};

export default Login;
