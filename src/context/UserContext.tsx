import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api/api";

type UserContextProps = {
  children: ReactNode;
};

type UserContextType = {
  data: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }[];
  setData: (
    newState: {
      id: number;
      name: string;
      username: string;
      email: string;
      address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
          lat: string;
          lng: string;
        };
      };
      phone: string;
      website: string;
      company: {
        name: string;
        catchPhrase: string;
        bs: string;
      };
    }[]
  ) => void;
  user: {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }[];
  setUser: (
    newState: {
      userId: number;
      id: number;
      title: string;
      completed: boolean;
    }[]
  ) => void;
  checked: boolean;
  setChecked: (newState: boolean) => void;
  id: number;
  setId: (newState: number) => void;
  name: string;
  setName: (newState: string) => void;
  photo: string;
  setPhoto: (newState: string) => void;
  getUser: () => void;
  getPhoto: () => void;
  modalAdd: boolean;
  setModalAdd: (newState: boolean) => void;
  toggleModalAdd: () => void;
  toastSucess: boolean;
  setToastSucess: (newState: boolean) => void;
  toggleToastSucess: () => void;
  assignment: string;
  setAssignment: (newState: string) => void;
  getAssignment: (event: string) => void;
  postAssignment: () => void;
  getChecked: (event: boolean) => void;
};

const UserContextValue = {
  data: [
    {
      id: 0,
      name: "",
      username: "",
      email: "",
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
          lat: "",
          lng: "",
        },
      },
      phone: "",
      website: "",
      company: {
        name: "",
        catchPhrase: "",
        bs: "",
      },
    },
  ],
  setData: () => {},
  user: [
    {
      userId: 0,
      id: 0,
      title: "",
      completed: false,
    },
  ],
  setUser: () => {},
  id: 0,
  setId: () => {},
  name: "",
  setName: () => {},
  getUser: () => {},
  checked: false,
  setChecked: () => {},
  photo: "",
  setPhoto: () => {},
  getPhoto: () => {},
  modalAdd: false,
  setModalAdd: () => {},
  toggleModalAdd: () => {},
  toastSucess: false,
  setToastSucess: () => {},
  toggleToastSucess: () => {},
  assignment: "",
  setAssignment: () => {},
  getAssignment: () => {},
  postAssignment: () => {},
  getChecked: () => {},
};

export const UserContext = createContext<UserContextType>(UserContextValue);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [data, setData] = useState(UserContextValue.data);
  const [id, setId] = useState(UserContextValue.id);
  const [name, setName] = useState(UserContextValue.name);
  const [photo, setPhoto] = useState(UserContextValue.photo);
  const [assignment, setAssignment] = useState(UserContextValue.assignment);
  const [user, setUser] = useState(UserContextValue.user);
  const [checked, setChecked] = useState(UserContextValue.checked);
  const [modalAdd, setModalAdd] = useState(UserContextValue.modalAdd);
  const [toastSucess, setToastSucess] = useState(UserContextValue.toastSucess);

  const getUserList = async () => {
    await api.get("/users").then((response) => {
      setData(response.data);
    });
  };

  const getUser = async () => {
    await api.get(`/todos/${id}`).then((response) => {
      const res = [response.data];
      setUser(res);
    });
  };

  const getPhoto = async () => {
    await api
      .get(`/photos/${id}`)
      .then((response) => setPhoto(response.data.url));
  };

  const getAssignment = async (event: string) => {
    setAssignment(event);
  };

  const getChecked = async (event: boolean) => {
    setChecked(event);
  };

  const postAssignment = async () => {
    const body = {
      userId: 1,
      id: id,
      title: assignment,
      completed: checked,
    };
    await api.post("/posts", body).then((response) => {
      const res = response.data;
      const newUser = [...user, res];
      setUser(newUser);
    });

    setChecked(false);
    setAssignment("");
    toggleModalAdd();
    toggleToastSucess();
  };

  const toggleModalAdd = () => {
    setModalAdd(!modalAdd);
  };

  const toggleToastSucess = () => {
    setToastSucess(!toastSucess);
    setTimeout(() => {
      setToastSucess(false);
    }, 2000);
  };

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <UserContext.Provider
      value={{
        data,
        setData,
        id,
        setId,
        name,
        setName,
        user,
        setUser,
        getUser,
        checked,
        setChecked,
        getChecked,
        photo,
        setPhoto,
        getPhoto,
        modalAdd,
        toggleModalAdd,
        setModalAdd,
        toastSucess,
        setToastSucess,
        toggleToastSucess,
        assignment,
        setAssignment,
        getAssignment,
        postAssignment,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
