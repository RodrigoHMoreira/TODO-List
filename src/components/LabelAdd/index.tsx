import { Plus } from "phosphor-react";
import { Wrap } from "./styles";

type LabelAddProps = {
  content: string;
};

export const LabelAdd = ({ content }: LabelAddProps) => {
  return <Wrap>{content}</Wrap>;
};
