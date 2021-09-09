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
      bgImg={bgImg}
      bgSize="fill"
      bgPosition="center"
    >
      {children}
    </Box>
  ) : (
    <Box
      w="85%"
      overflowy="auto"
      css={{
        "&::-webkit-scrollbar": {
          width: "4px",
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
