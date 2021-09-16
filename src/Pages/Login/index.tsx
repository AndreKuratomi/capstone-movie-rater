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
  useToast,
} from "@chakra-ui/react";

import LogoLogin from "../../Assets/img/img_login.png";
import { Flex, Stack } from "@chakra-ui/layout";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { Input } from "../../Components/Form/Input";

import NavMobileForRegAndLog from "../../Components/NavMobileForRegAndLog";
import NavBarForRegAndLog from "../../Components/NavBarForRegAndLog";

const Login = () => {
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

  const { setAuth } = useAuth();
  const history = useHistory();

  const toast = useToast();

  const addSuccessToast = () => {
    toast({
      description: "",
      duration: 5000,
      position: "top",
      status: "success",
      title: "Login realizado com sucesso!",
    });
  };

  const addFailToast = () => {
    toast({
      description: "Verifique os dados preenchidos!",
      duration: 5000,
      position: "top",
      status: "error",
      title: "Falha no login!",
    });
  };

  const submitFunction = (data: ILogin) => {
    api
      .post("login/", data)
      .then((response) => {
        const { accessToken } = response.data;
        const decoded = jwtDecode<JwtPayload>(accessToken);
        setAuth(accessToken);
        window.localStorage.setItem(
          "@movies: token",
          JSON.stringify(accessToken)
        );
        addSuccessToast();
        history.push("/dashboard", { user: decoded.sub });
      })
      .catch((_) => {
        addFailToast();
      });
  };

  const [mobileVersion] = useMediaQuery("(max-width: 500px)");

  return (
    <Box bg="#000" height="100vh" overflow="hidden">
      <Box>
        {mobileVersion ? <NavMobileForRegAndLog /> : <NavBarForRegAndLog />}
        {mobileVersion ? (
          <>
            <Box
              bgImage={`url(${LogoLogin})`}
              backgroundRepeat="no-repeat"
              backgroundSize="contain"
              height="150px"
              width="150px"
              maxWidth="400px"
              maxHeight="400px"
              minWidth="320px"
              minHeight="400px"
              margin="0 auto"
              position="relative"
              bottom="0px"
              zIndex="1"
            ></Box>

            <Flex
              align="center"
              direction="column"
              position="relative"
              bottom="150px"
              zIndex="2"
            >
              <Box>
                <form onSubmit={handleSubmit(submitFunction)}>
                  <FormControl
                    align="center"
                    borderBottom="4px solid white"
                    padding="1.5rem 4rem"
                  >
                    <Stack spacing="2">
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
                    <Button
                      bg="red.500"
                      color="white"
                      mt="5"
                      type="submit"
                      _hover={{ bg: "red.500" }}
                    >
                      Logar
                    </Button>
                  </FormControl>
                </form>
                <Box marginTop="3.5">
                  <Stack spacing="3.5">
                    <Flex align="center" color="white" direction="column">
                      <Text as="span" align="center">
                        Ainda não tem cadastro? Então vamos ao{" "}
                        <Link as={ReachLink} to="/signup">
                          Login
                        </Link>
                      </Text>
                      <Link as={ReachLink} to="/">
                        Voltar para a página principal
                      </Link>
                    </Flex>
                  </Stack>
                </Box>
              </Box>
            </Flex>
          </>
        ) : (
          <>
            <Box
              bgImage={`url(${LogoLogin})`}
              backgroundRepeat="no-repeat"
              backgroundSize="contain"
              height="300px"
              width="300px"
              maxWidth="400px"
              maxHeight="400px"
              minWidth="400px"
              minHeight="400px"
              margin="0 auto"
              position="relative"
              bottom="85px"
              zIndex="1"
            ></Box>

            <Flex
              align="center"
              direction="column"
              position="relative"
              bottom="120px"
              zIndex="2"
            >
              <Box>
                <form onSubmit={handleSubmit(submitFunction)}>
                  <FormControl
                    align="center"
                    borderBottom="4px solid white"
                    padding="0.5rem 4rem"
                  >
                    <Stack spacing="2">
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
                    <Button
                      bg="red.500"
                      color="white"
                      mt="3"
                      type="submit"
                      _hover={{ bg: "red.500" }}
                    >
                      Logar
                    </Button>
                  </FormControl>
                </form>
                <Box marginTop="3.5">
                  <Stack spacing="3.5">
                    <Flex align="center" color="white" direction="column">
                      <Text as="span" align="center">
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
              </Box>
            </Flex>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Login;
