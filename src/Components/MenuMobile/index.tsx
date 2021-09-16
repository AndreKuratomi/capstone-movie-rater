import {
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { useUser } from "../../Providers/User";
import { useForm } from "react-hook-form";
import { Input } from "@chakra-ui/input";
import { Link as ReachLink } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/modal";
import { Text, Box } from "@chakra-ui/layout";

import { ImHome3 } from "react-icons/im";
import { RiSearchEyeLine } from "react-icons/ri";
import { TiGroup } from "react-icons/ti";
import { MdMovieCreation } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxFill } from "react-icons/ri";

const MenuMobile = () => {
  const {
    isOpen: isOpenMenu,
    onOpen: onOpenMenu,
    onClose: onCloseMenu,
  } = useDisclosure();
  const { userName, category, updateCategory } = useUser();
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();
  const { register, handleSubmit } = useForm();

  const logOut = () => {
    localStorage.clear();
  };

  return (
    <Box width="100%" textAlign="center">
      <Button
        colorScheme="red"
        onClick={onOpenMenu}
        width="100%"
        border="none"
        color="black"
        _focus={{ boxShadow: "none" }}
        mb="1rem"
        borderTopLeftRadius="0px"
        borderTopRightRadius="0px"
      >
        MENU
      </Button>
      <Drawer placement="top" onClose={onCloseMenu} isOpen={isOpenMenu}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton _focus={{ boxShadow: "none" }} />
          <DrawerHeader color="red.800" borderBottomWidth="1px">
            Menu
          </DrawerHeader>
          <DrawerBody>
            <Box display="flex">
              <ImHome3 />
              <ReachLink to="/">Home</ReachLink>
            </Box>
            <Box display="flex">
              <RiSearchEyeLine />
              <ReachLink to="/movies">Filmes</ReachLink>
            </Box>
            <Box display="flex">
              <TiGroup />
              <ReachLink to="/groups">Grupos</ReachLink>
            </Box>
            <Box display="flex">
              <MdMovieCreation />
              <ReachLink to="/mymovies">Meus Filmes</ReachLink>
            </Box>
          </DrawerBody>
          <DrawerHeader color="red.800" borderBottomWidth="1px">
            Geral
          </DrawerHeader>
          <DrawerBody>
            <Box display="flex">
              <CgProfile />
              <Link onClick={onOpenModal}>Perfil</Link>
              <Modal
                closeOnOverlayClick={false}
                isOpen={isOpenModal}
                onClose={onCloseModal}
              >
                <ModalOverlay />
                <ModalContent display="flex" size="sm">
                  <ModalCloseButton />
                  <Box
                    display="flex"
                    flexDirection="column"
                    w="100%"
                    alignItems="center"
                    justifyContent="center"
                    padding="1rem"
                  >
                    <Box
                      w="100px"
                      h="100px"
                      borderRadius="50%"
                      bgColor="black.transparent500"
                      textAlign="center"
                      padding="5px"
                    />
                    <Box display="flex" flexDirection="column" mt="1rem">
                      <Text
                        fontFamily="rounded1C"
                        fontSize="1rem"
                        color="#440000"
                        textAlign="center"
                      >
                        {" "}
                        Usuário: {userName}
                      </Text>
                      <Text
                        fontFamily="rounded1C"
                        fontSize="1rem"
                        color="#440000"
                        textAlign="center"
                      >
                        {" "}
                        Categoria favorita: {category}
                      </Text>
                      <form onSubmit={handleSubmit(updateCategory)}>
                        <Input label="Username" {...register("username")} />
                        <Input label="Categoria" {...register("selectGenre")} />
                        <Button
                          type="submit"
                          bg="#440000"
                          color="white"
                          _hover={{ bg: "#000000" }}
                          focusBorderColor="none"
                        >
                          Save
                        </Button>
                      </form>
                    </Box>
                  </Box>
                  <ModalBody pb={6}></ModalBody>
                  <ModalFooter>
                    <Button onClick={onCloseModal}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Box>
            <Box display="flex">
              <RiLogoutBoxFill />
              <Button
                bgColor="#FFF"
                border="none"
                fontSize="16PX"
                ml="5px"
                fontWeight="100"
                height="20px"
                _hover={{ bg: "red.800" }}
                onClick={logOut}
                padding="0"
                margin-left="0"
              >
                <Link as={ReachLink} to="/">
                  Logout
                </Link>
              </Button>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default MenuMobile;
