import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";
import { ReactNode } from "react";
import { useAuth } from "../Auth";
import { Dispatch, SetStateAction } from "react";
interface IMovies {
  children: ReactNode;
}
interface IMoviesList {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  id?: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

interface IMoviesContext {
  getMovies: () => void;
  setMovies: any;
  searchMovies: (token: IMoviesContext) => void;
  movies: IMoviesList[];
}

const MoviesContext = createContext({} as IMoviesContext);
export const MoviesProvider = ({ children }: IMovies) => {
  const { auth } = useAuth();
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState({});

  const getMovies = () => {
    api
      .get("movies?page=2")
      .then((response) => {
        console.log(response.data[0].results);
        setMovies(response.data[0].results);
        console.log(movies);
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
    <MoviesContext.Provider
      value={{ searchMovies, getMovies, movies, setMovies }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
export const useMovies = () => useContext(MoviesContext);
