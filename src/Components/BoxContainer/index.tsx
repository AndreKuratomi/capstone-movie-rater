import { Box } from "@chakra-ui/layout";
import { ReactNode } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
interface IBoxContainer {
  bgImg?: string;
  children: ReactNode;
  type?: string | undefined;
  decrease?: () => void;
  increase?: () => void | undefined;
}
const BoxContainer = ({
  bgImg,
  children,
  type,
  increase,
  decrease,
}: IBoxContainer) => {
  return type === "Upcomming" ? (
    <Box
      minW="85%"
      h="30%"
      position="relative"
      display="flex"
      flexDirection="row"
      borderRadius="15px"
      bgImage={bgImg}
      backgroundSize="cover"
      bgSize="fill"
      bgPosition="center"
      mt="30%"
    >
      <Box
        cursor="pointer"
        position="absolute"
        right="5"
        top="50%"
        color="fontColor.white100"
        fontSize="25px"
        onClick={increase}
      >
        <AiOutlineArrowRight />
      </Box>
      <Box
        cursor="pointer"
        position="absolute"
        color="fontColor.white100"
        fontSize="25px"
        left="5"
        top="50%"
        onClick={decrease}
      >
        <AiOutlineArrowLeft />
      </Box>
      {children}
    </Box>
  ) : type === "Browse" ? (
    <Box
      w="95%"
      overflowY="auto"
      padding="0.25rem"
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
      bgColor="black.transparent800"
      mb="8px"
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
      borderRadius="15px"
      bgSize="fill"
      bgPosition="center"
      alignItems="center"
    >
      {children}
    </Box>
  ) : type === "specificMovie" ? (
    <Box
      w="95%"
      overflowY="auto"
      padding="0.25rem"
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
      w="95%"
      overflowY="auto"
      padding="0.25rem"
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
