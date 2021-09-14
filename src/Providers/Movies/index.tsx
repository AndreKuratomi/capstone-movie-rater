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
export interface IMoviesList {
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
  DeleteFromFavorites: (movieId: number, token: string) => void;
  getFavorites: (user: number) => void;
  searchMovies: (searchText: string) => void;
  movies: IMoviesList[];
  favorites: IMoviesList[];
  searchedMovies: IMoviesList[];
  getSpecificMovie: (specifcMovie: IMoviesList) => void;
  aboutMovie: IMoviesList;
  AddToFavorites: (data: IMoviesList, token: string) => void;
  addReviews: (
    data: IMoviesList,
    textValue: string,
    token: string,
    id: number
  ) => void;
}

const MoviesContext = createContext({} as IMoviesContext);
export const MoviesProvider = ({ children }: IMovies) => {
  const TMDBapi =
    "https://api.themoviedb.org/3/search/movie?api_key=4b5de5fed14a8cc95ec876f973db1f9c&query=";

  const [movies, setMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [favorites, setFavorites] = useState<IMoviesList[]>([]);
  const [aboutMovie, setAboutMovie] = useState({});

  const { auth } = useAuth();

  const token = JSON.parse(localStorage.getItem("@movies: token") || "null");
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
  const getFavorites = (userId: number) => {
    api
      .get(`favorites?userId=${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setFavorites(response.data);
      });
  };
  const AddToFavorites = (data: IMoviesList, token: string) => {
    let isInFavorite = false;
    const decode = jwtDecode<JwtPayload>(token);
    delete data.id;
    const Addedmovie = {
      userId: Number(decode.sub),
      ...data,
    };
    favorites.map((movie) => {
      if (movie.title !== data.title) {
      } else {
        isInFavorite = true;
      }
    });
    if (!isInFavorite) {
      api
        .post("favorites", Addedmovie, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((_) => console.log("filme adicionado"));
    } else {
      console.log("filme ja adicionado");
    }
  };
  const DeleteFromFavorites = (movieId: number, token: string) => {
    console.log("entrou na funcão");
    api
      .delete(`favorites/${movieId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res, "deletou");
      })
      .catch((err) => console.log(err));
  };
  const searchMovies = (searchText: string) => {
    axios
      .get(TMDBapi + searchText)

      .then((response) => {
        setSearchedMovies(response.data.results);
      })
      .catch((err) => console.log("Grupo não podem ser carregados"));
  };

  const addReviews = (
    data: IMoviesList,
    textValue: string,
    token: string,
    id: number
  ) => {
    console.log(data);
    const movieReview = {
      review: [textValue],
      ...data,
    };
    api
      .put(`movies/${id}`, movieReview, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("funcionou");
      })
      .catch((err) => console.log("Review não podem ser carregados", err));
  };

  return (
    <MoviesContext.Provider
      value={{
        addReviews,
        DeleteFromFavorites,
        favorites,
        getFavorites,
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
