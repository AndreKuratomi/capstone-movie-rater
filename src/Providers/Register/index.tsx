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
  userName: string;
}

const RegisterContext = createContext<RegisterContextProps>(
  {} as RegisterContextProps
);

export const RegisterProvider = ({ children }: RegisterProviderProps) => {
  const [userName, setUserName] = useState<string>('')
  const token =
    JSON.parse(localStorage.getItem("@movies: token") || "null")

  const signUp = (data: IRegister) => {
    api
      .post("register/", data)
      .then((_) => "Cadastro realizado com sucesso!")
      .catch((_) => "Falha no cadastro!");
  };
 
  useEffect(() => {
 if( token ){
  const decoded = jwtDecode<JwtPayload>(token);
  api
      .get(`users?id=${decoded.sub}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setUserName(response.data[0].username);
      })
      .catch((err) =>console.log(err))
}
  }, [token]);

  return (
    <RegisterContext.Provider value={{ signUp, userName }}>
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegister = () => useContext(RegisterContext);
