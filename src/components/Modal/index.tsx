import { useState } from "react";
import { ButtonCancel } from "../ButtonCancel";
import { ButtonSubmit } from "../ButtonSubmit";
import { InputText } from "../InputText";
import { LabelAdd } from "../LabelAdd";
import { Wrap } from "./styles";

type ModalProps = {
  getDataForm: (
    name: string,
    company: string,
    email: string,
    phone: string,
    website: string
  ) => void;
  toggleModalAdd: () => void;
};

export const Modal = ({ getDataForm, toggleModalAdd }: ModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");

  return (
    <>
      <Wrap>
        <header>
          <h2>Adicionar Usuário</h2>
        </header>
        <main>
          <LabelAdd content={"Usuário:"} />
          <InputText onChange={setName} value={name} />
          <LabelAdd content={"Compania:"} />
          <InputText onChange={setCompany} value={company} />
          <LabelAdd content={"E-mail:"} />
          <InputText onChange={setEmail} value={email} />
          <LabelAdd content={"Telefone:"} />
          <InputText onChange={setPhone} value={phone} />
          <LabelAdd content={"Website:"} />
          <InputText onChange={setWebsite} value={website} />
        </main>
        <footer>
          <ButtonCancel putCancel={toggleModalAdd} content={"Cancelar"} />
          <ButtonSubmit
            putSubmit={() => {
              getDataForm(
                name,
                company,
                email,
                phone,
                website
              );
            }}
            content={"Enviar"}
          />
        </footer>
      </Wrap>
    </>
  );
};
