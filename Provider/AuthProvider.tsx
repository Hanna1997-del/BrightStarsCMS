import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface AuthProviderProps {
    children: ReactNode | ReactNode[]
}
 export const AuthContext = createContext({} as {
    close: boolean
    setClose: Dispatch<SetStateAction<boolean>>
 })
const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const[close,setClose] = useState(false);
    return ( 
        <AuthContext.Provider value={{close,setClose}}>
            {children}
        </AuthContext.Provider>
     );
}
 
export default AuthProvider;