import { useRouter } from "next/router";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import { useApp } from "./AppProvider";

interface AuthProviderProps {
    children: ReactNode | ReactNode[]
}
 export const AuthContext = createContext({} as {
    login: boolean;
    setLogin: Dispatch<SetStateAction<boolean>>;
    requiredAuth: () => void;
 })
const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const[login,setLogin] = useState(false);
    const router = useRouter();
    const {mounted} = useApp();
    const requiredAuth = () => {
        if(!login && mounted){
            router.push("/login");
        }
    }
    return ( 
        <AuthContext.Provider value={{login,setLogin, requiredAuth}}>
            {children}
        </AuthContext.Provider>
     );
}

export const useAuth = () => {
    return useContext(AuthContext);
}
 
export default AuthProvider;