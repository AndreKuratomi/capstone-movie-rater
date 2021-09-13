import MovieContainer from "../MovieContainer";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import BoxContainer from "../BoxContainer";
import {
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Image,
} from "@chakra-ui/react";
import Chat from "../Chat";
import { BsSearch } from "react-icons/bs";
import { useDisclosure } from "@chakra-ui/hooks";
import { MdArrowForward } from "react-icons/md";
const AllGroups = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      w="85%"
      h="100vh"
      justifyContent="flex-start"
      alignItems="center"
      flexDirection="column"
    >
      <MovieContainer>
        <Flex w="100%" mb="25px" justifyContent="flex-end">
          <Input
            w="60%"
            color="fontColor.pinkLight"
            borderColor="fontColor.black800"
            placeholder="Search Group"
            bgColor="brown.dark"
          />
          <hr />
          <Button
            hover="fontColor.black800"
            bgColor="brown.dark"
            color="fontColor.pinkLight"
          >
            <BsSearch />
          </Button>
        </Flex>
        <Heading
          fontSize="25px"
          w="72%"
          fontWeight="400"
          mb="3px"
          color="fontColor.pinkLight"
        >
          Groups
        </Heading>
        <BoxContainer>
          <Image src="https://assets0.minhaserie.com.br/uploads/editor_pictures/000/063/877/content_pic.jpg" />
          <Text
            fontSize="20px"
            w="72%"
            fontWeight="400"
            mb="3px"
            color="fontColor.pinkLight"
          >
            {" "}
            Horror{" "}
          </Text>
          <Button onClick={onOpen} rightIcon={<MdArrowForward />}></Button>
        </BoxContainer>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent w="80%" h="50%">
            <ModalHeader>Chat</ModalHeader>
            <ModalCloseButton />
            <ModalBody w="100%" h="100%">
              <Chat />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <BoxContainer>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-wB7YKufzDTJPMwFOk8YnK5Y0CKzaOxjEyg&usqp=CAU" />
          <Text
            fontSize="20px"
            w="72%"
            fontWeight="400"
            mb="3px"
            color="fontColor.pinkLight"
          >
            {" "}
            Marvel{" "}
          </Text>

          <Button onClick={onOpen} rightIcon={<MdArrowForward />}></Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent w="80%" h="50%">
              <ModalHeader>CHAT</ModalHeader>
              <ModalCloseButton />
              <ModalBody w="100%" h="100%">
                <Chat />
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </BoxContainer>
        <BoxContainer>
          <Image src="https://www.ecinematografico.com.br/wp-content/uploads/2019/06/AD_ASTRA_Poster2_N_-701x1024.jpg" />
          <Text
            fontSize="20px"
            w="72%"
            fontWeight="400"
            mb="3px"
            color="fontColor.pinkLight"
          >
            SCI-FI
          </Text>
          <Button onClick={onOpen} rightIcon={<MdArrowForward />}></Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent w="80%" h="100%">
              <ModalHeader>CHAT</ModalHeader>
              <ModalCloseButton />
              <ModalBody w="100%" h="50%">
                <Chat />
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </BoxContainer>
      </MovieContainer>
    </Flex>
  );
};

export default AllGroups;
