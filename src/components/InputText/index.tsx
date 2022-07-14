import { InputWrap } from "./styles";

type InputProps = {
  onChange: (event: string) => void;
  value: string;
};

export const InputText = ({ onChange, value }: InputProps) => {
  return (
    <InputWrap
      onChange={(event) => onChange(event.target.value)}
      value={value}
    />
  );
};
