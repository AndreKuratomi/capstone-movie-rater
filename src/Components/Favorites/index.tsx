import MovieContainer from "../MovieContainer";
import { Flex, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import BoxContainer from "../BoxContainer";
import { Input } from "@chakra-ui/react";

import { BsSearch } from "react-icons/bs";

const Favorites = () =>{
    return(
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
          Favorites
        </Heading>
        <BoxContainer type="Browse">
          {}
        </BoxContainer>
      </MovieContainer>
    </Flex>
    )
}

export default Favorites