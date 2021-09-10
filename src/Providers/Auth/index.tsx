import { Dispatch, SetStateAction } from "react";
import { ReactNode } from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  auth: string;
  setAuth: Dispatch<SetStateAction<string>>;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const token =
    JSON.parse(localStorage.getItem("@movies:token") || "null") || false;
  const [auth, setAuth] = useState(token);
  useEffect(() => {
    if (token !== false) {
      return setAuth(true);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
