import { Grid, GridItem, Box, Heading, Flex } from "@chakra-ui/layout";
import { Img } from "@chakra-ui/image";
import { useMovies } from "../../Providers/Movies";
import { Input, Button, Text, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IMoviesList } from "../../Providers/Movies";
import jwtDecode, { JwtPayload } from "jwt-decode";
import { number } from "yup";
import { useUser } from "../../Providers/User";
const SpecificMovieContainer = () => {
  const { getSpecificMovie, aboutMovie } = useMovies();
  const imgurl = "https://image.tmdb.org/t/p/original";
  const [comments, setComments] = useState<string>("");
  const { addReviews, getReview, review } = useMovies();
  const token = JSON.parse(localStorage.getItem("@movies: token") || "null");
  useEffect(() => {
    aboutMovie.id && getReview(aboutMovie.id, token);
  }, [getReview]);
  console.log(review);
  const decoded = jwtDecode<JwtPayload>(token);
  const { userName } = useUser();
  const [mobileVersion] = useMediaQuery("(max-width: 500px)");
  return (
    <Flex flexDirection="column" h="100%">
      <Heading color="white" textAlign="center" width="100%" p="1rem">
        {aboutMovie.title}
      </Heading>
      <Box
        alignItems="center"
        display="flex"
        flexDirection={mobileVersion ? "column" : "row"}
        justifyContent="space-between"
      >
        <Box w="35%">
          <Img
            w={mobileVersion ? "100%" : "80%"}
            cursor="pointer"
            src={imgurl + aboutMovie.poster_path}
            borderRadius="8px"
          />
        </Box>
        <Box w={mobileVersion ? "100%" : "60%"} h="100%">
          <Box h="100%" borderRadius="15px" padding="20px" bgColor="brown.dark">
            <Text w="100%" fontSize="20px" lineHeight="30px" color="white">
              {aboutMovie.overview}
            </Text>
          </Box>
        </Box>
      </Box>
      <Box
        mt="20px"
        ml="20px"
        h="100px"
        display="flex"
        flexDirection="column"
        color="white"
      >
        <Text>Data de lançamento: {aboutMovie.release_date}</Text>
        <Text>Popularidade: {aboutMovie.popularity}</Text>
        <Text>Título original: {aboutMovie.original_title}</Text>
        <Text>Idioma original: {aboutMovie.original_language}</Text>
      </Box>
      <Box display="flex" flexDirection="column" mt="4rem">
        <Heading
          textAlign="center"
          mb="16px"
          fontWeight="400"
          fontSize="22px"
          color="fontColor.white100"
        >
          Reviews
        </Heading>
        <Box
          display="flex"
          alignItems="center"
          flexDirection={mobileVersion ? "column" : "row"}
        >
          <Input
            onChange={(e) => setComments(e.target.value)}
            w="100%"
            borderColor="fontColor.black800"
            placeholder="Digite aqui a sua opinião!"
            bgColor="white"
          />

          <Button
            w={mobileVersion ? "100%" : "40%"}
            hover="fontColor.black800"
            bgColor="#d28b20"
            onClick={() =>
              aboutMovie.id &&
              addReviews(aboutMovie.id, comments, Number(decoded.sub), token)
            }
          >
            {" "}
            Adicionar review{" "}
          </Button>
        </Box>
        {review ? (
          review?.map((comment, index) => (
            <Flex
              margin={
                mobileVersion ? "1rem 0rem 1rem 0rem" : "1rem 1rem 1rem 1rem"
              }
              flexDirection="row"
              border="1px solid #4a4a4a"
              alignItems="center"
              p="1rem"
              bg="transparent"
            >
              <Img
                w="50px"
                h="50px"
                borderRadius="50%"
                cursor="pointer"
                src="https://image.tmdb.org/t/p/original/pUK9duiCK1PKqWA5rRQ4XBMHITH.jpg"
                ml="1rem"
              />
              <Box
                ml="25px"
                w="50%"
                borderRadius="15px"
                padding="10px"
                bgColor="#450808"
              >
                <Text w="100%" color="fontColor.white100">
                  {userName}: {comment.comment}
                </Text>
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
