import MovieContainer from "../MovieContainer";
import MovieCard from "../MovieCard";
import { Flex, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import BoxContainer from "../BoxContainer";
import { Input } from "@chakra-ui/react";
import { useMovies } from "../../Providers/Movies";
import { FormControl } from "@chakra-ui/form-control";

import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";

const MyMoviesComponent = () => {
  const [findMovie, setFindMovie] = useState<string>("");
  const handleSearch = () => {
  };

  useEffect(() => {}, []);

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
            onChange={(e) => setFindMovie(e.target.value)}
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
          My Movies
        </Heading>
        <BoxContainer type="Browse">
          {/* {isSearch
            ? searchedMyMovies.map((movie) => (
                <MovieCard
                  release_date={movie.release_date}
                  popularity={movie.popularity}
                  title={movie.original_title}
                  poster_path={imgurl + movie.poster_path}
                />
              ))
            : mymovies.map((movie) => (
                <MovieCard
                  release_date={movie.release_date}
                  popularity={movie.popularity}
                  title={movie.original_title}
                  poster_path={imgurl + movie.poster_path}
                />
              ))} */}
        </BoxContainer>
      </MovieContainer>
    </Flex>
  );
};

export default MyMoviesComponent
