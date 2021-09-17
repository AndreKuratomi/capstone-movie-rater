import { Box, Image, Text } from "@chakra-ui/react";

interface ICardGroups {
  img: string;
  name: string;
}

const CardGroup = ({ img, name }: ICardGroups) => {
  return (
    <Box
      _hover={{ transform: "translateY(-1px)", borderColor:"gray" }}
      transition="border 0.2s, ease 0s, transform 0.2s"
      focus
    >
      <Text
        textAlign="center"
        bg="#443919"
        borderTopLeftRadius="4px"
        borderTopRightRadius="4px"
        color="white"
      >
        {name}
      </Text>
      <Image src={img} alt={name} w="140px" h="215px" />
    </Box>
  );
};

export default CardGroup;
