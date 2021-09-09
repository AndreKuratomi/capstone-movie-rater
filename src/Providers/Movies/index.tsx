import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";
import { ReactNode } from "react";
import { useAuth } from "../Auth";
interface IMovies {
  children: ReactNode;
}

interface IMoviesContext {
  getMovies: (token: IMoviesContext) => void;
  searchMovies: (token: IMoviesContext) => void;
}

const MoviesContext = createContext({} as IMoviesContext);
export const MoviesProvider = ({ children }: IMovies) => {
  const { auth } = useAuth();
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState({});

  const getMovies = (token: IMoviesContext) => {
    api
      .get("movies", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setMovies(response.data);
      })
      .catch((err) => console.log("Grupos não podem ser carregados"));
  };

  const searchMovies = (auth: IMoviesContext) => {
    api
      .get("search/", {
        headers: { Authorization: `Bearer ${auth}` },
      })

      .then((response) => {
        setSearch(response.data);
      })
      .catch((err) => console.log("Grupo não podem ser carregados"));
  };

  return (
    <MoviesContext.Provider value={{ searchMovies, getMovies }}>
      {children}
    </MoviesContext.Provider>
  );
};
export const useMovies = () => useContext(MoviesContext);
