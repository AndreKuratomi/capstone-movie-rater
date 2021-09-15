
import MovieContainer from "../MovieContainer";
import MovieCard from "../MovieCard";
import { Flex, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import BoxContainer from "../BoxContainer";
import { Input } from "@chakra-ui/react";
import { useMovies } from "../../Providers/Movies";
import { useHistory } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";
import jwtDecode, { JwtPayload } from "jwt-decode";
import { IMoviesList } from "../../Providers/Movies"

interface IMyMoviesComponent{
  setFilteredFavorite: (value: React.SetStateAction<IMoviesList[]>) => void
}

const MyMoviesComponent = () => {
  const [findMovie, setFindMovie] = useState<string>("");
  const [search, setSearch] = useState<boolean>(false);
  const [filteredFavorite, setFilteredFavorite] = useState<IMoviesList[]>([])
  
  const history = useHistory()
  const {
    getSpecificMovie,
    favorites,
    getFavorites
  } = useMovies();

  const token = JSON.parse(localStorage.getItem("@movies: token") || "null");
  const decode = jwtDecode<JwtPayload>(token);
  const imgurl = "https://image.tmdb.org/t/p/original";

 
  // const handleSearch = (findMovie : string) => {
  //   if (
  //     favorites.find(
  //       (favorite) => {if(favorite.title){
  //         favorite.title.toUpperCase() === findMovie.toUpperCase()
  //       }}
  //     )
  //   ) {
  //     const filter = favorites.filter(
  //       (favorite) => {if(favorite.title){
  //         favorite.title.toUpperCase() === findMovie.toUpperCase()}}
  //     )
  //     setFilteredFavorite(filter);
  //     setSearch(true);
  //   }
    
  //   console.log(favorites)
  // };


  useEffect(() => {
    getFavorites(Number(decode.sub))
    if(findMovie === ""){
      setSearch(false)
    }
  }, [getFavorites]);

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
            // onClick={() => {
            //   handleSearch(findMovie);
            //   setFindMovie("")
            // }}
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
          {favorites?.map((movie) => (
            <MovieCard
              type="favorites"
              onClick={() => {
                getSpecificMovie(movie);
                history.push("/aboutmovie");
              }}
              title={movie.title}
              poster_path={imgurl + movie.poster_path}
            />
          ))}
        </BoxContainer>
      </MovieContainer>
    </Flex>
  );
};

export default MyMoviesComponent
