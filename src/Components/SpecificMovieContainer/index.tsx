import { Grid, GridItem, Box, Heading, Flex } from "@chakra-ui/layout";
import { Img } from "@chakra-ui/image";

const SpecificMovieContainer = () => {
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
            src="https://image.tmdb.org/t/p/original/pUK9duiCK1PKqWA5rRQ4XBMHITH.jpg"
            borderRadius="8px"
          />
        </Box>
        <Box w="60%" h="100%">
          <Box
            ml="25px"
            w="48%"
            h="100%"
            borderRadius="15px"
            padding="10px"
            bgColor="brown.dark"
          >
            <Heading w="100%" fontSize="20px" color="fontColor.white100">
              lkasjdljalsjdlkaj
            </Heading>
          </Box>
        </Box>
      </Box>
      <Box mt="20px" ml="20px" h="100px" display="flex" flexDirection="column">
        <Heading
          mb="6px"
          fontWeight="400"
          fontSize="18px"
          color="fontColor.white100"
        >
          Data de lançamento
        </Heading>
        <Heading
          mb="6px"
          fontWeight="400"
          fontSize="18px"
          color="fontColor.white100"
        >
          popularidade
        </Heading>
        <Heading
          mb="6px"
          fontWeight="400"
          fontSize="18px"
          color="fontColor.white100"
        >
          linguagem original
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

        {[1, 2, 4, 4].map((element) => (
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
                lkasjdljalsjdlkaj
              </Heading>
            </Box>
          </Flex>
        ))}
      </Box>
    </Flex>
  );
};
export default SpecificMovieContainer;
