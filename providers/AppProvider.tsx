import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface AppProviderProps {
    children: ReactNode | ReactNode[]
}

const AppContext = createContext({} as {
    mounted: boolean
})

const AppProvider: React.FC<AppProviderProps> = ({children}) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    },[])
    return ( 
        <AppContext.Provider value={{mounted}}>
            {children}
        </AppContext.Provider>
     );
}

export const useApp = () => {
    return useContext(AppContext)
}
 
export default AppProvider;