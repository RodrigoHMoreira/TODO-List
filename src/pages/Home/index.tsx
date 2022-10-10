import Form from "../../components/Form";
import loginImage from "../../assets/login.png";
import { Wrap } from "./styles";
import { useEffect } from "react";

export const Home = () => {
  const verification = (newAdmin: { email: string; password: string }) => {
    const url = window.location.href + "users";

    if (newAdmin.email === "admin" && newAdmin.password === "admin") {
      window.location.href = url;
    }
  };

  useEffect(() => {}, []);

  return (
    <Wrap>
      <section>
        <img src={loginImage} alt="login" />
        <Form verification={verification} />
      </section>
    </Wrap>
  );
};
