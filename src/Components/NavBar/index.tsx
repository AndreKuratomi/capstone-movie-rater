import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Image,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/img/logo.png";
import { Link as RouteLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Breadcrumb>
      <BreadcrumbItem color="white" w="100%">
        <Flex w="100%" bg="#000000" justify="space-between" alignItems="center">
          <Box padding="1rem">
            <BreadcrumbItem>
              <RouteLink to="/">
                <Image src={Logo} alt="logo" width="50%" />
              </RouteLink>
            </BreadcrumbItem>
          </Box>
          <Box padding="1rem">
            <BreadcrumbItem padding="0px 5px" color="white">
              <BreadcrumbLink as={Link} to="/aboutus">
                Sobre nós
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem padding="0px 5px" color="white">
              <BreadcrumbLink as={Link} to="/login">
                Login
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem padding="0px 5px" bg="#C11B1B" color="white">
              <BreadcrumbLink as={Link} to="/signup">
                Cadastro
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Box>
        </Flex>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default NavBar;
