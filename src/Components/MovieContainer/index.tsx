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
      w="95%"
      overflowY="auto"
      css={{
        "&::-webkit-scrollbar": {
          width: "10px",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "rgba(91, 91, 91, 0.67)",
          borderRadius: "24px",
        },
      }}
      h="95%"
      mb="20px"
      justifyContent="space-evenly"
      flexDirection="column"
      alignItems="center"
      bgColor="black"
      borderRadius="15px"
      border="2px solid"
      borderColor="#ffffff73"
    >
      {children}
    </Flex>
  ) : (
    <Flex
      w="95%"
      overflowX="auto"
      css={{
        "&::-webkit-scrollbar": {
          width: "5px",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "rgba(91, 91, 91, 0.67)",
          borderRadius: "24px",
        },
      }}
      h="95%"
      mb="20px"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      bgColor="black"
      borderRadius="15px"
      border="2px solid"
      borderColor="#ffffff73"
    >
      {children}
    </Flex>
  );
};
export default MovieContainer;
