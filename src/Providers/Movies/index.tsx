import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";
import { ReactNode } from "react";

interface IMovies {
  children: ReactNode;
}

interface IMoviesContext {
  token: string;
  getMovies: (token: IMoviesContext) => void;
  searchMovies: (token: IMoviesContext) => void;
}

const MoviesContext = createContext({} as IMoviesContext);
export const MoviesProvider = ({ children }: IMovies) => {
  const [token] =
    JSON.parse(localStorage.getItem("@movies:token") || "null") || false;
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState({});

  const getMovies = (token: IMoviesContext) => {
    api
      .get("discover/movie?page=2&api_key=4b5de5fed14a8cc95ec876f973db1f9c", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setMovies(response.data);
      })
      .catch((err) => console.log("Grupos não podem ser carregados"));
  };

  const searchMovies = (token: IMoviesContext) => {
    api
      .get("search/", {
        headers: { Authorization: `Bearer ${token}` },
      })

      .then((response) => {
        setSearch(response.data);
      })
      .catch((err) => console.log("Grupo não podem ser carregados"));
  };

  return (
    <MoviesContext.Provider value={{ searchMovies, getMovies, token }}>
      {children}
    </MoviesContext.Provider>
  );
};
export const useMovies = () => useContext(MoviesContext);
