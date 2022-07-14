import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { ButtonCancel } from "../ButtonCancel";
import { ButtonClose } from "../ButtonClose";
import { ButtonSubmit } from "../ButtonSubmit";
import { InputText } from "../InputText";
import { LabelAdd } from "../LabelAdd";
// import { RegisterService } from "./service";
import { Header, Main, Footer, Wrap, Tittle, InputRadio } from "./styles";

export const Modal = () => {
  const {
    toggleModalAdd,
    assignment,
    getAssignment,
    postAssignment,
    getChecked,
  } = useContext(UserContext);

  return (
    <>
      <Wrap>
        <Header>
          <ButtonClose putClose={toggleModalAdd} />
        </Header>
        <Tittle>Adicionar Tarefa</Tittle>
        <Main>
          <LabelAdd content={"Escreva o nome da tarefa:"} />
          <InputText onChange={getAssignment} value={assignment} />
        </Main>
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            width: " 85%",
          }}
        >
          <InputRadio
            onChange={(event) => {
              getChecked(event.target.checked);
            }}
          />
          <LabelAdd content={"Concluída"} />
        </div>
        <Footer>
          <ButtonCancel putCancel={toggleModalAdd} content={"Cancelar"} />
          <ButtonSubmit putSubmit={postAssignment} content={"Enviar"} />
        </Footer>
      </Wrap>
    </>
  );
};
