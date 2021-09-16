import { Flex } from "@chakra-ui/layout";
import { ReactNode } from "react";

interface IMovieContainer {
  children: ReactNode;
  type?: string;
  colorBorder?: string;
  height?: string;
}

const MovieContainer = ({
  children,
  type,
  colorBorder,
  height,
}: IMovieContainer) => {
  return type === "column" ? (
    <Flex
      w="65vw"
      h="100vh"
      mb="20px"
      justifyContent="space-evenly"
      flexDirection="column"
      alignItems="center"
      bgColor="black"
      borderRadius="15px"
      border="2px solid"
      borderColor="#ffffff73"
      overflowy="scroll"
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
      bgColor="black"
      borderRadius="15px"
      border="2px solid"
      borderColor="#ffffff73"
      overflow-y="scroll"
    >
      {children}
    </Flex>
  );
};

export default MovieContainer;
