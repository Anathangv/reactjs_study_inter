import { InputHTMLAttributes } from "react";

import { InputContainer } from "./styles";

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  const { placeholder, type, onChange, value } = props;

  return (
    <InputContainer>
      <input
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        value={value}
      />
    </InputContainer>
  );
}
