import { Grid, GridItem, Box, Heading, Flex } from "@chakra-ui/layout";
import { Img } from "@chakra-ui/image";
import { useMovies } from "../../Providers/Movies";
import { Input, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IMoviesList } from "../../Providers/Movies";
const SpecificMovieContainer = () => {
  const { getSpecificMovie, aboutMovie } = useMovies();
  const imgurl = "https://image.tmdb.org/t/p/original";
  const [review, setReview] = useState<string>("");
  const { addReviews } = useMovies();
  const token = JSON.parse(localStorage.getItem("@movies: token") || "null");
  useEffect(() => {}, []);

  return (
    <Flex flexDirection="column" h="100%">
      <Box
        mt="20px"
        ml="20px"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Box w="35%">
          <Img
            w="70%"
            cursor="pointer"
            src={imgurl + aboutMovie.poster_path}
            borderRadius="8px"
          />
        </Box>
        <Box w="60%" h="100%">
          <Box
            ml="25px"
            w="48%"
            h="100%"
            borderRadius="15px"
            padding="20px"
            bgColor="brown.dark"
          >
            <Heading
              w="100%"
              fontSize="20px"
              lineHeight="30px"
              color="fontColor.pinkLight"
            >
              {aboutMovie.overview}
            </Heading>
          </Box>
        </Box>
      </Box>
      <Box mt="20px" ml="20px" h="100px" display="flex" flexDirection="column">
        <Heading
          mb="6px"
          fontWeight="400"
          fontSize="18px"
          color="fontColor.pinkLight"
        >
          data de lançamento: <b>{aboutMovie.release_date}</b>
        </Heading>
        <Heading
          mb="6px"
          fontWeight="400"
          fontSize="18px"
          color="fontColor.pinkLight"
        >
          popularidade: <b>{aboutMovie.popularity}</b>
        </Heading>
        <Heading
          mb="6px"
          fontWeight="400"
          fontSize="18px"
          color="fontColor.pinkLight"
        >
          linguagem original: <b>{aboutMovie.original_language}</b>
        </Heading>
      </Box>
      <Box display="flex" flexDirection="column">
        <Heading
          textAlign="center"
          mb="16px"
          fontWeight="400"
          fontSize="22px"
          color="fontColor.white100"
        >
          Reviews
        </Heading>
        <Input
          onChange={(e) => setReview(e.target.value)}
          w="100%"
          h="80%"
          color="fontColor.pinkLight"
          borderColor="fontColor.black800"
          bgColor="brown.dark"
        />
        <hr />
        <Button
          hover="fontColor.black800"
          bgColor="brown.dark"
          color="fontColor.pinkLight"
          onClick={() => addReviews(aboutMovie, review, token)}
        />
        {aboutMovie.review ? (
          aboutMovie.review?.map((review) => (
            <Flex ml="20px" flexDirection="row" mb="5px">
              <Img
                w="50px"
                h="50px"
                borderRadius="50%"
                cursor="pointer"
                src="https://image.tmdb.org/t/p/original/pUK9duiCK1PKqWA5rRQ4XBMHITH.jpg"
              />
              <Box
                ml="25px"
                w="48%"
                h="130px"
                borderRadius="15px"
                padding="10px"
                bgColor="brown.dark"
              >
                <Heading w="100%" fontSize="20px" color="fontColor.white100">
                  {review}
                </Heading>
              </Box>
            </Flex>
          ))
        ) : (
          <Heading ml="20px" color="fontColor.pinkLight">
            Esse filme ainda não tem nenhum review
          </Heading>
        )}
      </Box>
    </Flex>
  );
};
export default SpecificMovieContainer;
