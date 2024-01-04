import { ReactNode, createContext } from "react";

interface AuthProviderProps {
    children: ReactNode | ReactNode[]
}
 export const AuthContext = createContext({} as {

 })
const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    return ( 
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
     );
}
 
export default AuthProvider;