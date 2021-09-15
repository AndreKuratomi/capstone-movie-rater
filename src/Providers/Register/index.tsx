import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import api from "../../Services/api";
import jwtDecode, { JwtPayload } from "jwt-decode";

interface IRegister {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface RegisterProviderProps {
  children: ReactNode;
}

interface RegisterContextProps {
  signUp: (data: IRegister) => void;
}

const RegisterContext = createContext<RegisterContextProps>(
  {} as RegisterContextProps
);

export const RegisterProvider = ({ children }: RegisterProviderProps) => {
  const [userName, setUserName] = useState("");
  const token =
    JSON.parse(localStorage.getItem("@movies: token") || "null") || false;
  const signUp = (data: IRegister) => {
    api
      .post("register/", data)
      .then((_) => "Cadastro realizado com sucesso!")
      .catch((_) => "Falha no cadastro!");
  };

  return (
    <RegisterContext.Provider value={{ signUp }}>
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegister = () => useContext(RegisterContext);
