import {
  Button,
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

import { ImHome3 } from "react-icons/im";
import { RiReservedLine, RiSearchEyeLine } from "react-icons/ri";
import { TiGroup } from "react-icons/ti";
import { MdMovieCreation } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxFill } from "react-icons/ri";

const MenuMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const logOut = () => {
    localStorage.clear();
  };

  return (
    <Box width="100%" textAlign="center">
      <Button
        colorScheme="red"
        onClick={onOpen}
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
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton _focus={{ boxShadow: "none" }} />
          <DrawerHeader color="red.800" borderBottomWidth="1px">
            Menu
          </DrawerHeader>
          <DrawerBody>
            <Box display="flex">
              <ImHome3 />
              <Link to="/">Home</Link>
            </Box>
            <Box display="flex">
              <RiSearchEyeLine />
              <Link to="/movies">Filmes</Link>
            </Box>
            <Box display="flex">
              <TiGroup />
              <Link to="/groups">Grupos</Link>
            </Box>
            <Box display="flex">
              <MdMovieCreation />
              <Link to="/mymovies">Meus Filmes</Link>
            </Box>
          </DrawerBody>
          <DrawerHeader color="red.800" borderBottomWidth="1px">
            Geral
          </DrawerHeader>
          <DrawerBody>
            <Box display="flex">
              <CgProfile />
              <Link to="/">Perfil</Link>
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
