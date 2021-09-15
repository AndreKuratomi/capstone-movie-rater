import { Heading, Flex, useMediaQuery } from "@chakra-ui/react";
import MovieCard from "../MovieCard";
import BoxContainer from "../BoxContainer";
import MovieContainer from "../MovieContainer";
import { useMovies } from "../../Providers/Movies/index";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import jwtDecode, { JwtPayload } from "jwt-decode";
import MenuMobile from "../MenuMobile";

const DashboardComponent = () => {
  const history = useHistory();
  const {
    getMovies,
    movies,
    getSpecificMovie,
    AddToFavorites,
    favorites,
    getFavorites,
    DeleteFromFavorites,
  } = useMovies();
  const token = JSON.parse(localStorage.getItem("@movies: token") || "null");
  const UpMovies = movies.filter((movie) => {
    const date = movie.release_date?.replaceAll("-", "");
    return Number(date) > 202109;
  });
  const [count, setCount] = useState<number>(Math.floor(Math.random() * 20));
  const [page, setPage] = useState<number>(1);
  const imgurl = "https://image.tmdb.org/t/p/original";

  const decode = jwtDecode<JwtPayload>(token);
  useEffect(() => {
    if (movies.length < 1) {
      getMovies(page);
    }
    getFavorites(Number(decode.sub));
  }, [getFavorites]);

  const [mobileVersion] = useMediaQuery("(max-width: 500px)");

  return (
    <Flex
      w="85%"
      h="100vh"
      justifyContent="flex-end"
      alignItems="center"
      flexDirection="column"
    >
      {/* {mobileVersion && <MenuMobile />} */}
      <Heading w="76%" fontWeight="400" mb="3px" color="fontColor.white100">
        Up coming Movies
      </Heading>
      <MovieContainer type="column">
        {UpMovies.length > 1 ? (
          <BoxContainer
            increase={() =>
              count < UpMovies.length ? setCount(count + 1) : setCount(count)
            }
            decrease={() => (count > 1 ? setCount(count - 1) : setCount(count))}
            type="Upcomming"
            bgImg={imgurl + UpMovies[count].backdrop_path}
          >
            <MovieCard
              AddToFavorite={() => AddToFavorites(UpMovies[count], token)}
              onClick={() => {
                getSpecificMovie(UpMovies[count]);
                history.push("/aboutmovie");
              }}
              type="upComing"
              release_date={UpMovies[count].release_date}
              title={UpMovies[count].title}
              popularity={UpMovies[count].popularity}
              poster_path={imgurl + UpMovies[count].poster_path}
            />
          </BoxContainer>
        ) : null}

        <Heading
          w="76%"
          fontSize="20px"
          fontWeight="400"
          color="fontColor.white100"
        >
          Browse Movies
        </Heading>
        <BoxContainer>
          {movies?.map((movie) => (
            <MovieCard
              AddToFavorite={() => AddToFavorites(movie, token)}
              onClick={() => {
                getSpecificMovie(movie);
                history.push("/aboutmovie");
              }}
              title={movie.title}
              poster_path={imgurl + movie.poster_path}
            />
          ))}
        </BoxContainer>
        <Heading
          w="76%"
          fontSize="20px"
          fontWeight="400"
          color="fontColor.white100"
        >
          My movies
        </Heading>
        <BoxContainer>
          {favorites.map((movie) => (
            <MovieCard
              getSpecificMovie={() => {
                getSpecificMovie(movie);
                history.push("/aboutmovie");
              }}
              onClick={() => movie.id && DeleteFromFavorites(movie.id, token)}
              type="favorites"
              title={movie.title}
              poster_path={imgurl + movie.poster_path}
            />
          ))}
        </BoxContainer>
      </MovieContainer>
    </Flex>
  );
};
export default DashboardComponent;
