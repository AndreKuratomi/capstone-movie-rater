import { createContext, useState, useContext, useEffect } from "react";
import apifake from "../../Services/apifake";
import jwtDecode from "jwt-decode";

import { ReactNode } from "react";

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextProps {
  signIn: (user: IUser) => void;
}
interface IUser {
  email: string;
  password: string;
  favorites: string;
  genre: string;
  userName: string;
  userId: string;
  decoderUser: string;
}
const UserContext = createContext<UserContextProps>({} as UserContextProps);

export const UserProvider = ({ children }: UserProviderProps) => {
  const token =
    JSON.parse(localStorage.getItem("@movies:token") || "null") || false;

  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState<string>("");
  const [email, setEmail] = useState<IUser>();
  const [genre, setGenre] = useState("");
  const [favorites, setFavorites] = useState({});

  const signIn = (data: IUser) => {
    apifake
      .post("/login/", data)
      .then((response) => {
        const { access } = response.data;
        const decoded = jwtDecode(access);
      })
      .catch((err) =>
        console.log(
          "Não foi possível fazer o login. Verifique dados informados"
        )
      );
  };

  const register = (data: IUser) => {
    const user = email;

    apifake
      .post("/register/", user)
      .then((_) => {})
      .catch((err) => {
        console.log("Erro ao criar a conta.");
      });
  };

  return (
    <UserContext.Provider value={{ signIn }}>{children}</UserContext.Provider>
  );
};
export const useUser = () => useContext(UserContext);
