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
import About from "../../Assets/img/about.png";
import carlos from "../../Assets/img/carlos.png"
import gabi from "../../Assets/img/gabi.png"
import rafael from "../../Assets/img/rafael.png"
import maikol from "../../Assets/img/maikol.png"
import andre from "../../Assets/img/andre.png"

const AboutUs = () => {
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
                    name="Carlos"
                    description="Scrum Master"
                    image={carlos}
                    linkedin="https://www.linkedin.com/in/carlos-lima-773337215/"
                    email="hiro1kz77@gmail.com"
                  />
                  <InfoCard
                    name="Gabriela"
                    description="Tech Leader"
                    image={gabi}
                    linkedin="https://www.linkedin.com/in/gabriela-avelino/"
                    email="gabrielarodrigues432@gmail.com"
                  />
                  <InfoCard
                    name="Rafael"
                    description="Product Owner"
                    image={rafael}
                    linkedin="https://www.linkedin.com/in/rafael-leonardo-839516211/"
                    email="rafael.zoe26@gmail.com"
                  />
                  <InfoCard
                    name="Maikol"
                    description="Quality Assurance"
                    image={maikol}
                    linkedin="https://www.linkedin.com/in/maikol-moraes-107b57205/"
                    email="maikolmoraesas@gmail.com"
                  />
                  <InfoCard
                    name="André"
                    description="Quality Assurance"
                    image={andre}
                    linkedin="https://www.linkedin.com/in/andre-kuratomi/"
                    email="andrekuratomi@gmail.com"
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
          >
            <Box bg="rgba(0, 0, 0, 0.671)">
              <Text textAlign="center" fontSize="2xl">
                Somos desenvolvedores apaixonados por filmes, que decidimos criar uma plataforma
                mais intuitiva!
              </Text>
              <Box margin="auto">
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                  <InfoCard
                    name="Carlos"
                    description="Scrum Master"
                    image={carlos}
                    linkedin="https://www.linkedin.com/in/carlos-lima-773337215/"
                    email="hiro1kz77@gmail.com"
                  />
                  <InfoCard
                    name="Gabriela"
                    description="Tech Leader"
                    image={gabi}
                    linkedin="https://www.linkedin.com/in/gabriela-avelino/"
                    email="gabrielarodrigues432@gmail.com"
                  />
                  <InfoCard
                    name="Rafael"
                    description="Product Owner"
                    image={rafael}
                    linkedin="https://www.linkedin.com/in/rafael-leonardo-839516211/"
                    email="rafael.zoe26@gmail.com"
                  />
                  <InfoCard
                    name="Maikol"
                    description="Quality Assurance"
                    image={maikol}
                    linkedin="https://www.linkedin.com/in/maikol-moraes-107b57205/"
                    email="maikolmoraesas@gmail.com"
                  />
                  <InfoCard
                    name="André"
                    description="Quality Assurance"
                    image={andre}
                    linkedin="https://www.linkedin.com/in/andre-kuratomi/"
                    email="andrekuratomi@gmail.com"
                  />
                </Carousel>
              </Box>
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

export default AboutUs