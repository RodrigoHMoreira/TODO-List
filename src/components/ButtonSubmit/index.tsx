import { Wrap } from "./styles";

type ButtonSubmitProps = {
  putSubmit: () => void;
  content: string;
};

export const ButtonSubmit = ({ putSubmit, content }: ButtonSubmitProps) => {
  return <Wrap onClick={putSubmit}>{content}</Wrap>;
};