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
  useDisclosure,
} from "@chakra-ui/react";
import { Link, Link as ReachLink } from "react-router-dom";

import { ImHome3 } from "react-icons/im";
import { RiReservedLine, RiSearchEyeLine } from "react-icons/ri";
import { TiGroup } from "react-icons/ti";
import { MdMovieCreation } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxFill } from "react-icons/ri";

const MenuMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box width="100%" textAlign="center">
      <Button
        colorScheme="red"
        onClick={onOpen}
        width="100%"
        border="none"
        color="black"
      >
        MENU
      </Button>
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
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
              <Link to="/movies">Movies</Link>
            </Box>
            <Box display="flex">
              <TiGroup />
              <Link to="/groups">Groups</Link>
            </Box>
            <Box display="flex">
              <MdMovieCreation />
              <Link to="/mymovies">My movies</Link>
            </Box>
          </DrawerBody>
          <DrawerHeader color="red.800" borderBottomWidth="1px">
            General
          </DrawerHeader>
          <DrawerBody>
            <Box display="flex">
              <CgProfile />
              <Link to="/">Profile</Link>
            </Box>
            <Box display="flex">
              <RiLogoutBoxFill />
              <Link to="/">SignOut</Link>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default MenuMobile;
