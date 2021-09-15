import { Flex } from "@chakra-ui/layout";
import BoxContainer from "../BoxContainer";
import MovieContainer from "../MovieContainer";
import SpecificMovieContainer from "../SpecificMovieContainer";

const SpecificMovie = () => {
  return (
    <Flex
      w="85%"
      h="100vh"
      justifyContent="flex-end"
      alignItems="center"
      flexDirection="column"
    >
      <MovieContainer>
        <BoxContainer type="specificMovie">
          <SpecificMovieContainer></SpecificMovieContainer>
        </BoxContainer>
      </MovieContainer>
    </Flex>
  );
};
export default SpecificMovie;
