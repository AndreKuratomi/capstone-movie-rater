import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}
const Providers = ({ children }: ProvidersProps) => {
  return { children };
};

export default Providers;
