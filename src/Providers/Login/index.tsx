import { createContext, useContext, ReactNode } from "react";
import { useAuth } from "../Auth";
import jwtDecode from "jwt-decode";
import api from "../../Services/api";
import { useHistory } from "react-router-dom";

interface LoginProviderProps {
  children: ReactNode;
}
interface ILogin {
  username: string;
  password: string;
  sub: string;
}
interface LoginContextProps {
  signIn: (data: ILogin) => void;
}

const LoginContext = createContext<LoginContextProps>({} as LoginContextProps);

export const LoginProvider = ({ children }: LoginProviderProps) => {
  const { auth, setAuth } = useAuth();
  const history = useHistory();
  const signIn = (data: ILogin) => {
    api
      .post("login/", data)
      .then((response) => {
        const { access } = response.data;
        const decoded = jwtDecode(access);
        setAuth(access);
        // "Login feito com sucesso!";
        history.push("/dashboard", { user: decoded.sub });
        localStorage.setItem("@movies: token", JSON.stringify(access));
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