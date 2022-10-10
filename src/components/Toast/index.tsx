import { CheckCircle, X } from "phosphor-react";
import { Wrap } from "./styles";

export type ToastRequestProps = {
  message: string;
};

export const Toast = ({ message }: ToastRequestProps) => {
  return (
    <Wrap>
      <main>
        <CheckCircle size={30} color=" #008000" />
        <p style={{ fontSize: 18 }}>{message}</p>
      </main>
    </Wrap>
  );
};
