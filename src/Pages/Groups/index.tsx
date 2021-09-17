import AllGroups from "../../Components/AllGroups";
import { Container, Box, Flex, useMediaQuery } from "@chakra-ui/react";
import image from "../../Assets/img/background.jpg";
import MenuAside from "../../Components/MenuAside";
import MenuMobile from "../../Components/MenuMobile";

const Groups = () => {
  const [desktopVersion] = useMediaQuery("(min-width: 768px)");

  return (
    <Container
      padding="0"
      minH="100vh"
      minW="100vw"
      bgImage={image}
      bgSize="fill"
    >
      <Box minW="100%" minH="100%" bgColor="black.transparent500">
        {desktopVersion ? (
          <Flex minH="100vh" justifyContent="space-between" alignItems="center">
            <MenuAside />
            <AllGroups />
          </Flex>
        ) : (
          <Flex
            minH="100vh"
            justifyContent="space-between"
            alignItems="center"
            flexDirection="column"
          >
            <MenuMobile />
            <AllGroups />
          </Flex>
        )}
      </Box>
    </Container>
  );
};

export default Groups;
