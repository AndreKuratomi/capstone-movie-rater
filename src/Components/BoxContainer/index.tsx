import { Box } from "@chakra-ui/layout";
import { ReactNode } from "hoist-non-react-statics/node_modules/@types/react";

interface IBoxContainer {
  bgImg?: string;
  children: ReactNode;
  type?: string | undefined;
}

const BoxContainer = ({ bgImg, children, type }: IBoxContainer) => {
  return type === "Upcomming" ? (
    <Box
      minW="85%"
      h="30%"
      display="flex"
      flexDirection="row"
      borderRadius="15px"
      bgImage={bgImg}
      bgSize="fill"
      mt="8px"
      bgPosition="center"
    >
      {children}
    </Box>
  ) : type === "Browse" ? (
    <Box
      w="85%"
      overflowY="auto"
      css={{
        "&::-webkit-scrollbar": {
          width: "0",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "rgba(91, 91, 91, 0.67)",
          borderRadius: "24px",
        },
      }}
      bgColor="black.transparent800"
      h="80%"
      mb="8px"
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="space-between"
      borderRadius="15px"
      bgSize="fill"
      bgPosition="center"
    >
      {children}
    </Box>
  ) : type === "specificMovie" ? (
    <Box
      w="85%"
      overflowY="auto"
      css={{
        "&::-webkit-scrollbar": {
          width: "0",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "rgba(91, 91, 91, 0.67)",
          borderRadius: "24px",
        },
      }}
      bgColor="black.transparent800"
      h="95%"
      mb="8px"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      borderRadius="15px"
      bgSize="fill"
      bgPosition="center"
    >
      {children}
    </Box>
  ) : (
    <Box
      w="85%"
      overflowY="auto"
      css={{
        "&::-webkit-scrollbar": {
          width: "0",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "rgba(91, 91, 91, 0.67)",
          borderRadius: "24px",
        },
      }}
      bgColor="black.transparent800"
      h="80%"
      mb="8px"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      borderRadius="15px"
      bgSize="fill"
      bgPosition="center"
    >
      {children}
    </Box>
  );
};
export default BoxContainer;
