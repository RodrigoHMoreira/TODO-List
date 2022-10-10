import { Wrap } from "./styles";

type ButtonSubmitProps = {
  putSubmit: (
    name: string,
    company: string,
    email: string,
    phone: string,
    website: string
  ) => void;
  content: string;
};

export const ButtonSubmit = ({ putSubmit, content }: ButtonSubmitProps) => {
  return <Wrap onClick={putSubmit}>{content}</Wrap>;
};
