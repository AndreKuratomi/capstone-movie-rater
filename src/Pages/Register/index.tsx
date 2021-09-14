import { useHistory, Link as ReachLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../Services/api";

import {
  Box,
  Button,
  FormControl,
  Image,
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

import LogoRegister from "../../Assets/img/img register.png";

import NavBar from "../../Components/NavBar";
import NavMobile from "../../Components/NavMobile";

interface IRegister {
  username: string;
  email: string;
  password: string;
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
    console.log(data);

    api
      .post("register", data)
      .then((_) => {
        addSuccessToast();
        history.push("/login");
      })
      .catch((_) => {
        addFailToast();
      });
  };

  const [mobileVersion] = useMediaQuery("(max-width: 768px)");
  const [desktopVersion] = useMediaQuery("(min-width:768px)");

  return (
    <>
      {mobileVersion ? <NavMobile /> : <NavBar />}

      <Flex align="center" bg="#000" direction="column" height="100vh">
        <form onSubmit={handleSubmit(submitFunction)}>
          {mobileVersion ? (
            <Box
              bg="#000"
              backgroundImage={LogoRegister}
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
            >
              {/* <Image src={LogoRegister} /> */}
              <FormControl
                align="center"
                //
                borderBottom="4px solid white"
                padding="1.5rem 4rem"
              >
                <Stack spacing="4">
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
                    placeholder="Gênero favorito de filme:"
                    {...register("selectGenre")}
                  >
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                  </Select>
                </Stack>
                <Button bg="#F00" color="white" mt="5" type="submit">
                  Registrar
                </Button>
              </FormControl>
            </Box>
          ) : (
            <Box bgImage={LogoRegister}>
              <FormControl
                align="center"
                // backgroundColor="#FFF"
                borderBottom="4px solid white"
                padding="3.5rem 10rem"
              >
                <Stack spacing="4">
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
                    placeholder="Gênero favorito de filme:"
                    {...register("selectGenre")}
                  >
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                  </Select>
                </Stack>
                <Button bg="#F00" color="white" mt="6" type="submit">
                  Registrar
                </Button>
              </FormControl>
            </Box>
          )}
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
      </Flex>
    </>
  );
};

export default Register;
