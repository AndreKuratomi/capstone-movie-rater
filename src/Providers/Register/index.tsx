import { createContext, useContext, useState, ReactNode } from "react";
import api from "../../Services/api";

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
  category: string;
}

const RegisterContext = createContext<RegisterContextProps>(
  {} as RegisterContextProps
);

export const RegisterProvider = ({ children }: RegisterProviderProps) => {
  const [userName, setUserName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const token = JSON.parse(localStorage.getItem("@movies: token") || "null");

  const signUp = (data: IRegister) => {
    api
      .post("register/", data)
      .then((_) => "Cadastro realizado com sucesso!")
      .catch((_) => "Falha no cadastro!");
  };

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode<JwtPayload>(token);
      api
        .get(`users?id=${decoded.sub}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUserName(response.data[0].username);
          setCategory(response.data[0].select_Genre);
        })
        .catch((err) => console.log(err));
    }
  }, [token]);

  return (
    <RegisterContext.Provider value={{ signUp, userName, category }}>
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegister = () => useContext(RegisterContext);
