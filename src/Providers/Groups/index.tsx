import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";
import { ReactNode } from "react";
import { useAuth } from "../Auth";

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
  const [group, setGroup] = useState([]);
  const { auth } = useAuth();

  const getGroups = (auth: IGroupsContext) => {
    api
      .get("groups/subscriptions/", {
        headers: { Authorization: `Bearer ${auth}` },
      })
      .then((response) => {
        setGroups(response.data);
      })
      .catch((err) => console.log("Grupos não podem ser carregados"));
  };
  const getSpecificGroup = (auth: IGroupsContext) => {
    api
      .get("groups/{groups.id}/", {
        headers: { Authorization: `Bearer ${auth}` },
      })
      .then((response) => {
        setGroups(response.data);
      })
      .catch((err) => console.log("Grupos não podem ser carregados"));
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
      .catch((err) => console.log("Grupo não pode ser criado"));
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
