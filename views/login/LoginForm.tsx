import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import loginSchema from "@/schema/login.schema";
import Link from "next/link";
import useLogin from "./useLogin";
import Form from "@/form/Form";
import FormInput from "@/form/FormInput";
import SubmitButton from "@/form/SubmitButton";

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  const { onSubmit } = useLogin();
  return (
    <div className={cn("flex justify-center items-center", "w-full h-screen")}>
      <Form
        onSubmit={onSubmit}
        schema={loginSchema}
        className={cn("w-[70%] h-max")}
      >
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-2xl text-black">Login</h1>

          <FormInput name="email" type="email" label="Email" />

          <FormInput name="password" type="password" label="Password" />


          <div className="flex justify-end">
            <SubmitButton />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
