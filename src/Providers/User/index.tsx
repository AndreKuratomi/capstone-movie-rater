import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import api from "../../Services/api";
import jwtDecode, { JwtPayload } from "jwt-decode";
import { Dispatch, SetStateAction } from "react";
interface UserProviderProps {
  children: ReactNode;
}
interface IUser {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  selectGenre: string;
  id: number;
}
interface UserContextProps {
  userName: string;
  category: string;
  updateCategory: (data: IUser) => void;
  setUserName: Dispatch<SetStateAction<string>>;
  setCategory: Dispatch<SetStateAction<string>>;
}
const UserContext = createContext<UserContextProps>({} as UserContextProps);
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
  }, [token, userName, category]);
  const updateCategory = (data: IUser) => {
    const { username, selectGenre } = data;
    const decoded = jwtDecode<JwtPayload>(token);
    api
      .patch(
        `users/${decoded.sub}/`,
        {
          username: username,
          selectGenre: selectGenre,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((err) => {
        setUserName(username);
        setCategory(selectGenre);
      });
  };
  return (
    <UserContext.Provider
      value={{ userName, category, updateCategory, setUserName, setCategory }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => useContext(UserContext);
