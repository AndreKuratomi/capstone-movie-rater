import { Container, Box, Flex } from "@chakra-ui/layout";
import { ReactNode } from "react";
import image from "../../Assets/img/background.jpg";
import MenuAside from "../MenuAside/index";
import Dashboard from "../Dashboard/index";

interface ContainerDashboardProps {
  children: ReactNode;
}
const ContainerDashboard = ({ children }: ContainerDashboardProps) => {
  return (
    <Container padding="0" minH="100vh" maxWidth="100%" bgImage={image}>
      <Box minW="100vh" minH="100vh" bgColor="black.transparent500">
        <Flex minH="100vh">
          <MenuAside />
          <Dashboard />
          {children}
        </Flex>
      </Box>
    </Container>
  );
};
export default ContainerDashboard;
