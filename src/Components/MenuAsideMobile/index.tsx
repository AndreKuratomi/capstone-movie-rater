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
  import { Flex } from "@chakra-ui/layout";
  import { Link as ReachLink } from "react-router-dom"
  import { Link } from "@chakra-ui/react"
  
  const NavMobile = () => {
    return (
      <Flex bg="black" display="flex" justifyContent="flex-end" padding="0.25rem">
        <Menu autoSelect={false}>
          <Flex bgColor="black">
  
          <MenuButton
            as={IconButton}
            colorScheme="red"
            icon={<GiHamburgerMenu />}
            color="black"
          />
          </Flex>
          <MenuList bg="white" border="none" color="black" padding="0px">
            <MenuItem><Link as={ReachLink} to="/dashboard">Home</Link></MenuItem>
            <MenuItem><Link as={ReachLink} to="/movies">Filmes</Link></MenuItem>
            <MenuItem><Link as={ReachLink} to="/groups">Grupos</Link></MenuItem>
            <MenuItem><Link as={ReachLink} to="/mymovies">Meus Filmes</Link></MenuItem>
            <MenuItem><Link as={ReachLink} to="/">Perfil</Link></MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    );
  };
  
  export default NavMobile;
  