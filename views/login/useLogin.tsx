import { OnSubmit } from "@/form/types";
import { AuthContext, useAuth} from "@/providers/AuthProvider";
import { useRouter } from "next/router";
import { useContext } from "react";


interface useLoginProps {
    
}
 
const useLogin = () => {
    const router = useRouter();
    const {setLogin} = useAuth();
    const onSubmit:OnSubmit = async (values,setFormSubmitting) => {
        const {email, password} = values;

        if(email == "admin@gmail.com" && password == "Admin123@"){
            setLogin(true);
            router.push("/");
        }else{
            alert("login fail")
        }

        setFormSubmitting(false);
        
    }

    return {
        onSubmit
    }
}
 
export default useLogin;