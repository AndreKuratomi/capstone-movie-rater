import { VStack, Heading, Box, Text, Flex } from "@chakra-ui/layout";
import Logo from "../../Assets/img/logo.png";
import { ImHome3 } from "react-icons/im";
import { RiSearchEyeLine } from "react-icons/ri";
import { TiGroup } from "react-icons/ti";
import { MdMovieCreation } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxFill } from "react-icons/ri";
import { Link as ReachLink } from "react-router-dom";
import { Link, Image, Button } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/modal";
import { Select } from "../../Components/Form/Select";
import { useUser } from "../../Providers/User";
import { useForm } from "react-hook-form";
import { Input } from "@chakra-ui/input";

const MenuAside = () => {
  const { userName, category, updateCategory } = useUser();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit } = useForm();
  const logOut = () => {
    localStorage.clear();
  };

  return (
    <VStack
      w="250px"
      minH="100%"
      bgColor="red.800"
      borderRadius="0px 15px 15px 0px"
      mr="10px"
    >
      <Flex
        flexDirection="column"
        alignItems="center"
        color="fontColor.white100"
        h="100vh"
        w="100%"
        fontFamily="Inder, sans-serif"
      >
        <Flex justifyContent="center">
          <Image src={Logo} alt="Logo" h="70px" />
        </Flex>
        <Box
          w="100px"
          h="100px"
          borderRadius="50%"
          bgColor="black.transparent500"
        />
        <VStack>
          <Heading fontWeight="light" as="h3" fontSize="25px" m="1rem">
            Menu
          </Heading>
          <Box display="flex" w="150px" alignItems="center">
            <Text fontSize="35px" cursor="pointer">
              <ImHome3 fontSize="1rem" />
            </Text>
            <Heading
              as="p"
              fontSize="20PX"
              ml="5px"
              fontWeight="100"
              lineHeight="35px"
            >
              <Link as={ReachLink} to="/dashboard">
                Home
              </Link>
            </Heading>
          </Box>
          <Box display="flex" w="150px" alignItems="center">
            <Heading fontSize="35px" as="span" cursor="pointer">
              <RiSearchEyeLine fontSize="1rem" />
            </Heading>
            <Heading
              as="p"
              fontSize="20PX"
              ml="5px"
              fontWeight="100"
              lineHeight="35px"
            >
              <Link as={ReachLink} to="/movies">
                Filmes
              </Link>
            </Heading>
          </Box>
          <Box display="flex" w="150px" alignItems="center">
            <Heading fontSize="35px" as="span" cursor="pointer">
              <TiGroup fontSize="1rem" />
            </Heading>
            <Heading
              as="p"
              fontSize="20PX"
              ml="5px"
              fontWeight="100"
              lineHeight="35px"
            >
              <Link as={ReachLink} to="/groups">
                Grupos
              </Link>
            </Heading>
          </Box>
          <Box display="flex" w="150px" alignItems="center">
            <Heading fontSize="35px" as="span" cursor="pointer">
              <MdMovieCreation fontSize="1rem" />
            </Heading>
            <Heading
              as="p"
              fontSize="20PX"
              ml="5px"
              fontWeight="100"
              lineHeight="35px"
            >
              <Link as={ReachLink} to="/mymovies">
                Meus Filmes
              </Link>
            </Heading>
          </Box>
        </VStack>
        <VStack>
          <Heading fontWeight="light" as="h3" fontSize="25px" m="1rem">
            Geral
          </Heading>
          <Box display="flex" w="150px" alignItems="center">
            <Text fontSize="35px" cursor="pointer">
              <CgProfile fontSize="1rem" />
            </Text>
            <Heading
              as="p"
              fontSize="20PX"
              ml="5px"
              fontWeight="100"
              lineHeight="35px"
            >
              <Link onClick={onOpen}>Perfil</Link>
              <Modal
                closeOnOverlayClick={false}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent display="flex" size="sm">
                  <ModalCloseButton />
                  <Box
                    display="flex"
                    flexDirection="column"
                    w="100%"
                    alignItems="center"
                    justifyContent="center"
                    padding="1rem"
                  >
                    <Box
                      w="100px"
                      h="100px"
                      borderRadius="50%"
                      bgColor="black.transparent500"
                      textAlign="center"
                      padding="5px"
                    />
                    <Box display="flex" flexDirection="column" mt="1rem">
                      <Text
                        fontFamily="rounded1C"
                        fontSize="1rem"
                        color="#440000"
                        textAlign="center"
                      >
                        {" "}
                        <b>Usuário:</b> {userName}
                      </Text>
                      <Text
                        fontFamily="rounded1C"
                        fontSize="1rem"
                        color="#440000"
                        textAlign="center"
                      >
                        {" "}
                        <b>Gênero</b> favorito: {category}
                      </Text>
                      <Box padding="1rem" textAlign="center">
                        <form onSubmit={handleSubmit(updateCategory)}>
                          <Input
                            label="Username"
                            {...register("username")}
                            placeholder="Username"
                          />
                          <Select
                            bg="#FFF"
                            color="gray.500"
                            placeholder="Gênero favorito:"
                            {...register("selectGenre")}
                          >
                            <option value="Ação">Ação</option>
                            <option value="Aventura">Aventura</option>
                            <option value="Animação">Animação</option>
                            <option value="Cinema TV">Cinema TV</option>
                            <option value="Comédia">Comédia</option>
                            <option value="Crime">Crime</option>
                            <option value="Documentário">Documentário</option>
                            <option value="Família">Família</option>
                            <option value="Fantasia">Fantasia</option>
                            <option value="Faroeste">Faroeste</option>
                            <option value="Ficção científica">
                              Ficção científica
                            </option>
                            <option value="Guerra">Guerra</option>
                            <option value="História">História</option>
                            <option value="Música">Música</option>
                            <option value="Mistério">Mistério</option>
                            <option value="Romance">Romance</option>
                            <option value="Terror">Terror</option>
                            <option value="Thriller">Thriller</option>
                          </Select>

                          <Button
                            type="submit"
                            bg="#440000"
                            color="white"
                            _hover={{ bg: "#000000" }}
                            focusBorderColor="none"
                            mt="1rem"
                          >
                            Salvar
                          </Button>
                        </form>
                      </Box>
                    </Box>
                  </Box>
                  <ModalBody pb={6}></ModalBody>
                </ModalContent>
              </Modal>
            </Heading>
          </Box>
          <Box display="flex" w="150px" alignItems="center">
            <Heading fontSize="35px" as="span" cursor="pointer">
              <RiLogoutBoxFill fontSize="1rem" />
            </Heading>
            <Heading
              as="p"
              fontSize="20PX"
              ml="5px"
              fontWeight="100"
              lineHeight="35px"
            >
              <Button
                backgroundColor="red.800"
                border="none"
                fontSize="20PX"
                ml="5px"
                fontWeight="100"
                lineHeight="35px"
                _hover={{ bg: "red.800" }}
                onClick={logOut}
                padding="0"
                margin-left="-1px"
              >
                <Link as={ReachLink} to="/">
                  Logout
                </Link>
              </Button>
            </Heading>
          </Box>
        </VStack>
      </Flex>
    </VStack>
  );
};
export default MenuAside;
