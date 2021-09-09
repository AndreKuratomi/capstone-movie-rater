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
} from "@chakra-ui/react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./styles.css";
import Group from "../../Assets/img/group.png";
import Film from "../../Assets/img/film-reel.png";
import Best from "../../Assets/img/best-product.png";
import Faixa from "../../Assets/img/faixa.png";
import Movie from "../../Assets/img/cinema.jpg";
import Banner from "../../Assets/img/fundo1.png";
import ReactPlayer from "react-player/youtube";

export const Landpage = () => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
      description: "Descrição de um filmeeeeeeeeeeeeeeeeeeeee",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
      description: "Descrição de um filmeeeeeeeeeeeeeeeeeeeee",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
      description: "Descrição de um filmeeeeeeeeeeeeeeeeeeeee",
    },
  ];

  const [mobileVersion] = useMediaQuery("(max-width: 500px)");
  const [tabletVersion] = useMediaQuery("(max-width: 768px)");

  return (
    <div>
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
            <a href="#video">Conheça o site</a>
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
            <a href="#video">Conheça o site</a>
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
            bem vindo ao movierater!
          </Heading>
          <Heading
            maxWidth="50rem"
            mt="3rem"
            mb="4rem"
            fontFamily="PT Mono"
            textAlign="justify"
            fontSize="2xl"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nisl turpis, vehicula ac turpis dignissim, finibus interdum nulla.
            Nunc posuere mi tellus, sed interdum purus placerat vitae.
          </Heading>
          <ReactImageGallery
            items={images}
            showThumbnails={false}
            showFullscreenButton={false}
            useBrowserFullscreen={false}
            showPlayButton={false}
            showBullets={true}
            autoPlay={true}
          />
        </Box>
        <Box backgroundImage={Faixa} backgroundRepeat="no-repeat" width="100%">
          <Heading textAlign="center" mt="13rem" fontFamily="PT Mono">
            O que se pode fazer no site?
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
                publique e veja review dos seus filmes favoritos.
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
                entre em grupos com pessoas com o mesmo gosto que você.
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
                recomendações dos filmes mais bem avaliados.
              </Text>
            </Box>
          </Flex>
          <Box mb="2rem" w="100%" textAlign="center">
            <Button bg="white" color="black" padding="1rem 2rem">
              Venha fazer parte!
            </Button>
          </Box>
        </Box>
        <Box
          backgroundImage={Movie}
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          width="100%"
          backgroundPosition="bottom"
        >
          <Heading textAlign="center" mb="2rem" mt="2rem" fontFamily="PT Mono">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nisl turpis, vehicula ac turpis dignissim, finibus interdum nulla.
            Nunc posuere mi tellus, sed interdum purus placerat vitae.
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
              developed by equipe 3 © all rights reserved
            </Text>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
    </div>
  );
};
