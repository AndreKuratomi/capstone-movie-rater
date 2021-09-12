import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useRegister } from "../../Providers/Register";

export const Register = () => {
  interface IRegister {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
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
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Unequal emails!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const history = useHistory();
  const { signUp } = useRegister();

  const submitFunction = (data: IRegister) => {
    signUp(data);
    history.push("/login");
  };

  return (
    <>
      <header>
        <figure>
          <img src="../assets/img/logo" alt="Logo" />
          <figcaption>Logo</figcaption>
        </figure>
        <h3>MovieRater</h3>
        <nav>
          <Link to="/aboutus">Sobre Nós</Link>
          <Link to="/login">Entrar</Link>
          <Link to="/signup">Junte-se</Link>
        </nav>
      </header>

      <form onSubmit={handleSubmit(submitFunction)}>
        <input placeholder="Usuário" {...register("username")} />
        {errors.username?.message}
        <input placeholder="Email" {...register("email")} />
        {errors.email?.message}
        <input placeholder="Senha" {...register("password")} />
        {errors.password?.message}
        <input
          placeholder="Confirmação de senha"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword?.message}
        <button type="submit">Registrar</button>
      </form>
      <p>
        <Link to="/login">Entrar</Link>
      </p>
      <p>
        <Link to="/">Voltar para a página principal</Link>
      </p>
    </>
  );
};
