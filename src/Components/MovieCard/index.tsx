import { Img } from "@chakra-ui/image";
import { VStack, Box, Text, Heading } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuList } from "@chakra-ui/menu";
import { HiPlus } from "react-icons/hi";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";


interface IMoviesList {
  onClick?: () => void;
  AddToFavorite?: (movie: IMoviesList) => void;
  getSpecificMovie?: (movie: IMoviesList) => void;
  type?: string;
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  id?: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}
const MovieCard = ({
  backdrop_path,
  title,
  release_date,
  popularity,
  type,
  poster_path,
  onClick,
  AddToFavorite,
  getSpecificMovie,
}: IMoviesList) => {
  return type === "upComing" ? (
    <VStack
      justifyContent="center"
      alignItems="center"
      h="100%"
      minW="130px"
      ml="25px"
      position="relative"
    >
      
      <Img
        cursor="pointer"
        onClick={onClick}
        src={backdrop_path || poster_path}
        borderRadius="8px"
        w="75%"
        h="70%"
        _hover={{ transform: "translateY(-4px)", borderColor:"gray" }}
        transition="border 0.2s, ease 0s, transform 0.2s"
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
        </MenuList>
      </Menu>
    </VStack>
  ) : type === "favorites" ? (
    <VStack
      justifyContent="center"
      alignItems="center"
      position="relative"
      m="1rem"
    >
      <Box
        onClick={onClick}
        cursor="pointer"
        fontSize="25px"
        color="red"
        position="absolute"
        top="2"
        right="1"
        _hover={{ color: "green" }}
      >
        <AiFillMinusCircle />
      </Box>
      <Img
        onClick={getSpecificMovie}
        cursor="pointer"
        src={backdrop_path || poster_path}
        borderRadius="8px"
        w="130px"
        h="80%"
        _hover={{ transform: "translateY(-7px)", borderColor:"gray" }}
        transition="border 0.2s, ease 0s, transform 0.2s"
      />
      <Heading
        fontWeight="200"
        fontSize="15px"
        h="40px"
        w="120px"
        m="0"
        color="fontColor.white100"
      >
        {title}
      </Heading>
    </VStack>
  ) : (
    <VStack
      justifyContent="center"
      alignItems="center"
      position="relative"
      m="1rem"
    >
      <Box
        onClick={AddToFavorite}
        cursor="pointer"
        fontSize="25px"
        color="white"
        position="absolute"
        top="2"
        right="1"
        _hover={{ color: "green" }}
      >
        <AiFillPlusCircle />
      </Box>
      <Img
        onClick={onClick}
        cursor="pointer"
        src={backdrop_path || poster_path}
        borderRadius="8px"
        w="130px"
        h="80%"
        _hover={{ transform: "translateY(-7px)", borderColor:"gray" }}
        transition="border 0.2s, ease 0s, transform 0.2s"
      />
      <Heading
        fontWeight="200"
        fontSize="15px"
        h="40px"
        w="120px"
        m="0"
        color="fontColor.white100"
      >
        {title}
      </Heading>
    </VStack>
  );
};
export default MovieCard;
