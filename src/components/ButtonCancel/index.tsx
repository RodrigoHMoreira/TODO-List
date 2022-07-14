import { Wrap } from "./styles";

type ButtonCancelProps = {
  putCancel: () => void;
  content: string;
};

export const ButtonCancel = ({ putCancel, content }: ButtonCancelProps) => {
  return <Wrap onClick={putCancel}>{content}</Wrap>;
};