import {
  Gear,
  PencilSimple,
  TrashSimple,
  UserCirclePlus,
  UserList,
  XCircle,
} from "phosphor-react";
import { useEffect, useState } from "react";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Header } from "../../components/Header";
import { Modal } from "../../components/Modal";
import { Toast } from "../../components/Toast";
import { api } from "../../services/api/api";
import { Background, Wrap } from "./styles";

type UsersProps = {
  modalAdd: boolean;
  toggleModalAdd: () => void;
  toastSucess: boolean;
  toggleToastSucess: () => void;
};

export const Users = ({
  modalAdd,
  toggleModalAdd,
  toastSucess,
  toggleToastSucess,
}: UsersProps) => {
  const [data, setData] = useState([{}]);

  const getDataForm = async (
    name: string,
    company: string,
    email: string,
    phone: string,
    website: string
  ) => {
    const body = {
      id: 0,
      name: name,
      username: "",
      email: email,
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
      phone: phone,
      website: website,
      company: {
        name: company,
        catchPhrase: "",
        bs: "",
      },
    };

    await api.post("/users", body).then((response) => {
      const res = response.data;
      const newUser = [...data, res];
      setData(newUser);
      toggleToastSucess();
      toggleModalAdd();
    });
  };

  const getUserList = async () => {
    await api.get("/users").then((response) => {
      setData(response.data);
    });
  };

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <>
      <Header />
      <Wrap>
        <header>
          <h1>COLABORADORES</h1>
          <div id="btn-desktop">
            <ButtonAdd onClick={toggleModalAdd} content={"ADD Usuário"} />
          </div>
          <div id="btn-mobile">
            <button onClick={toggleModalAdd}>
              <UserCirclePlus size={30} />
            </button>
          </div>
        </header>
        <div>
          <table>
            <thead>
              <tr>
                <th>MATRÍCULA</th>
                <th>COLABORADOR</th>
                <th>AÇÃO</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item: any, index) => (
                <tr key={index}>
                  <td align="center" data-label="MATRÍCULA">
                    {item.id}20010
                  </td>
                  <td data-label="USUÁRIO">{item.name}</td>
                  <td data-label="" align="center">
                    <div>
                      <UserList
                        id="link"
                        size={20}
                        onClick={() =>
                          (location.href = `/datausers/${item.name}#${item.id}`)
                        }
                      />
                      <PencilSimple
                        id="link"
                        size={20}
                      />
                      <TrashSimple
                        id="link"
                        size={20}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {modalAdd && (
          <Background>
            <Modal toggleModalAdd={toggleModalAdd} getDataForm={getDataForm} />
          </Background>
        )}
        {toastSucess && 
        <Toast message={"Usuário adicionado com sucesso!"}/>
        }
      </Wrap>
    </>
  );
};
