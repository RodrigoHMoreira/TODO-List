import { Plus } from "phosphor-react";
import { Wrap } from "./styles";

type ButtonAddProps = {
  onClick: () => void;
  content: string;
};

export const ButtonAdd = ({ onClick, content }: ButtonAddProps) => {
  return (
    <Wrap onClick={onClick}>
      <Plus size={15} weight="bold" />
      {content}
    </Wrap>
  );
};
