import { useHistory, Link as ReachLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../Services/api";

import {
  useMediaQuery,
  Box,
  Button,
  FormControl,
  Link,
  Text,
} from "@chakra-ui/react";

import { Input } from "../../Components/Form/Input";

import { Flex, Stack } from "@chakra-ui/layout";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import LogoRegister from "../../Assets/img/img register.png";

// import { useRegister } from "../../Providers/Register";

import NavBar from "../../Components/NavBar";
import NavMobile from "../../Components/NavMobile";

interface IRegister {
  username: string;
  email: string;
  password: string;
}

<<<<<<< HEAD
export const Register = () => {
=======
const Register = () => {
  // { problem = null }: IInput
  // const [colors, setColors] = useState<string>("default");

  // useEffect(() => {
  //   if (!problem) {
  //     return setColors("error");
  //   }
  // }, [problem]);

>>>>>>> b018c87c2dcaeed326d265ccb17560f23e04a7c1
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

  const submitFunction = (data: IRegister) => {
    console.log(data);

    api
      .post("register", data)
      .then((_) => {
        console.log("Cadastro realizado com sucesso!");
        history.push("/login");
      })
      .catch((_) => console.log("Falha no cadastro!"));
  };

  const [mobileVersion] = useMediaQuery("(max-width: 768px)");
  const [desktopVersion] = useMediaQuery("(min-width:768px)");

  return (
    <>
      {mobileVersion ? <NavMobile /> : <NavBar />}

      <Flex align="center" bg="#000" direction="column" height="100vh">
        <form onSubmit={handleSubmit(submitFunction)}>
          {mobileVersion ? (
            <Box bgImage={LogoRegister}>
              <FormControl
                align="center"
                borderBottom="4px solid white"
                padding="1.5rem 4rem"
              >
                <Stack spacing="5">
                  <Input
<<<<<<< HEAD
                    error={errors.username}
                    icon={FaUserAlt}
                    placeholder="Usuário"
=======
                    bg="#FFF"
                    // borderColor={statusColor[colors]}
                    // color={statusColor[colors]}
                    icon={<FaUserAlt />}
                    size="md"
                    variant="outlined"
                    placeholder="Username"
>>>>>>> b018c87c2dcaeed326d265ccb17560f23e04a7c1
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
<<<<<<< HEAD
                    error={errors.password}
                    icon={FaLock}
                    placeholder="Senha"
=======
                    bg="#FFF"
                    // borderColor={statusColor[colors]}
                    // color={statusColor[colors]}
                    placeholder="Password"
                    size="md"
>>>>>>> b018c87c2dcaeed326d265ccb17560f23e04a7c1
                    type="password"
                    {...register("password")}
                  />
                  <Input
<<<<<<< HEAD
                    error={errors.confirmPassword}
                    icon={FaLock}
                    placeholder="Confirmar senha"
=======
                    bg="#FFF"
                    // borderColor={statusColor[colors]}
                    // color={statusColor[colors]}
                    placeholder="Password confirmation"
                    size="md"
>>>>>>> b018c87c2dcaeed326d265ccb17560f23e04a7c1
                    type="password"
                    {...register("confirmPassword")}
                  />
<<<<<<< HEAD
                </Stack>
                <Button bg="#F00" color="white" margin-top="10" type="submit">
                  Registrar
                </Button>
              </FormControl>
            </Box>
=======
                  {!!errors && (
                    <FormErrorMessage>{errors.message}</FormErrorMessage>
                  )}
                </InputGroup>
              </Stack>
              <Button bg="#F00" color="white" margin-top="10" type="submit">
                Register
              </Button>
            </FormControl>
>>>>>>> b018c87c2dcaeed326d265ccb17560f23e04a7c1
          ) : (
            <Box bgImage={LogoRegister}>
              <FormControl
                align="center"
                borderBottom="4px solid white"
                padding="3.5rem 10rem"
              >
                <Stack spacing="7">
                  <Input
<<<<<<< HEAD
                    error={errors.username}
                    icon={FaUserAlt}
                    placeholder="Usuário"
=======
                    bg="#FFF"
                    // borderColor={statusColor[colors]}
                    // color={statusColor[colors]}
                    icon={<FaUserAlt />}
                    size="md"
                    variant="outlined"
                    placeholder="Username"
>>>>>>> b018c87c2dcaeed326d265ccb17560f23e04a7c1
                    {...register("username")}
                  />
                  <Input
                    error={errors.email}
                    icon={MdEmail}
                    placeholder="Email"
                    {...register("email")}
                  />
                  <Input
<<<<<<< HEAD
                    error={errors.password}
                    icon={FaLock}
                    placeholder="Senha"
=======
                    bg="#FFF"
                    // borderColor={statusColor[colors]}
                    // color={statusColor[colors]}
                    placeholder="Password"
                    size="md"
                    type="password"
                    variant="outlined"
>>>>>>> b018c87c2dcaeed326d265ccb17560f23e04a7c1
                    {...register("password")}
                  />
                  <Input
<<<<<<< HEAD
                    error={errors.confirmPassword}
                    icon={FaLock}
                    placeholder="Confirmar senha"
                    {...register("confirmPassword")}
                  />
                </Stack>
                <Button bg="#F00" color="white" margin-top="2" type="submit">
                  Registrar
                </Button>
              </FormControl>
            </Box>
=======
                    bg="#FFF"
                    // borderColor={statusColor[colors]}
                    // color={statusColor[colors]}
                    placeholder="Password confirmation"
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
                Register
              </Button>
            </FormControl>
>>>>>>> b018c87c2dcaeed326d265ccb17560f23e04a7c1
          )}
        </form>
        <Box marginTop="3.5">
          <Stack spacing="3.5">
            <Flex align="center" color="white" direction="column">
              <Text as="span" align="center">
                Already a member? Go to {" "}
                <Link as={ReachLink} to="/login">
                  Login
                </Link>
              </Text>
              <Link as={ReachLink} to="/">
                Back to homepage
              </Link>
            </Flex>
          </Stack>
        </Box>
      </Flex>
    </>
  );
};

export default Register