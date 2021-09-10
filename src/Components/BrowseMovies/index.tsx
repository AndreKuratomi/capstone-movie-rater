import MovieContainer from "../MovieContainer";
import MovieCard from "../MovieCard";
import { Flex, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import BoxContainer from "../BoxContainer";
import { Input } from "@chakra-ui/react";

import { BsSearch } from "react-icons/bs";

const BrowseMovies = () => {
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
            w="60%"
            color="fontColor.pinkLight"
            borderColor="fontColor.black800"
            placeholder="Search Move"
            bgColor="brown.dark"
          />
          <hr />
          <Button
            hover="fontColor.black800"
            bgColor="brown.dark"
            color="fontColor.pinkLight"
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
          {[1, 2, 3, 3, 4].map((elemtn) => (
            <MovieCard
              release_date="25202"
              popularity={5}
              title="movie name"
              poster_path="https://image.tmdb.org/t/p/original/pUK9duiCK1PKqWA5rRQ4XBMHITH.jpg"
            />
          ))}
        </BoxContainer>
      </MovieContainer>
    </Flex>
  );
};

export default BrowseMovies;
