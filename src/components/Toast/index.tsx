import { CheckCircle, X } from "phosphor-react";
import { Button, Header, Main, Wrap } from "./styles";

export type ToastRequestProps = {
  handleToast: () => void;
  message: string;
};

export const Toast = ({ handleToast, message }: ToastRequestProps) => {
  return (
    <Wrap>
      <Header>
        <Button onClick={handleToast}>
          <X size={20} weight="bold" />
        </Button>
      </Header>
      <Main>
        <CheckCircle size={30} color=" #008000" />
        <p style={{ fontSize: 18 }}>{message}</p>
      </Main>
    </Wrap>
  );
};
