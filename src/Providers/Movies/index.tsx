/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";
import { ReactNode } from "react";
import { useAuth } from "../Auth";

import jwtDecode, { JwtPayload } from "jwt-decode";

import axios from "axios";
import { jsx } from "@emotion/react";
import { useToast } from "@chakra-ui/react";
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
interface IReview {
  movieId: number;
  comment: string;
  userId: number;
}

interface IMoviesContext {
  review: IReview[];
  getMovies: (page: number) => void;
  setMovies: any;

  DeleteFromFavorites: (movieId: number, token: string) => void;
  getReview: (movieId: number, token: string) => void;
  getFavorites: (user: number) => void;
  searchMovies: (searchText: string) => void;
  movies: IMoviesList[];

  favorites: IMoviesList[];
  searchedMovies: IMoviesList[];
  getSpecificMovie: (specifcMovie: IMoviesList) => void;
  aboutMovie: IMoviesList;
  AddToFavorites: (data: IMoviesList, token: string) => void;
  addReviews: (
    movieId: number,
    comment: string,
    userId: number,
    token: string
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
  const [review, setReview] = useState([]);
  const { auth } = useAuth();
  const toast = useToast();

  const token = JSON.parse(localStorage.getItem("@movies: token") || "null");

  const getMoviesFailToast = () => {
    toast({
      description: "Verificar conexão",
      duration: 5000,
      position: "top",
      status: "error",
      title: "Ocorreu um erro",
    });
  };
  const getMovies = (page: number) => {
    api
      .get(`movies?page=${page}`)
      .then((response) => {
        setMovies(response.data[0].results);
      })
      .catch((_) => getMoviesFailToast());
  };

  const getSpecificMovie = (specifcMovie: IMoviesList) => {
    setAboutMovie(specifcMovie);
  };

  const getFavoritesFailToast = () => {
    toast({
      description: "",
      duration: 5000,
      position: "top",
      status: "error",
      title: "Falha de conexão",
    });
  };
  const getFavorites = (userId: number) => {
    api
      .get(`favorites?userId=${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setFavorites(response.data);
      })
      .catch((_) => getFavoritesFailToast());
  };

  const addFilmSuccessToast = () => {
    toast({
      description: "",
      duration: 5000,
      position: "top",
      status: "success",
      title: "Filme adicionado!",
    });
  };
  const addFilmFailToast = () => {
    toast({
      description: "",
      duration: 5000,
      position: "top",
      status: "error",
      title: "Filme já adicionado!",
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
        .then((_) => addFilmSuccessToast())
        .catch((_) => addFilmFailToast());
    }
  };

  const deleteFilmSuccessToast = () => {
    toast({
      description: "",
      duration: 5000,
      position: "top",
      status: "success",
      title: "Filme deletado!",
    });
  };
  const deleteFilmFailToast = () => {
    toast({
      description: "Verificar conexão.",
      duration: 5000,
      position: "top",
      status: "error",
      title: "Falha ao deletar!",
    });
  };
  const DeleteFromFavorites = (movieId: number, token: string) => {
    console.log("entrou na funcão");
    api
      .delete(`favorites/${movieId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        deleteFilmSuccessToast();
      })
      .catch((_) => {
        deleteFilmFailToast();
      });
  };

  const searchMoviesFailToast = () => {
    toast({
      description: "Verifique o nome informado.",
      duration: 5000,
      position: "top",
      status: "error",
      title: "Não há nenhum filme correspondente!",
    });
  };
  const searchMovies = (searchText: string) => {
    axios
      .get(TMDBapi + searchText)
      .then((response) => {
        setSearchedMovies(response.data.results);
      })
      .catch((_) => searchMoviesFailToast());
    if (searchedMovies.length === 0) {
      searchMoviesFailToast();
    }
  };

  const getReviewFailToast = () => {
    toast({
      description: "",
      duration: 5000,
      position: "top",
      status: "error",
      title: "Erro de conexão",
    });
  };
  const getReview = (movieId: number, token: string) => {
    api
      .get(`reviews?movieId=${movieId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setReview(response.data);
      })
      .catch((_) => getReviewFailToast());
  };

  const addReviewsSuccessToast = () => {
    toast({
      description: "",
      duration: 5000,
      position: "top",
      status: "success",
      title: "Review carregada!",
    });
  };
  const addReviewsFailToast = () => {
    toast({
      description: "Verificar conexão",
      duration: 5000,
      position: "top",
      status: "error",
      title: "Review não pode ser carregada!",
    });
  };
  const addReviews = (
    movieId: number,
    comment: string,
    userId: number,
    token: string
  ) => {
    const movieReview = {
      movieId: movieId,
      comment: comment,
      userId: userId,
    };
    api
      .post(`reviews/`, movieReview, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        addReviewsSuccessToast();
      })
      .catch((_) => addReviewsFailToast());
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
        getReview,
        review,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
export const useMovies = () => useContext(MoviesContext);
