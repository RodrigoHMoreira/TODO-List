import { X } from "phosphor-react";
import { Wrap } from "./styles";

type ButtonCloseProps = {
  putClose: () => void;
};

export const ButtonClose = ({ putClose }: ButtonCloseProps) => {
  return (
    <Wrap onClick={putClose}>
      <X size={15} weight="bold" />{" "}
    </Wrap>
  );
};