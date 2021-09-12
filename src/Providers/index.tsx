import { ReactNode } from "react";
import { AuthProvider } from "./Auth";
import { GroupsProvider } from "./Groups";
import { MoviesProvider } from "./Movies";
import { RegisterProvider } from "./Register";
import { LoginProvider } from "./Login";

interface ProvidersProps {
  children: ReactNode;
}
const Providers = ({ children }: ProvidersProps) => {
  return (
    <MoviesProvider>
      <GroupsProvider>
        <AuthProvider>
          <RegisterProvider>
            <LoginProvider>{children}</LoginProvider>
          </RegisterProvider>
        </AuthProvider>
      </GroupsProvider>
    </MoviesProvider>
  );
};

export default Providers;
