import {
  VStack,
  Grid,
  GridItem,
  Heading,
  Box,
  Text,
  Flex,
} from "@chakra-ui/layout";
import Logo from "../../Assets/img/logo.png";
import { ImHome3 } from "react-icons/im";
import { RiSearchEyeLine } from "react-icons/ri";
import { TiGroup } from "react-icons/ti";
import { MdMovieCreation } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxFill } from "react-icons/ri";
import { Link as ReachLink } from "react-router-dom";
import { Link, Image } from "@chakra-ui/react";

const MenuAside = () => {
  return (
    <VStack
      w="250px"
      minH="100%"
      bgColor="red.800"
      borderRadius="0px 15px 15px 0px"
      mr="10px"
    >
      <Flex
        flexDirection="column"
        alignItems="center"
        color="fontColor.white100"
        h="100vh"
        w="100%"
        fontFamily="Inder, sans-serif"
      >
        <Flex justifyContent="center">
          <Image src={Logo} alt="Logo" h="70px" />
        </Flex>
        <Box
          w="100px"
          h="100px"
          borderRadius="50%"
          bgColor="black.transparent500"
        />

        <VStack>
          <Heading fontWeight="light" as="h3" fontSize="25px" m="1rem">
            Menu
          </Heading>
          <Box display="flex" w="150px" alignItems="center">
            <Text fontSize="35px" cursor="pointer">
              <ImHome3 fontSize="1rem" />
            </Text>
            <Heading
              as="p"
              fontSize="20PX"
              ml="5px"
              fontWeight="100"
              lineHeight="35px"
            >
              <Link as={ReachLink} to="/dashboard">
                Home
              </Link>
            </Heading>
          </Box>
          <Box display="flex" w="150px" alignItems="center">
            <Heading fontSize="35px" as="span" cursor="pointer">
              <RiSearchEyeLine fontSize="1rem" />
            </Heading>
            <Heading
              as="p"
              fontSize="20PX"
              ml="5px"
              fontWeight="100"
              lineHeight="35px"
            >
              <Link as={ReachLink} to="/movies">
                Filmes
              </Link>
            </Heading>
          </Box>
          <Box display="flex" w="150px" alignItems="center">
            <Heading fontSize="35px" as="span" cursor="pointer">
              <TiGroup fontSize="1rem" />
            </Heading>
            <Heading
              as="p"
              fontSize="20PX"
              ml="5px"
              fontWeight="100"
              lineHeight="35px"
            >
              <Link as={ReachLink} to="/groups">
                Grupos
              </Link>
            </Heading>
          </Box>
          <Box display="flex" w="150px" alignItems="center">
            <Heading fontSize="35px" as="span" cursor="pointer">
              <MdMovieCreation fontSize="1rem" />
            </Heading>
            <Heading
              as="p"
              fontSize="20PX"
              ml="5px"
              fontWeight="100"
              lineHeight="35px"
            >
              <Link as={ReachLink} to="/mymovies">
                Meus Filmes
              </Link>
            </Heading>
          </Box>
        </VStack>

        <VStack>
          <Heading fontWeight="light" as="h3" fontSize="25px" m="1rem">
            Geral
          </Heading>
          <Box display="flex" w="150px" alignItems="center">
            <Text fontSize="35px" cursor="pointer">
              <CgProfile fontSize="1rem" />
            </Text>
            <Heading
              as="p"
              fontSize="20PX"
              ml="5px"
              fontWeight="100"
              lineHeight="35px"
            >
              <Link as={ReachLink} to="/">
                Perfil
              </Link>
            </Heading>
          </Box>
          <Box display="flex" w="150px" alignItems="center">
            <Heading fontSize="35px" as="span" cursor="pointer">
              <RiLogoutBoxFill fontSize="1rem" />
            </Heading>
            <Heading
              as="p"
              fontSize="20PX"
              ml="5px"
              fontWeight="100"
              lineHeight="35px"
            >
              Logout
            </Heading>
          </Box>
        </VStack>
      </Flex>
    </VStack>
  );
};
export default MenuAside;
