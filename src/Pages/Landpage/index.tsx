import NavBar from "../../Components/NavBar";
import NavMobile from "../../Components/NavMobile";
import {
  Box,
  Button,
  Heading,
  Text,
  Flex,
  Image,
  Breadcrumb,
  BreadcrumbItem,
  useMediaQuery,
  Link
} from "@chakra-ui/react";
import "react-image-gallery/styles/css/image-gallery.css";
import "./styles.css";
import Group from "../../Assets/img/group.png";
import Film from "../../Assets/img/film-reel.png";
import Best from "../../Assets/img/best-product.png";
import Faixa from "../../Assets/img/faixa.png";
import Movie from "../../Assets/img/cinema.jpg";
import Banner from "../../Assets/img/fundo1.png";
import ReactPlayer from "react-player/youtube";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link as RouteLink } from "react-router-dom";

const Landpage = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [mobileVersion] = useMediaQuery("(max-width: 500px)");
  const [tabletVersion] = useMediaQuery("(max-width: 768px)");

  return (
    <Box>
      {mobileVersion ? <NavMobile /> : <NavBar />}
      <Box
        bg="black"
        backgroundImage={Banner}
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
        height="100%"
        color="white"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {mobileVersion ? (
          <Button
            variant="outline"
            bg="#C11B1B"
            color="white"
            padding="25px 40px"
            border="none"
            borderRadius="0px"
            _hover={{ bg: "#440000" }}
            position="absolute"
            left="20px"
            top="55px"
            outline="none"
            href="#video"
          >
            <Link href="#video">Site overview</Link>
          </Button>
        ) : (
          <Button
            variant="outline"
            bg="#C11B1B"
            color="white"
            padding="25px 40px"
            border="none"
            borderRadius="0px"
            _hover={{ bg: "#440000" }}
            position="absolute"
            left="25px"
            top="160px"
            outline="none"
            href="#video"
          >
            <Link href="#video">Site overview</Link>
          </Button>
        )}

        <Box
          bg="rgba(0, 0, 0, 0.4)"
          display="flex"
          flexDirection="column"
          alignItems="center"
          padding="0rem 3rem"
          mt="1rem"
        >
          <Heading fontFamily="PT Mono" mt="3rem" textAlign="center">
            Welcome to MovieRater!
          </Heading>
          <Heading
            maxWidth="50rem"
            mt="3rem"
            mb="4rem"
            fontFamily="PT Mono"
            textAlign="justify"
            fontSize="2xl"
          >
            All thrending movies in the same place!
          </Heading>
        </Box>
        <Box w="60%">
          <Carousel
            responsive={responsive}
            infinite={true}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            <Box>
              <Image src="https://picsum.photos/id/1018/1000/600/" />
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur vestibulum ut dolor vel malesuada. Donec tincidunt,
                nisl id bibendum dapibus, libero massa vehicula mi, at tempor ex
                dui vel ligula. Donec euismod tempor volutpat. Morbi eu urna
                finibus mauris egestas scelerisque.{" "}
              </Text>
            </Box>
            <Box>
              <Image src="https://picsum.photos/id/1018/1000/600/" />
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur vestibulum ut dolor vel malesuada. Donec tincidunt,
                nisl id bibendum dapibus, libero massa vehicula mi, at tempor ex
                dui vel ligula. Donec euismod tempor volutpat. Morbi eu urna
                finibus mauris egestas scelerisque.{" "}
              </Text>
            </Box>
            <Box>
              <Image src="https://picsum.photos/id/1018/1000/600/" />
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur vestibulum ut dolor vel malesuada. Donec tincidunt,
                nisl id bibendum dapibus, libero massa vehicula mi, at tempor ex
                dui vel ligula. Donec euismod tempor volutpat. Morbi eu urna
                finibus mauris egestas scelerisque.{" "}
              </Text>
            </Box>
            <Box>
              <Image src="https://picsum.photos/id/1018/1000/600/" />
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur vestibulum ut dolor vel malesuada. Donec tincidunt,
                nisl id bibendum dapibus, libero massa vehicula mi, at tempor ex
                dui vel ligula. Donec euismod tempor volutpat. Morbi eu urna
                finibus mauris egestas scelerisque.{" "}
              </Text>
            </Box>
          </Carousel>
        </Box>
        <Box backgroundImage={Faixa} backgroundRepeat="no-repeat" width="100%">
          <Heading textAlign="center" mt="9rem" fontFamily="PT Mono">
            What can you do on MovieRater?
          </Heading>
          <Flex
            flexWrap="wrap"
            justifyContent="space-evenly"
            mt="4rem"
            mb="2rem"
          >
            <Box
              padding="1rem"
              alignItems="center"
              display="flex"
              flexDirection="column"
              alignContent="center"
              justifyContent="center"
              border="2px solid white"
              bg="rgba(0, 0, 0, 0.7 )"
              margin="0rem 0rem 1rem 0rem"
            >
              <Image src={Film} alt="film" width="70%" />
              <Text maxWidth="10rem" mt="1rem" fontFamily="PT Mono">
                post and share reviews of your favorite movies.
              </Text>
            </Box>
            <Box
              padding="1rem"
              alignItems="center"
              display="flex"
              flexDirection="column"
              alignContent="center"
              justifyContent="center"
              border="2px solid white"
              bg="rgba(0, 0, 0, 0.7 )"
              margin="0rem 0rem 1rem 0rem"
            >
              <Image src={Group} alt="group" width="70%" />
              <Text maxWidth="10rem" mt="1rem" fontFamily="PT Mono">
                join group chats with same interests.
              </Text>
            </Box>
            <Box
              padding="1rem"
              alignItems="center"
              display="flex"
              alignContent="center"
              flexDirection="column"
              justifyContent="center"
              border="2px solid white"
              bg="rgba(0, 0, 0, 0.7 )"
              margin="0rem 0rem 1rem 0rem"
            >
              <Image src={Best} alt="fav" width="70%" />
              <Text maxWidth="10rem" mt="0.75rem" fontFamily="PT Mono">
                best rated movies recomendation.
              </Text>
            </Box>
          </Flex>
          <Box mb="2rem" w="100%" textAlign="center">
            <Link as={RouteLink} to="/signup">
              <Button bg="white" color="black" padding="1rem 2rem">
                Come and join us!
              </Button>
            </Link>
          </Box>
        </Box>
        <Box
          backgroundImage={Movie}
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          width="100%"
          backgroundPosition="bottom"
        >
          <Heading
            textAlign="center"
            mb="2rem"
            mt="2rem"
            fontFamily="PT Mono"
            maxWidth="75%"
            margin="auto"
          >
            Take a look on our community and intuitive design!
          </Heading>
          <Box display="flex" justifyContent="center" w="85%" margin="auto">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=b80TWrBflh8"
              muted={true}
              id="video"
            />
          </Box>
        </Box>
        <Breadcrumb width="100%" bg="#4E4E4E" textAlign="center" mt="4rem">
          <BreadcrumbItem color="white">
            <Text padding="1rem">
              developed by group 3 © all rights reserved
            </Text>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
    </Box>
  );
};

export default Landpage