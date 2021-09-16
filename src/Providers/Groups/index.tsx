import { createContext, useContext, useState } from "react";
import api from "../../Services/api";
import { ReactNode } from "react";
import { useAuth } from "../Auth";
import { useToast } from "@chakra-ui/react";

interface IGroups {
  children: ReactNode;
}

interface IGroupsProps {
  handleGroupCreation: (data: IGroupsContext) => void;
  getSpecificGroup: (id: IGroupsProps) => void;
  getGroups: (data: IGroupsContext) => void;
}
interface IGroupsContext {
  data: Object;
  name: string;
  description: string;
  category: string;
  groups: Object;
  id: number;
}

const GroupsContext = createContext({} as IGroupsProps);

export const GroupsProvider = ({ children }: IGroups) => {
  const [groups, setGroups] = useState([]);
  const { auth } = useAuth();

  const toast = useToast();

  const getGroupsFailToast = () => {
    toast({
      description: "",
      duration: 5000,
      position: "top",
      status: "error",
      title: "Falha de conexão",
    });
  };
  const getGroups = () => {
    api
      .get("groups/", {
        headers: { Authorization: `Bearer ${auth}` },
      })
      .then((response) => {
        setGroups(response.data);
      })
      .catch((err) => getGroupsFailToast());
  };

  const getSpecificGroupFailToast = () => {
    toast({
      description: "",
      duration: 5000,
      position: "top",
      status: "error",
      title: "Grupos não podem ser carregados",
    });
  };
  const getSpecificGroup = (id: IGroupsProps) => {
    api
      .get(`groups/${id}/`, {
        headers: { Authorization: `Bearer ${auth}` },
      })
      .then((response) => {
        setGroups(response.data);
      })
      .catch((_) => getSpecificGroupFailToast());
  };

  const groupCreationFailToast = () => {
    toast({
      description: "",
      duration: 5000,
      position: "top",
      status: "error",
      title: "Grupo não pode ser criado",
    });
  };
  const handleGroupCreation = (data: IGroupsContext) => {
    const { name, description, category } = data;
    api
      .post(
        "groups/",
        {
          name: name,
          description: description,
          category: category,
        },
        {
          headers: {
            Authorization: `Bearer ${auth}`,
          },
        }
      )
      .catch((_) => groupCreationFailToast());
  };

  return (
    <GroupsContext.Provider
      value={{ handleGroupCreation, getSpecificGroup, getGroups }}
    >
      {children}
    </GroupsContext.Provider>
  );
};

export const useGroupsUser = () => useContext(GroupsContext);
