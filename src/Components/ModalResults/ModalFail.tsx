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

interface ModalFailProps {
  isOpen: boolean;
  onClose: () => void;
  page: string;
  buttonInfo: string;
}

export const ModalFail = ({
  isOpen,
  onClose,
  page,
  buttonInfo,
}: ModalFailProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent borderRadius="10" w="90%">
        <ModalHeader
          bg="red.500"
          borderTopLeftRadius="10"
          borderTopRightRadius="10"
          color="fontColor.white100"
        >
          Ops..!
        </ModalHeader>
        {/* <ModalCloseButton /> */}
        <ModalBody>
          <Text align="center">Falha no {page}!</Text>
        </ModalBody>

        <ModalFooter justifyContent="center">
          <Button colorScheme="blue" onClick={onClose}>
            Verifique {buttonInfo}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
