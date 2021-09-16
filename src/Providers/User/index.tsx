import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import api from "../../Services/api";
import jwtDecode, { JwtPayload } from "jwt-decode";
interface UserProviderProps {
  children: ReactNode;
}

interface UserContextProps {
  userName: string;
  category: string;
}

const UserContext = createContext<UserContextProps>(
  {} as UserContextProps
);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [userName, setUserName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const token = JSON.parse(localStorage.getItem("@movies: token") || "null");

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode<JwtPayload>(token);
      api
        .get(`users?id=${decoded.sub}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUserName(response.data[0].username);
          setCategory(response.data[0].selectGenre);
        })
        .catch((err) => console.log(err));
    }
  }, [token]);

  return (
    <UserContext.Provider value={{ userName, category }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
