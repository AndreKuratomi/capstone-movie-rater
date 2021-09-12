import { Grid, GridItem, Box, Heading } from "@chakra-ui/layout";
import { Img } from "@chakra-ui/image";

const SpecificMovieContainer = () => {
  return (
    <Grid
      w="100%"
      h="100%"
      templateRows="repeat(16, 1fr)"
      templateColumns="repeat(16, 1fr)"
    >
      <GridItem ml="20px" mt="20px" colSpan={4} rowSpan={8}>
        <Img
          cursor="pointer"
          src="https://image.tmdb.org/t/p/original/pUK9duiCK1PKqWA5rRQ4XBMHITH.jpg"
          borderRadius="8px"
        />
      </GridItem>
      <GridItem mt="20px" colSpan={9} rowSpan={8} justifySelf="flex-end">
        <Box
          minW="280px"
          h="100%"
          borderRadius="15px"
          padding="10px"
          bgColor="brown.dark"
        >
          <Heading w="100%" fontSize="20px" color="fontColor.white100">
            lkasjdljalsjdlkaj
          </Heading>
        </Box>
      </GridItem>
      <GridItem></GridItem>
      <GridItem></GridItem>
    </Grid>
  );
};
export default SpecificMovieContainer;
