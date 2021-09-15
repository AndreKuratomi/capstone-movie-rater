import { createContext, useContext, ReactNode } from "react";
import { useAuth } from "../Auth";
import jwtDecode, { JwtPayload } from "jwt-decode";
import api from "../../Services/api";
import { useHistory } from "react-router-dom";

interface LoginProviderProps {
  children: ReactNode;
}
export interface ILogin {
  username: string;
  password: string;
}
interface LoginContextProps {
  signIn: (data: ILogin) => void;
}

const LoginContext = createContext<LoginContextProps>({} as LoginContextProps);

export const LoginProvider = ({ children }: LoginProviderProps) => {
  const { setAuth } = useAuth();
  const history = useHistory();
  const signIn = (data: ILogin) => {
    api
      .post("login", data)
      .then((response) => {
        const { accessToken } = response.data;
        const decoded = jwtDecode<JwtPayload>(accessToken);
        setAuth(accessToken);
        // "Login feito com sucesso!";
        history.push("/dashboard", { user: decoded.sub });
        localStorage.setItem("@movies: token", JSON.stringify(accessToken));
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
