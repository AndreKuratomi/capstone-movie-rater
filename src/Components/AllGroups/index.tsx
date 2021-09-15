import MovieContainer from "../MovieContainer";
import { Flex, Heading, Text, Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import BoxContainer from "../BoxContainer";
import CardGroup from "../CardGroups";
import {
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useMediaQuery,
} from "@chakra-ui/react";
import Chat from "../Chat";
import { BsSearch } from "react-icons/bs";
import { useDisclosure } from "@chakra-ui/hooks";
import { IoArrowRedoCircle } from "react-icons/io5";
const AllGroups = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [mobileVersion] = useMediaQuery("(max-width: 500px)");

  return (
    <Flex
      w="85%"
      h="100vh"
      justifyContent="flex-start"
      alignItems="center"
      flexDirection="column"
      margin="auto"
    >
      <MovieContainer>
        <Flex mb="25px" justifyContent="flex-end" flexDirection="column">
          <Flex bg="white" borderRadius="15px">
            <Input w="100%" placeholder="Search Group" border="none" />
            <hr />
            <Button hover="fontColor.black800" bgColor="red" color="black">
              <BsSearch />
            </Button>
          </Flex>
          <Text color="white" padding="0.5rem" maxWidth="60%" margin="auto">
            Welcome to the group section! Here you can chat with people who have
            the same insterest as you!
          </Text>
        </Flex>
        <Heading
          fontSize="25px"
          w="72%"
          fontWeight="400"
          mb="3px"
          color="white"
          textAlign="center"
        >
          Groups
        </Heading>
        <Box
          display="flex"
          alignItems="center"
          overflow={mobileVersion ? "scroll" : "hidden"}
          justifyContent={mobileVersion ? "center" : "normal"}
          flexWrap="wrap"
        >
          <Box
            display="flex"
            flexDirection="column"
            m="1rem"
            overflow={mobileVersion ? "scroll" : "hidden"}
          >
            <CardGroup
              name="Horror"
              img="https://assets0.minhaserie.com.br/uploads/editor_pictures/000/063/877/content_pic.jpg"
            />

            <Button
              onClick={onOpen}
              rightIcon={<IoArrowRedoCircle color="white" />}
              bg="#440000"
              _focus={{ boxShadow: "none" }}
            ></Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
            </Modal>
          </Box>
          <Box display="flex" flexDirection="column" m="1rem">
            <CardGroup
              name="Marvel"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-wB7YKufzDTJPMwFOk8YnK5Y0CKzaOxjEyg&usqp=CAU"
            />

            <Button
              onClick={onOpen}
              rightIcon={<IoArrowRedoCircle color="white" />}
              bg="#440000"
              _focus={{ boxShadow: "none" }}
            ></Button>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
            </Modal>
          </Box>
          <Box display="flex" flexDirection="column" m="1rem">
            <CardGroup
              name="Sci-Fi"
              img="https://www.ecinematografico.com.br/wp-content/uploads/2019/06/AD_ASTRA_Poster2_N_-701x1024.jpg"
            />
            <Button
              onClick={onOpen}
              rightIcon={<IoArrowRedoCircle color="white" />}
              bg="#440000"
              _focus={{ boxShadow: "none" }}
            ></Button>

            <Modal isOpen={isOpen} onClose={onClose} size="2xl">
              <ModalOverlay />
              <ModalContent h="60%">
                <ModalHeader bg="#440000" color="white">
                  Bem vindo ao CHAT!
                </ModalHeader>
                <ModalCloseButton
                  focusBorderColor="none"
                  color="white"
                  _focus={{ boxShadow: "none" }}
                />
                <ModalBody w="100%" h="50%" overflow="scroll" padding="0px">
                  <Chat />
                </ModalBody>
              </ModalContent>
            </Modal>
          </Box>
        </Box>
      </MovieContainer>
    </Flex>
  );
};

export default AllGroups;
