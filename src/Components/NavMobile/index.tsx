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
          <MenuItem>Sobre Nós</MenuItem>
          <MenuItem>Entrar</MenuItem>
          <MenuItem
            backgroundColor="red"
            borderBottomRightRadius="6px"
            borderBottomLeftRadius="6px"
          >
            Junte-se
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default NavMobile;
