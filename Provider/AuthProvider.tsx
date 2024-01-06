import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface AuthProviderProps {
    children: ReactNode | ReactNode[]
}
 export const AuthContext = createContext({} as {
    login: boolean
    setLogin: Dispatch<SetStateAction<boolean>>
 })
const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const[login,setLogin] = useState(false);
    return ( 
        <AuthContext.Provider value={{login,setLogin}}>
            {children}
        </AuthContext.Provider>
     );
}
 
export default AuthProvider;