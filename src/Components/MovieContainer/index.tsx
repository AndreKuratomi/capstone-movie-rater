import { Flex } from "@chakra-ui/layout";
import { ReactNode } from "react";

interface IMovieContainer {
  children: ReactNode;
  type?: string;
}

const MovieContainer = ({ children, type }: IMovieContainer) => {
  return type === "column" ? (
    <Flex
      w="65vw"
      h="88vh"
      mb="20px"
      justifyContent="space-evenly"
      flexDirection="column"
      alignItems="center"
      bgColor="black.transparent500"
      borderRadius="15px"
      border="2px solid"
      borderColor="fontColor.pinkLight"
    >
      {children}
    </Flex>
  ) : (
    <Flex
      w="75vw"
      h="95vh"
      mb="20px"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      bgColor="black.transparent500"
      borderRadius="15px"
      border="2px solid"
      borderColor="fontColor.pinkLight"
    >
      {children}
    </Flex>
  );
};

export default MovieContainer;
