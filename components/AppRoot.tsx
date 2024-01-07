import AppProvider from "@/providers/AppProvider";
import AuthProvider from "@/providers/AuthProvider";
import { ReactNode } from "react";

interface AppRootProps {
  children: ReactNode | ReactNode[];
}

const AppRoot: React.FC<AppRootProps> = ({ children }) => {
  return (
    <AppProvider>
      <AuthProvider>{children}</AuthProvider>
    </AppProvider>
  );
};

export default AppRoot;
