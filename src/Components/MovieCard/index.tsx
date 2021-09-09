import { Img } from "@chakra-ui/image";
import { VStack, Box, Text, Heading } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuList } from "@chakra-ui/menu";
import { HiPlus } from "react-icons/hi";

interface ImovieCard {
  imgUrl: string;
  title: string;
  release_date: string;
  popularity: number;
  type?: string | undefined;
  onClick?: () => void;
}

const MovieCard = ({
  imgUrl,
  title,
  release_date,
  popularity,
  type,
  onClick,
}: ImovieCard) => {
  return type === "upComing" ? (
    <VStack
      justifyContent="center"
      alignItems="center"
      h="100%"
      minW="130px"
      ml="25px"
    >
      <Img
        cursor="pointer"
        onClick={onClick}
        src={imgUrl}
        borderRadius="8px"
        w="130px"
        h="70%"
      />
      <Menu>
        <MenuButton
          display="flex"
          flexDirection="row"
          position="relative"
          w="100%"
          h="40px"
          transition="all 0.2s"
          color="fontColor.white100"
          borderRadius="md"
          borderWidth="1px"
          bgColor="red.300"
          _hover={{ bg: "red.800" }}
          _expanded={{ bg: "red.800" }}
        >
          <Box position="absolute" fontSize="27px">
            <HiPlus />
          </Box>
          Information
        </MenuButton>
        <MenuList bgColor="fontColor.black800">
          <Text ml="5px" color="fontColor.white100">
            {title}
          </Text>
          <Text ml="5px" color="fontColor.white100">
            {release_date}
          </Text>
          <Text ml="5px" color="fontColor.white100">
            {popularity}
          </Text>
        </MenuList>
      </Menu>
    </VStack>
  ) : (
    <VStack
      justifyContent="center"
      alignItems="center"
      h="230px"
      minW="130px"
      mt="5px"
      ml="25px"
      mr="25px"
    >
      <Img
        onClick={onClick}
        cursor="pointer"
        src={imgUrl}
        borderRadius="8px"
        w="130px"
        h="80%"
      />
      <Heading fontWeight="200" fontSize="20px" color="fontColor.white100">
        {title}
      </Heading>
    </VStack>
  );
};

export default MovieCard;
