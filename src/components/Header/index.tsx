import logoImage from "../../assets/logo.png";
import { SignOut } from "phosphor-react";
import { Wrap } from "./styles";


export const Header = () => {
  return (
    <Wrap>
      <a href="http://localhost:3000/">
        <img src={logoImage} alt="logo-image" />
      </a>
      <a href="http://localhost:3000/">
        <section>
          <SignOut size={20} />
          SAIR
        </section>
      </a>
    </Wrap>
  );
};
