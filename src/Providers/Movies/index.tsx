import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";
import { ReactNode } from "react";
import { useAuth } from "../Auth";

import jwtDecode, { JwtPayload } from "jwt-decode";

import axios from "axios";
import { jsx } from "@emotion/react";
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
  review?: string[];
}

interface IMoviesContext {
  getMovies: (page: number) => void;
  setMovies: any;
  searchMovies: (searchText: string) => void;
  movies: IMoviesList[];
  searchedMovies: IMoviesList[];
  getSpecificMovie: (specifcMovie: IMoviesList) => void;
  aboutMovie: IMoviesList;
  AddToFavorites: (data: IMoviesList, token: string) => void;
}

const MoviesContext = createContext({} as IMoviesContext);
export const MoviesProvider = ({ children }: IMovies) => {
  const TMDBapi =
    "https://api.themoviedb.org/3/search/movie?api_key=4b5de5fed14a8cc95ec876f973db1f9c&query=";

  const [movies, setMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [aboutMovie, setAboutMovie] = useState({});

  const getMovies = (page: number) => {
    api
      .get(`movies?page=${page}`)
      .then((response) => {
        console.log(response.data[0].results);
        setMovies(response.data[0].results);
      })
      .catch((err) => console.log("Grupos não podem ser carregados"));
  };
  const getSpecificMovie = (specifcMovie: IMoviesList) => {
    setAboutMovie(specifcMovie);
  };
  const AddToFavorites = (data: IMoviesList, token: string) => {
    const decode = jwtDecode<JwtPayload>(token);
    const Addedmovie = {
      userId: Number(decode.sub),
      adult: data.adult,
      backdrop_path: data.backdrop_path,
      genre_ids: data.genre_ids,
      original_language: data.original_language,
      original_title: data.original_title,
      overview: data.overview,
      popularity: data.popularity,
      poster_path: data.poster_path,
      release_date: data.release_date,
      title: data.title,
      video: data.video,
      vote_average: data.vote_average,
      vote_count: data.vote_count,
      id: data.id,
    };

    api
      .post("favorites", Addedmovie)
      .then((_) => console.log("filme adicionado"));
  };
  const searchMovies = (searchText: string) => {
    axios
      .get(TMDBapi + searchText)

      .then((response) => {
        setSearchedMovies(response.data.results);
      })
      .catch((err) => console.log("Grupo não podem ser carregados"));
  };

  return (
    <MoviesContext.Provider
      value={{
        searchMovies,
        getMovies,
        movies,
        setMovies,
        searchedMovies,
        getSpecificMovie,
        aboutMovie,
        AddToFavorites,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
export const useMovies = () => useContext(MoviesContext);
