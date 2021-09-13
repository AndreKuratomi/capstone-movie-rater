import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

import { Link as RouteLink } from "react-router-dom";
import Logo from "../../Assets/img/logo.png";

const NavMobile = () => {
  return (
    <Box bg="black" display="flex" justifyContent="flex-end" padding="0.25rem">
      <RouteLink to="/">
        <Image src={Logo} width="50%" />
      </RouteLink>
      <Menu autoSelect={false}>
        <MenuButton
          as={IconButton}
          colorScheme="red"
          icon={<GiHamburgerMenu />}
          color="black"
        />

        <MenuList bg="white" border="none" color="black" padding="0px">
          <RouteLink to="/aboutus">
            <MenuItem>About Us</MenuItem>
          </RouteLink>
          <RouteLink to="login">
            <MenuItem>Login</MenuItem>
          </RouteLink>
          <RouteLink to="signup">
            <MenuItem
              backgroundColor="red"
              borderBottomRightRadius="6px"
              borderBottomLeftRadius="6px"
            >
              Sign Up
            </MenuItem>
          </RouteLink>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default NavMobile;
