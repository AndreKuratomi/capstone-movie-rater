import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const Login = () => {
  interface ILogin {
    data: string;
  }

  interface ILoginValues {
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
  } = useForm<ILoginValues>({
    resolver: yupResolver(formSchema),
  });
  const history = useHistory();
  const submitFunction = ({ data }: ILogin) => {
    console.log(data);
    history.push("/dashboard");
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
          <Link to="/singIn">Entrar</Link>
          <Link to="/singUp">Junte-se</Link>
        </nav>
      </header>
      <form onSubmit={handleSubmit(submitFunction)}>
        <input placeholder="Usuário" {...register("username")} />
        {errors.username?.message}
        <input placeholder="Senha" {...register("password")} />
        {errors.password?.message}
        <button type="submit">Entrar</button>
      </form>
      <p>
        <Link to="/signUp">Registrar</Link>
      </p>
      <p>
        <Link to="/">Voltar para a página principal</Link>
      </p>
    </>
  );
};
