import { useHistory, Link as ReachLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import api from "../../Services/api";

import {
  Box,
  Button,
  FormControl,
  Link,
  Text,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";

import { Input } from "../../Components/Form/Input";
import { Select } from "../../Components/Form/Select";

import { Flex, Stack } from "@chakra-ui/layout";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import LogoRegister from "../../Assets/img/img_register2.png";

import NavMobileForRegAndLog from "../../Components/NavMobileForRegAndLog";
import NavBarForRegAndLog from "../../Components/NavBarForRegAndLog";

interface IRegister {
  username: string;
  email: string;
  password: string;
  selectGenre: string;
}

export const Register = () => {
  const formSchema = yup.object().shape({
    username: yup
      .string()
      .required("Preenchimento obrigatório!")
      .min(4, "No mínimo 4 caracteres!"),
    email: yup
      .string()
      .required("Preenchimento obrigatório!")
      .email("Email inválido!"),
    password: yup
      .string()
      .required("Preenchimento obrigatório!")
      .min(8, "No mínimo 8 caracteres!"),
    confirmPassword: yup
      .string()
      .required("Preenchimento obrigatório!")
      .oneOf([yup.ref("password")], "As senhas devem ser idênticas!"),
    selectGenre: yup.string().required("Preenchimento obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  console.log(errors.selectGenre?.message);
  const history = useHistory();
  const [username, setUsername] = useState<string>("");
  const toast = useToast();

  const addSuccessToast = () => {
    toast({
      description: "",
      duration: 5000,
      position: "top",
      status: "success",
      title: "Cadastro realizado com sucesso!",
    });
  };

  const addFailToast = () => {
    toast({
      description: "Verifique o email cadastrado",
      duration: 5000,
      position: "top",
      status: "error",
      title: "Falha no cadastro!",
    });
  };

  const submitFunction = (data: IRegister) => {
    api
      .post("register", data)
      .then((response) => {
        const { accessToken } = response.data;
        addSuccessToast();
        localStorage.setItem("@token: register", JSON.stringify(accessToken));
        history.push("/login");
      })
      .catch((_) => {
        addFailToast();
      });
  };

  const [mobileVersion] = useMediaQuery("(max-width: 500px)");
  const [desktopVersion] = useMediaQuery("(max-width:768px)");

  return (
    <Box bg="#000" height="100vh" overflow="hidden">
      <Box>
        {mobileVersion ? <NavMobileForRegAndLog /> : <NavBarForRegAndLog />}
        {mobileVersion ? (
          <>
            <Box
              bgImage={`url(${LogoRegister})`}
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
              bottom="65px"
              zIndex="1"
            ></Box>

            <Flex
              align="center"
              direction="column"
              position="relative"
              bottom="315px"
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
                        error={errors.username}
                        icon={FaUserAlt}
                        placeholder="Usuário"
                        {...register("username")}
                      />
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
                      <Input
                        error={errors.confirmPassword}
                        icon={FaLock}
                        placeholder="Confirmar senha"
                        type="password"
                        {...register("confirmPassword")}
                      />
                      <Select
                        bg="#FFF"
                        color="gray.500"
                        error={errors.selectGenre}
                        placeholder="Gênero favorito:"
                        {...register("selectGenre")}
                      >
                        <option value="Ação">Ação</option>
                        <option value="Aventura">Aventura</option>
                        <option value="Animação">Animação</option>
                        <option value="Comédia">Comédia</option>
                        <option value="Crime">Crime</option>
                        <option value="Documentário">Documentário</option>
                        <option value="Família">Família</option>
                        <option value="Fantasia">Fantasia</option>
                        <option value="Faroeste">Faroeste</option>
                        <option value="Ficção científica">
                          Ficção científica
                        </option>
                        <option value="Guerra">Guerra</option>
                        <option value="História">História</option>
                        <option value="Música">Música</option>
                        <option value="Mistério">Mistério</option>
                        <option value="Romance">Romance</option>
                        <option value="Terror">Terror</option>
                        <option value="Thriller">Thriller</option>
                      </Select>
                    </Stack>
                    <Button
                      bg="red.500"
                      color="white"
                      mt="5"
                      type="submit"
                      _hover={{ bg: "red.500" }}
                    >
                      Registrar
                    </Button>
                  </FormControl>
                </form>
                <Box marginTop="3.5">
                  <Stack spacing="3.5">
                    <Flex align="center" color="white" direction="column">
                      <Text as="span" align="center">
                        Já tem cadastro? Então vamos ao{" "}
                        <Link as={ReachLink} to="/login">
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
              bgImage={`url(${LogoRegister})`}
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
              bottom="310px"
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
                        error={errors.username}
                        icon={FaUserAlt}
                        placeholder="Usuário"
                        {...register("username")}
                      />
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
                      <Input
                        error={errors.confirmPassword}
                        icon={FaLock}
                        placeholder="Confirmar senha"
                        type="password"
                        {...register("confirmPassword")}
                      />
                      <Select
                        bg="#FFF"
                        color="gray.500"
                        error={errors.selectGenre}
                        placeholder="Gênero favorito:"
                        {...register("selectGenre")}
                      >
                        <option value="Ação">Ação</option>
                        <option value="Aventura">Aventura</option>
                        <option value="Animação">Animação</option>
                        <option value="Comédia">Comédia</option>
                        <option value="Crime">Crime</option>
                        <option value="Documentário">Documentário</option>
                        <option value="Família">Família</option>
                        <option value="Fantasia">Fantasia</option>
                        <option value="Faroeste">Faroeste</option>
                        <option value="Ficção científica">
                          Ficção científica
                        </option>
                        <option value="Guerra">Guerra</option>
                        <option value="História">História</option>
                        <option value="Música">Música</option>
                        <option value="Mistério">Mistério</option>
                        <option value="Romance">Romance</option>
                        <option value="Terror">Terror</option>
                        <option value="Thriller">Thriller</option>
                      </Select>
                    </Stack>
                    <Button
                      bg="red.500"
                      color="white"
                      mt="3"
                      type="submit"
                      _hover={{ bg: "red.500" }}
                    >
                      Registrar
                    </Button>
                  </FormControl>
                </form>
                <Box marginTop="3.5">
                  <Stack spacing="3.5">
                    <Flex align="center" color="white" direction="column">
                      <Text as="span" align="center">
                        Já tem cadastro? Então vamos ao{" "}
                        <Link as={ReachLink} to="/login">
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
        )}
      </Box>
    </Box>
  );
};

export default Register;
