import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

interface ModalSuccessProps {
  isOpen: boolean;
  onClose: () => void;
  page: string;
  onClick: () => void;
}

export const ModalSuccess = ({
  isOpen,
  onClose,
  page,
  onClick,
}: ModalSuccessProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent borderRadius="10" w="90%">
        <ModalHeader
          bg="green.500"
          borderTopLeftRadius="10"
          borderTopRightRadius="10"
          color="fontColor.white100"
        >
          Sucesso!
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text align="center"> {page} realizado com sucesso!</Text>
        </ModalBody>

        <ModalFooter justifyContent="center">
          <Button colorScheme="blue" onClick={onClick}>
            Prosseguir
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
