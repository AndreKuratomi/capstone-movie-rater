import { Container, Box, Flex } from "@chakra-ui/layout";
import { ReactNode } from "react";
import image from "../../Assets/img/background.jpg";
import MenuAside from "../MenuAside/index";
import MenuAsideMobile from "../MenuAsideMobile/index"
import { useMediaQuery } from "@chakra-ui/react"

interface ContainerDashboardProps {
  children: ReactNode;
}
const ContainerDashboard = ({ children }: ContainerDashboardProps) => {

  const [mobileVersion] = useMediaQuery("(max-width: 500px)");

  return (
    <Container
      padding="0"
      minH="100vh"
      minW="100vw"
      bgImage={image}
      bgSize="cover"
      overflow="hidden"
    >
          {mobileVersion? 
          <Flex  bgColor="black.transparent500" justifyContent="center">
            <Flex minH="100vh" justifyContent="center" alignItems="center" flexDirection="column">
              <MenuAsideMobile/>
              {children} 
            </Flex>
          </Flex>
          :
          <Box minW="100vh" minH="100vh" bgColor="black.transparent500">
            <Flex minH="100vh" justifyContent="space-between" alignItems="center">
              <MenuAside />
              {children}
            </Flex>
          </Box>}   
    </Container>
  );
};
export default ContainerDashboard;

