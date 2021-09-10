import NavBar from "../../Components/NavBar";
import NavMobile from "../../Components/NavMobile";
import {
  Box,
  useMediaQuery,
  Text,
  Breadcrumb,
  BreadcrumbItem,
} from "@chakra-ui/react";
import InfoCard from "../../Components/InfoCard";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import "./styles.css";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import About from "../../Assets/img/about.png";

export const AboutUs = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [mobileVersion] = useMediaQuery("(max-width: 500px)");

  return (
    <Box bg="#2E2A24" height="100%" width="100%">
      {mobileVersion ? <NavMobile /> : <NavBar />}
      <Box height="max-content">
        {mobileVersion ? (
          <Box
            bg="black"
            color="white"
            width="90%"
            margin="auto"
            mt="2rem"
            padding="2rem"
          >
            <Text textAlign="center" fontSize="2xl">
              texto sobre a equipe bem aquuuui texto texto texto texto texto
              texto
            </Text>
            <Box margin="auto" bg="black">
              <Carousel
                responsive={responsive}
                infinite={true}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
              >
                <InfoCard
                  name="Maikol"
                  description="Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
                  image="https://share-cdn.picrew.me/shareImg/org/202109/1242662_uvvFgnyd.png"
                  linkedin="https://www.linkedin.com/in/maikol-moraes-107b57205/"
                  email="maikolmoraesas@gmail.com"
                />
                <InfoCard
                  name="Maikol"
                  description="Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
                  image="https://share-cdn.picrew.me/shareImg/org/202109/1242662_uvvFgnyd.png"
                  linkedin="https://www.linkedin.com/in/maikol-moraes-107b57205/"
                  email="maikolmoraesas@gmail.com"
                />
                <InfoCard
                  name="Maikol"
                  description="Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
                  image="https://share-cdn.picrew.me/shareImg/org/202109/1242662_uvvFgnyd.png"
                  linkedin="https://www.linkedin.com/in/maikol-moraes-107b57205/"
                  email="maikolmoraesas@gmail.com"
                />
                <InfoCard
                  name="Maikol"
                  description="Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
                  image="https://share-cdn.picrew.me/shareImg/org/202109/1242662_uvvFgnyd.png"
                  linkedin="https://www.linkedin.com/in/maikol-moraes-107b57205/"
                  email="maikolmoraesas@gmail.com"
                />
                <InfoCard
                  name="Maikol"
                  description="Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
                  image="https://share-cdn.picrew.me/shareImg/org/202109/1242662_uvvFgnyd.png"
                  linkedin="https://www.linkedin.com/in/maikol-moraes-107b57205/"
                  email="maikolmoraesas@gmail.com"
                />
              </Carousel>
            </Box>
          </Box>
        ) : (
          <Box
            bg="black"
            color="white"
            width="60%"
            margin="auto"
            mt="2rem"
            padding="2rem"
            backgroundImage={About}
            backgroundRepeat="no-repeat"
            backgroundSize="100%"
            backgroundColor="rgba(31, 3, 3, 0.096)"
          >
            <Text textAlign="center" fontSize="2xl">
              texto sobre a equipe bem aquuuui texto texto texto texto texto
              texto
            </Text>
            <Box margin="auto">
              <Carousel
                responsive={responsive}
                infinite={true}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
              >
                <InfoCard
                  name="Maikol"
                  description="Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
                  image="https://share-cdn.picrew.me/shareImg/org/202109/1242662_uvvFgnyd.png"
                  linkedin="https://www.linkedin.com/in/maikol-moraes-107b57205/"
                  email="maikolmoraesas@gmail.com"
                />
                <InfoCard
                  name="Maikol"
                  description="Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
                  image="https://share-cdn.picrew.me/shareImg/org/202109/1242662_uvvFgnyd.png"
                  linkedin="https://www.linkedin.com/in/maikol-moraes-107b57205/"
                  email="maikolmoraesas@gmail.com"
                />
                <InfoCard
                  name="Maikol"
                  description="Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
                  image="https://share-cdn.picrew.me/shareImg/org/202109/1242662_uvvFgnyd.png"
                  linkedin="https://www.linkedin.com/in/maikol-moraes-107b57205/"
                  email="maikolmoraesas@gmail.com"
                />
                <InfoCard
                  name="Maikol"
                  description="Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
                  image="https://share-cdn.picrew.me/shareImg/org/202109/1242662_uvvFgnyd.png"
                  linkedin="https://www.linkedin.com/in/maikol-moraes-107b57205/"
                  email="maikolmoraesas@gmail.com"
                />
                <InfoCard
                  name="Maikol"
                  description="Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
                  image="https://share-cdn.picrew.me/shareImg/org/202109/1242662_uvvFgnyd.png"
                  linkedin="https://www.linkedin.com/in/maikol-moraes-107b57205/"
                  email="maikolmoraesas@gmail.com"
                />
              </Carousel>
            </Box>
          </Box>
        )}
      </Box>
      <Breadcrumb width="100%" bg="#4E4E4E" textAlign="center" mt="4rem">
        <BreadcrumbItem color="white">
          <Text padding="1rem">
            developed by equipe 3 © all rights reserved.
          </Text>
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
  );
};
