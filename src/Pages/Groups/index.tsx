import AllGroups from "../../Components/AllGroups";
import { Container, Box, Flex } from "@chakra-ui/layout";
import { ReactNode } from "react";
import image from "../../Assets/img/background.jpg";
import MenuAside from "../../Components/MenuAside";
import Chat from "../../Components/Chat";

const Groups = () => {
  return (
    <Container
      padding="0"
      minH="100vh"
      minW="100vw"
      bgImage={image}
      bgSize="fill"
    >
      <Box minW="100vh" minH="100vh" bgColor="black.transparent500">
        <Flex minH="100vh" justifyContent="space-between" alignItems="center">
          <MenuAside />

          <AllGroups />
        </Flex>
      </Box>
    </Container>
  );
};

export default Groups;
