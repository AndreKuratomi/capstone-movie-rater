import { VStack, Grid, GridItem, Heading, Box, Text } from "@chakra-ui/layout";
import titleImage from "../../Assets/img/titleimage.png";
import { ImHome3 } from "react-icons/im";
import { RiSearchEyeLine } from "react-icons/ri";
import { TiGroup } from "react-icons/ti";
import { MdMovieCreation } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxFill } from "react-icons/ri";

const MenuAside = () => {
  return (
    <VStack
      w="250px"
      minH="100vh"
      bgColor="red.800"
      borderRadius="0px 15px 15px 0px"
      mr="10px"
    >
      <Grid
        color="fontColor.white100"
        h="100%"
        w="100%"
        fontFamily="Inder, sans-serif"
        templateRows="repeat(16, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={2}
      >
        <GridItem
          rowSpan={2}
          colSpan={6}
          position="relative"
          ml="10px"
          mt="15px"
        >
          <img src={titleImage} alt="titleimage" />
          <Heading
            fontWeight="light"
            as="h2"
            fontSize="23px"
            position="absolute"
            top="45px"
            left="90px"
          >
            MovieRater
          </Heading>
        </GridItem>
        <GridItem
          justifySelf="center"
          alignSelf="center"
          rowSpan={3}
          colSpan={6}
        >
          <Box
            w="100px"
            h="100px"
            borderRadius="50%"
            bgColor="black.transparent500"
          />
        </GridItem>

        <GridItem rowSpan={4} colSpan={6} justifySelf="flex-start">
          <VStack ml="50px">
            <Heading fontWeight="light" as="h3" fontSize="25px">
              Menu
            </Heading>
            <Box display="flex" w="150px">
              <Text fontSize="35px" cursor="pointer">
                <ImHome3 />
              </Text>
              <Heading
                as="p"
                fontSize="20PX"
                ml="5px"
                fontWeight="100"
                lineHeight="35px"
              >
                Home
              </Heading>
            </Box>
            <Box display="flex" w="150px">
              <Heading fontSize="35px" as="span" cursor="pointer">
                <RiSearchEyeLine />
              </Heading>
              <Heading
                as="p"
                fontSize="20PX"
                ml="5px"
                fontWeight="100"
                lineHeight="35px"
              >
                Browse
              </Heading>
            </Box>
            <Box display="flex" w="150px">
              <Heading fontSize="35px" as="span" cursor="pointer">
                <TiGroup />
              </Heading>
              <Heading
                as="p"
                fontSize="20PX"
                ml="5px"
                fontWeight="100"
                lineHeight="35px"
              >
                Groups
              </Heading>
            </Box>
            <Box display="flex" w="150px">
              <Heading fontSize="35px" as="span" cursor="pointer">
                <MdMovieCreation />
              </Heading>
              <Heading
                as="p"
                fontSize="20PX"
                ml="5px"
                fontWeight="100"
                lineHeight="35px"
              >
                My movies
              </Heading>
            </Box>
          </VStack>
        </GridItem>
        <GridItem rowSpan={4} colSpan={6} justifySelf="flex-start" mt="50px">
          <VStack ml="50px">
            <Heading fontWeight="light" as="h3" fontSize="25px">
              General
            </Heading>
            <Box display="flex" w="150px">
              <Text fontSize="35px" cursor="pointer">
                <CgProfile />
              </Text>
              <Heading
                as="p"
                fontSize="20PX"
                ml="5px"
                fontWeight="100"
                lineHeight="35px"
              >
                Profile
              </Heading>
            </Box>
            <Box display="flex" w="150px">
              <Heading fontSize="35px" as="span" cursor="pointer">
                <RiLogoutBoxFill />
              </Heading>
              <Heading
                as="p"
                fontSize="20PX"
                ml="5px"
                fontWeight="100"
                lineHeight="35px"
              >
                SignOut
              </Heading>
            </Box>
          </VStack>
        </GridItem>
      </Grid>
    </VStack>
  );
};
export default MenuAside;
