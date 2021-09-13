import { Box, Flex, HStack, Text } from "@chakra-ui/layout";
import { useMovies } from "../../Providers/Movies";
import { BiArrowToRight, BiArrowToLeft } from "react-icons/bi";
interface IPaginator {
  setNextPage: () => void;
  setPreviouPage: () => void;
}

const Paginator = ({ setNextPage, setPreviouPage }: IPaginator) => {
  const { movies } = useMovies();
  return (
    <HStack
      w="100px"
      fontSize="25px"
      color="fontColor.white100"
      justifyContent="space-between"
    >
      <Box cursor="pointer" onClick={setPreviouPage}>
        <BiArrowToLeft />
      </Box>

      <Box cursor="pointer" onClick={setNextPage}>
        <BiArrowToRight />
      </Box>
    </HStack>
  );
};
export default Paginator;
