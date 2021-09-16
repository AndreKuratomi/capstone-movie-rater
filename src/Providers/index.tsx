import { ReactNode } from "react";
import { AuthProvider } from "./Auth";
import { GroupsProvider } from "./Groups";
import { MoviesProvider } from "./Movies";
import { UserProvider } from "./User";

interface ProvidersProps {
  children: ReactNode;
}
const Providers = ({ children }: ProvidersProps) => {
  return (
    <MoviesProvider>
      <GroupsProvider>
        <AuthProvider>
          <UserProvider>{children}</UserProvider>
        </AuthProvider>
      </GroupsProvider>
    </MoviesProvider>
  );
};

export default Providers;
