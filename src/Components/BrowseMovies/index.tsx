import MovieContainer from "../MovieContainer";
import MovieCard from "../MovieCard";
import { Flex, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import BoxContainer from "../BoxContainer";
import { Input } from "@chakra-ui/react";
import { useMovies } from "../../Providers/Movies";
import { useHistory } from "react-router";
import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";

const BrowseMovies = () => {
  const history = useHistory();
  const { getMovies, movies, searchMovies, searchedMovies, getSpecificMovie } =
    useMovies();
  const [page, setPage] = useState<number>(1);
  const [text, setText] = useState<string>("");
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const imgurl = "https://image.tmdb.org/t/p/original";
  const handleSearch = () => {
    searchMovies(text);
    setIsSearch(true);
  };

  useEffect(() => {
    if (movies.length < 1) {
      getMovies(page);
    }
    if (text === "") {
      setIsSearch(false);
    }

    console.log(searchedMovies);
  }, [
    movies,
    getMovies,
    page,
    searchedMovies,
    text,
    isSearch,
    setText,
    setIsSearch,
    searchMovies.length,
  ]);
  console.log(movies);
  return (
    <Flex
      w="85%"
      h="100vh"
      justifyContent="flex-end"
      alignItems="center"
      flexDirection="column"
    >
      <MovieContainer>
        <Flex w="100%" mb="25px" justifyContent="flex-end">
          <Input
            onChange={(e) => setText(e.target.value)}
            w="60%"
            color="fontColor.pinkLight"
            borderColor="fontColor.black800"
            placeholder="Search Movie"
            bgColor="brown.dark"
          />
          <hr />
          <Button
            hover="fontColor.black800"
            bgColor="brown.dark"
            color="fontColor.pinkLight"
            onClick={handleSearch}
          >
            <BsSearch />
          </Button>
        </Flex>
        <Heading
          fontSize="25px"
          w="76%"
          fontWeight="400"
          mb="3px"
          color="fontColor.pinkLight"
        >
          Browse Movies
        </Heading>
        <BoxContainer type="Browse">
          {isSearch
            ? searchedMovies.map((movie) => (
                <MovieCard
                  onClick={() => {
                    getSpecificMovie(movie);
                    history.push("/aboutmovie");
                  }}
                  release_date={movie.release_date}
                  popularity={movie.popularity}
                  title={movie.original_title}
                  poster_path={imgurl + movie.poster_path}
                />
              ))
            : movies.map((movie) => (
                <MovieCard
                  onClick={() => {
                    getSpecificMovie(movie);
                    history.push("/aboutmovie");
                  }}
                  release_date={movie.release_date}
                  popularity={movie.popularity}
                  title={movie.original_title}
                  poster_path={imgurl + movie.poster_path}
                />
              ))}
        </BoxContainer>
      </MovieContainer>
    </Flex>
  );
};

export default BrowseMovies;
