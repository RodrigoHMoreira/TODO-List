import { useState } from "react";
import logoImage from "../../assets/logo.png";
import { WrapForm } from "./styles";


type FormProps = {
  verification: (newAdmin: { email: string; password: string }) => void;
};

const Form = ({ verification }: FormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e: any) => {
    e.preventDefault();

    const newAdmin = {
      email: email,
      password: password,
    };

    verification(newAdmin);
    setEmail("");
    setPassword("");
  };

  return (
    <WrapForm>
      <form>
        <header>
          <img src={logoImage} alt="" />
        </header>
        <main>
          <label>E-mail:</label>
          <input
            type="text"
            placeholder="email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Senha:</label>
          <input
            type="password"
            placeholder="**********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </main>
        <footer>
          <button type="submit" onClick={(e) => submit(e)}>
            Acessar
          </button>
          <p>
            Esqueceu sua senha? <a onClick={()=>alert("email: admin\nsenha: admin")}>Clique aqui</a>
          </p>
        </footer>
      </form>
    </WrapForm>
  );
};

export default Form;
