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
import { Link, Image} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { Button } from "@chakra-ui/button";
import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalFooter,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/modal";
import { useRegister } from "../../Providers/Register";
const MenuAside = () => {
  
    const logOut = () => {
      localStorage.clear();
    };
  const { userName, category } = useRegister();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <VStack
      w="250px"
      minH="100%"
      bgColor="red.800"
      borderRadius="0px 15px 15px 0px"
      mr="10px"
      p="0.45rem"
    >
      <Grid
        color="fontColor.white100"
        h="100%"
        w="100%"
        fontFamily="Inder, sans-serif"
        templateRows="repeat(4, 1fr)"
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
          <Flex justifyContent="center">
            <Image src={Logo} alt="Logo" h="70px" />
          </Flex>
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
                <Link as={ReachLink} to="/dashboard">
                  Home
                </Link>
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
                <Link as={ReachLink} to="/movies">
                  Filmes
                </Link>
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
                <Link as={ReachLink} to="/groups">
                  Grupos
                </Link>
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
                <Link as={ReachLink} to="/mymovies">
                  Meus Filmes
                </Link>
              </Heading>
            </Box>
          </VStack>
        </GridItem>
        <GridItem rowSpan={4} colSpan={6} justifySelf="flex-start" mt="50px">
          <VStack ml="50px">
            <Heading fontWeight="light" as="h3" fontSize="25px">
              Geral
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
                <Link onClick={onOpen}>Perfil</Link>
                <Modal
                  closeOnOverlayClick={false}
                  isOpen={isOpen}
                  onClose={onClose}
                >
                  <ModalOverlay />
                  <ModalContent display="flex">
                    <ModalCloseButton />
                    <Box display="flex" flexDirection="column" w="100%">
                      <Box
                        w="100px"
                        h="100px"
                        borderRadius="50%"
                        bgColor="black.transparent500"
                        textAlign="center"
                        padding="5px"
                      />
                      <Box display="flex" flexDirection="column">
                        <Text
                          fontFamily="rounded1C"
                          fontSize="2rem"
                          color="#440000"
                          textAlign="center"
                        >
                          {" "}
                          {userName}
                        </Text>
                        <Text
                          fontFamily="rounded1C"
                          fontSize="2rem"
                          color="#440000"
                          textAlign="center"
                        >
                          {" "}
                          {category}
                        </Text>
                      </Box>
                    </Box>
                    <ModalBody pb={6}></ModalBody>
                    <ModalFooter>
                      <Button
                        type="submit"
                        bg="#440000"
                        color="white"
                        _hover={{ bg: "#000000" }}
                        focusBorderColor="none"
                      >
                        Save
                      </Button>
                      <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
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
                <Button
                  backgroundColor="red.800"
                  border="none"
                  fontSize="20PX"
                  ml="5px"
                  fontWeight="100"
                  lineHeight="35px"
                  _hover={{ bg: "red.800" }}
                  onClick={logOut}
                  padding="0"
                  margin-left="-1px"
                >
                  <Link as={ReachLink} to="/">
                    Logout
                  </Link>
                </Button>
              </Heading>
            </Box>
          </VStack>
        </GridItem>
      </Grid>
    </VStack>
  );
};
export default MenuAside;
