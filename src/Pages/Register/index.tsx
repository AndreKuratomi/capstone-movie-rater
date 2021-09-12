import { useHistory, Link as ReachLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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

import { Flex, Stack } from "@chakra-ui/layout";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import LogoRegister from "../../Assets/img/img register.png";

import { useRegister } from "../../Providers/Register";

import NavBar from "../../Components/NavBar";
// import { Input } from "../../Components/Form/Input";

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

interface IRegister {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Register = () => {
  // { problem = null }: IInput
  // const [colors, setColors] = useState<string>("default");

  // useEffect(() => {
  //   if (!problem) {
  //     return setColors("error");
  //   }
  // }, [problem]);

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
    confirmPassword: yup
      .string()
      .required("Required input!")
      .oneOf([yup.ref("password")], "Unequal emails!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  console.log(errors.username?.message);
  const history = useHistory();
  // const { signUp } = useRegister();

  const submitFunction = (data: IRegister) => {
    console.log(data);
    // signUp(data);

    api
      .post("/register/", data)
      .then((_) => {
        console.log("Cadastro realizado com sucesso!");
        history.push("/login");
      })
      .catch((_) => console.log("Falha no cadastro!"));
  };
  return (
    <>
      <NavBar />
      <Box bg="#000">
        <Image
          src={LogoRegister}
          alt="registerImage"
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
                <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
                {!!errors && (
                  <FormErrorMessage>
                    {errors.username?.message}
                  </FormErrorMessage>
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
              <InputGroup>
                <InputLeftElement children={<FaLock />} />
                <Input
                  bg="#FFF"
                  // borderColor={statusColor[colors]}
                  // color={statusColor[colors]}
                  placeholder="Confirmação de senha"
                  size="md"
                  type="password"
                  variant="outlined"
                  {...register("confirmPassword")}
                />
                {!!errors && (
                  <FormErrorMessage>{errors.message}</FormErrorMessage>
                )}
              </InputGroup>
            </Stack>
            <Button bg="#F00" color="white" margin-top="10" type="submit">
              Registrar
            </Button>
          </FormControl>
        </form>
        <Box marginTop="3.5">
          <Stack spacing="3.5">
            <Flex align="center" color="white" direction="column">
              <Text>
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
