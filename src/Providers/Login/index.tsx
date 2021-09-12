import { createContext, useContext, ReactNode } from "react";
import { useAuth } from "../Auth";
import jwtDecode from "jwt-decode";
import api from "../../Services/api";

interface LoginProviderProps {
  children: ReactNode;
}
interface ILogin {
  username: string;
  password: string;
}
interface LoginContextProps {
  signIn: (data: ILogin) => void;
}

const LoginContext = createContext<LoginContextProps>({} as LoginContextProps);

export const LoginProvider = ({ children }: LoginProviderProps) => {
  const { auth } = useAuth();
  const token =
    JSON.parse(localStorage.getItem("@movies:token") || "null") || false;

  const signIn = (data: ILogin) => {
    api
      .post("/login/", data)
      .then((response) => {
        const { access } = response.data;
        const decoded = jwtDecode(access);
        // "Login feito com sucesso!";
      })
      .catch(
        (_) => "Não foi possível fazer o login. Verifique dados informados"
      );
  };

  return (
    <LoginContext.Provider value={{ signIn }}>{children}</LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
