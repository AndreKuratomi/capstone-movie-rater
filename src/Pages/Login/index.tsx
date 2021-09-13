import { useHistory, Link as ReachLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAuth } from "../../Providers/Auth";
import jwtDecode, { JwtPayload } from "jwt-decode";
import api from "../../Services/api";

import {
  useMediaQuery,
  Box,
  Button,
  FormControl,
  Link,
  Text,
} from "@chakra-ui/react";

import LogoLogin from "../../Assets/img/img login.png";
import { Flex, Stack } from "@chakra-ui/layout";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { Input } from "../../Components/Form/Input";

import { useLogin } from "../../Providers/Login";
import NavBar from "../../Components/NavBar";
import NavMobile from "../../Components/NavMobile";

<<<<<<< HEAD
export const Login = () => {
  interface ILogin {
    username: string;
    password: string;
  }

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Preenchimento obrigatório!")
      .email("Email inválido!"),
    password: yup
      .string()
      .required("Preenchimento obrigatório!")
      .min(8, "No mínimo 8 caracteres!"),
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
      .post("/login/", data)
      .then((response) => {
        const { accessToken } = response.data;
        const decoded = jwtDecode<JwtPayload>(accessToken);
        setAuth(accessToken);
        window.localStorage.clear();
        window.localStorage.setItem(
          "@movies: token",
          JSON.stringify(accessToken)
=======
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

const Login = () =>
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
      email: string;
      password: string;
    }

    const formSchema = yup.object().shape({
      username: yup
        .string()
        .required("Required input!")
        .min(4, "Minimum 4 characters!"),
      email: yup.string().required("Required input!").email("Not valid email!"),
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
      // signIn(data);
      api
        .post("/login/", data)
        .then((response) => {
          const { accessToken } = response.data;
          const decoded = jwtDecode<JwtPayload>(accessToken);
          setAuth(accessToken);
          window.localStorage.clear();
          window.localStorage.setItem(
            "@movies: token",
            JSON.stringify(accessToken)
          );
          history.push("/dashboard", { user: decoded.sub });
        })
        .catch((_) =>
          console.log(
            "Não foi possível fazer o login. Verifique dados informados"
          )
>>>>>>> b018c87c2dcaeed326d265ccb17560f23e04a7c1
        );
        history.push("/dashboard", { user: decoded.sub });
      })
      .catch((_) =>
        console.log(
          "Não foi possível fazer o login. Verifique dados informados"
        )
      );
  };

  const [mobileVersion] = useMediaQuery("(max-width: 768px)");
  const [desktopVersion] = useMediaQuery("(min-width:768px)");

  return (
    <>
      {mobileVersion ? <NavMobile /> : <NavBar />}

      <Flex align="center" bg="#000" direction="column" height="100vh">
        <form onSubmit={handleSubmit(submitFunction)}>
          {mobileVersion ? (
            <Box bgImage={LogoLogin}>
              <FormControl
                align="center"
                borderBottom="4px solid white"
                padding="1.5rem 4rem"
              >
                <Stack spacing="5">
                  <Input
                    error={errors.email}
                    icon={MdEmail}
                    placeholder="Email"
                    type="email"
                    {...register("email")}
                  />
                  <Input
                    error={errors.password}
                    icon={FaLock}
                    placeholder="Senha"
                    type="password"
                    {...register("password")}
                  />
                </Stack>
                <Button bg="#F00" color="white" margin-top="10" type="submit">
                  Registrar
                </Button>
              </FormControl>
            </Box>
          ) : (
<<<<<<< HEAD
            <Box bgImage={LogoLogin}>
              <FormControl
                align="center"
                borderBottom="4px solid white"
                padding="3.5rem 10rem"
              >
                <Stack spacing="7">
                  <Input
                    error={errors.email}
                    icon={MdEmail}
                    placeholder="Email"
                    {...register("email")}
                  />
                  <Input
                    error={errors.password}
                    icon={FaLock}
                    placeholder="Senha"
                    {...register("password")}
                  />
                </Stack>
                <Button bg="#F00" color="white" margin-top="2" type="submit">
                  Registrar
                </Button>
              </FormControl>
=======
            <Image
              src={LogoLogin}
              alt="logoImage"
              objectFit="cover"
              bg="#000"
              w="50%"
              align="center"
              z-index="1"
              margin="0 20rem"
            />
          )}

          <Flex align="center" bg="#000" direction="column" height="100vh">
            <form onSubmit={handleSubmit(submitFunction)}>
              {mobileVersion ? (
                <FormControl
                  align="center"
                  borderBottom="4px solid white"
                  padding="1.5rem 4rem"
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
                        // icon={<FaUserAlt />}
                        size="md"
                        variant="outlined"
                        placeholder="Username"
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
                      <InputLeftElement children={<MdEmail />} />
                      <Input
                        bg="#FFF"
                        // borderColor={statusColor[colors]}
                        // color={statusColor[colors]}
                        placeholder="Email"
                        size="md"
                        type="email"
                        variant="outlined"
                        {...register("email")}
                      />
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
                        placeholder="Password"
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
                  <Button bg="#F00" color="white" margin-top="10" type="submit">
                    Enter
                  </Button>
                </FormControl>
              ) : (
                <FormControl
                  align="center"
                  borderBottom="4px solid white"
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
                        // icon={<FaUserAlt />}
                        size="md"
                        variant="outlined"
                        placeholder="Username"
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
                      <InputLeftElement children={<MdEmail />} />
                      <Input
                        bg="#FFF"
                        // borderColor={statusColor[colors]}
                        // color={statusColor[colors]}
                        placeholder="Email"
                        size="md"
                        type="email"
                        variant="outlined"
                        {...register("email")}
                      />
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
                        placeholder="Password"
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
                  <Button bg="#F00" color="white" margin-top="10" type="submit">
                    Enter
                  </Button>
                </FormControl>
              )}
            </form>
            <Box marginTop="3.5">
              <Stack spacing="3.5">
                <Flex align="center" color="white" direction="column">
                  <Text as="span" align="center">
                    Not a member yet? Come and join us {" "}
                    <Link as={ReachLink} to="/signup">
                      Sign Up
                    </Link>
                  </Text>
                  <Link marginTop="2" as={ReachLink} to="/">
                    Back to homepage
                  </Link>
                </Flex>
              </Stack>
>>>>>>> b018c87c2dcaeed326d265ccb17560f23e04a7c1
            </Box>
          )}
        </form>
        <Box marginTop="3.5">
          <Stack spacing="3.5">
            <Flex align="center" color="white" direction="column">
              <Text>
                Ainda não tem cadastro? Então vamos ao{" "}
                <Link as={ReachLink} to="/signup">
                  Cadastro
                </Link>
              </Text>
              <Link as={ReachLink} to="/">
                Voltar para a página principal
              </Link>
            </Flex>
          </Stack>
        </Box>
<<<<<<< HEAD
      </Flex>
    </>
  );
};
=======
      </>
    );
  };

  export default Login
>>>>>>> b018c87c2dcaeed326d265ccb17560f23e04a7c1
