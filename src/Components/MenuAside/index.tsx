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
          </Box>
        </VStack>
      </Flex>
    </VStack>
  );
};
export default MenuAside;
