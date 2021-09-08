import { Redirect, Route as ReactDOMRoute, RouteProps } from "react-router-dom";
import { useAuth } from "../Providers/Auth";

interface IRouteProps {
  isPrivate?: boolean;
  component: () => JSX.Element;
  path: string;
  exact?: boolean;
}

const Route = ({
  isPrivate = false,
  component: Component,
  path,
  ...rest
}: IRouteProps) => {
  const token = useAuth;

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? "/" : "/dashboard",
            }}
          />
        );
      }}
    />
  );
};

export default Route;
