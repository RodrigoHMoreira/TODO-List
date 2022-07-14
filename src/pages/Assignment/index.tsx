import { useContext, useEffect } from "react";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Modal } from "../../components/Modal";
import { Toast } from "../../components/Toast";
import { UserContext } from "../../context/UserContext";
import { Background, Header, Table, Td, Th, Tittle, Tr, Wrap } from "./styles";

export const Assignment = () => {
  const {
    photo,
    name,
    user,
    getUser,
    getPhoto,
    modalAdd,
    toggleModalAdd,
    toastSucess,
    toggleToastSucess,
    setToastSucess,
  } = useContext(UserContext);

  useEffect(() => {
    getUser();
    getPhoto();
  }, []);

  return (
    <>
      <Wrap>
        <Header>
          <Tittle>
            <img
              src={photo}
              style={{
                width: "100px",
                height: "100px",
                marginRight: "10px",
                borderRadius: "50%",
              }}
            />
            {name}
          </Tittle>
          <ButtonAdd onClick={toggleModalAdd} content={"ADIONAR TAREFA"} />
        </Header>
        {modalAdd && (
          <Background>
            <Modal />
          </Background>
        )}
        <Table>
          <Tr>
            <Th>Tarefa</Th>
            <Th>Status</Th>
          </Tr>
          {user.map((item, index) => (
            <Tr key={index}>
              <Td align="left">{item.title}</Td>
              <Td id="center">{item.completed ? "Concluída" : "Pendente"}</Td>
            </Tr>
          ))}
        </Table>
        {toastSucess && (
          <Toast
            handleToast={toggleToastSucess}
            message={"Tarefa adiciona com sucesso!"}
          />
        )}
      </Wrap>
    </>
  );
};
