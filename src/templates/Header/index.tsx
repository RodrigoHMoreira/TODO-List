import { Img, Wrap } from "./styles";
import logoImage from "../../assets/logo.png";

export const Header = () => {
  return (
    <Wrap>
      <a href="http://localhost:3000/">
        <Img src={logoImage} alt="logo-image" />
      </a>
    </Wrap>
  );
};
