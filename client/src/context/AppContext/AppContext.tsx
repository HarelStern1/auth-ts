import { FC, useState, useContext, createContext } from "react";
import { AppContextType } from "./index";

export const AppContext = createContext<AppContextType | null>(null);

const AppProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const [accessToken, setAccessToken] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  return (
    <AppContext.Provider value={{ accessToken, setAccessToken, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("useAppContext must be used within a AppContext");
  }
  return context;
};

export default AppProvider;
