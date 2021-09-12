import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link as ReachLink } from "react-router-dom"
import { Link } from "@chakra-ui/react"

const NavMobile = () => {
  return (
    <Box bg="black" display="flex" justifyContent="flex-end" padding="0.25rem">
      <Menu autoSelect={false}>
        <MenuButton
          as={IconButton}
          colorScheme="red"
          icon={<GiHamburgerMenu />}
          color="black"
        />
        <MenuList bg="white" border="none" color="black" padding="0px">
          <MenuItem><Link as={ReachLink} to="/aboutus">About Us</Link></MenuItem>
          <MenuItem><Link as={ReachLink} to="/login">Login</Link></MenuItem>
          <MenuItem
            backgroundColor="red"
            borderBottomRightRadius="6px"
            borderBottomLeftRadius="6px"
          >
            <Link as={ReachLink} to="/signup">Join Us</Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default NavMobile;
