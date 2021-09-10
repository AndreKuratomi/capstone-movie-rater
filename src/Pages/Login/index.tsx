import { useHistory, Link as ReachLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAuth } from "../../Providers/Auth";
import jwtDecode, { JwtPayload } from "jwt-decode";
import api from "../../Services/api";

import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
} from "@chakra-ui/react";

import LogoLogin from "../../Assets/img/imgLogin.png";
import { Flex, Stack } from "@chakra-ui/layout";
import { FaUserAlt, FaLock } from "react-icons/fa";

import { useLogin } from "../../Providers/Login";
import NavBar from "../../Components/NavBar";

import { FieldError } from "react-hook-form";
// import { IconType } from "react-icons/lib";
import { useState, useEffect } from "react";

// interface IInput {
//   problem?: FieldError | null;
//   // icon: IconType;
// }

// type inputColorOptions = {
//   [keys: string]: string;
// };

// const statusColor: inputColorOptions = {
//   problem: "red.300",
//   default: "gray.500",
// };

export const Login = () =>
  // { problem = null }: IInput
  {
    // const [colors, setColors] = useState<string>("default");

    // useEffect(() => {
    //   if (!problem) {
    //     return setColors("error");
    //   }
    // }, [problem]);

    interface ILogin {
      username: string;
      password: string;
    }

    const formSchema = yup.object().shape({
      username: yup
        .string()
        .required("Required input!")
        .min(4, "Minimum 4 characters!"),
      password: yup
        .string()
        .required("Required input!")
        .min(8, "Minimum 8 characters!"),
    });

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(formSchema),
    });

    // const { signIn } = useLogin();
    const { setAuth } = useAuth();
    const history = useHistory();

    const submitFunction = (data: ILogin) => {
      console.log(data);
      // signIn(data);
      api
        .post("login/", data)
        .then((response) => {
          const { access } = response.data;
          const decoded = jwtDecode<JwtPayload>(access);
          setAuth(access);
          console.log("Login feito com sucesso!");
          history.push("/dashboard", { user: decoded.sub });
          localStorage.setItem("@movies: token", JSON.stringify(access));
        })
        .catch(
          (_) => "Não foi possível fazer o login. Verifique dados informados"
        );
      history.push("/dashboard");
    };
    return (
      <>
        <NavBar />
        <Box bg="#000">
          <Image
            src={LogoLogin}
            alt="logoImage"
            // boxSize="250px"
            objectFit="cover"
            bg="#000"
            w="50%"
            align="center"
            z-index="1"
            margin="0 20rem"
          />
        </Box>
        <Flex align="center" bg="#000" direction="column" height="100vh">
          <form onSubmit={handleSubmit(submitFunction)}>
            <FormControl
              align="center"
              borderBottom="4px solid white"
              // margin=""
              padding="3.5rem 10rem"
              // w="50%"
              // isInvalid={!!problem}
            >
              <Stack spacing="3.5">
                <InputGroup>
                  <InputLeftElement children={<FaUserAlt />} />
                  <Input
                    bg="#FFF"
                    // borderColor={statusColor[colors]}
                    // color={statusColor[colors]}
                    icon={<FaUserAlt />}
                    size="md"
                    variant="outlined"
                    placeholder="Usuário"
                    {...register("username")}
                  />
                  <FormErrorMessage>
                    {errors.username?.message}
                  </FormErrorMessage>
                  {!!errors && (
                    <FormErrorMessage>{errors.message}</FormErrorMessage>
                  )}
                </InputGroup>
                <InputGroup>
                  <InputLeftElement children={<FaLock />} />
                  <Input
                    bg="#FFF"
                    // borderColor={statusColor[colors]}
                    // color={statusColor[colors]}
                    placeholder="Senha"
                    size="md"
                    type="password"
                    variant="outlined"
                    {...register("password")}
                  />
                  {!!errors && (
                    <FormErrorMessage>{errors.message}</FormErrorMessage>
                  )}
                </InputGroup>
              </Stack>
              <Button
                // onClick={handleSubmit(submitFunction)}
                bg="#F00"
                color="white"
                margin-top="10"
                type="submit"
              >
                Registrar
              </Button>
            </FormControl>
          </form>
          <Box marginTop="3.5">
            <Stack spacing="3.5">
              <Flex align="center" color="white" direction="column">
                <Text>
                  Ainda não tem cadastro? Então vamos ao
                  <Link as={ReachLink} to="/register">
                    Cadastro
                  </Link>
                </Text>
                <Link as={ReachLink} to="/">
                  Voltar para a página principal
                </Link>
              </Flex>
            </Stack>
          </Box>
        </Flex>
      </>
    );
  };
