import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";
import { ReactNode } from "react";

interface IGroups {
  children: ReactNode;
}

interface IGroupsProps {
  handleGroupCreation: (data: IGroupsContext) => void;
  getSpecificGroup: (data: IGroupsContext) => void;
  getGroups: (data: IGroupsContext) => void;
}
interface IGroupsContext {
  token: string;
  data: Object;
  name: string;
  description: string;
  category: string;
  groups: Object;
}
const GroupsContext = createContext({} as IGroupsProps);
export const GroupsProvider = ({ children }: IGroups) => {
  const [groups, setGroups] = useState([]);
  const [group, setGroup] = useState([]);
  const [token] =
    JSON.parse(localStorage.getItem("@movies:token") || "null") || false;

  const getGroups = (token: IGroupsContext) => {
    api
      .get("groups/subscriptions/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setGroups(response.data);
      })
      .catch((err) => console.log("Grupos não podem ser carregados"));
  };
  const getSpecificGroup = (token: IGroupsContext) => {
    api
      .get("groups/{groups.id}/", {
        headers: { Authorization: `Bearer ${token}` },
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
            Authorization: `Bearer ${token}`,
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
